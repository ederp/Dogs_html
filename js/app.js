import { PreencheSelect }  from './preencheSelect.js';
import { traduzTexto } from './traduzTexto.js';

const selectCaes = document.getElementById("select_cao");

new PreencheSelect(selectCaes);

function loadingImage(dogImagem, dogImagemLoad){
    dogImagem.style.display = 'none';
	dogImagemLoad.style.display = 'inline-flex';
}

function imageLoaded(dogImagem, dogImagemLoad){
	dogImagemLoad.style.display = 'none';
    dogImagem.style.display = 'inline-flex';
}

function requestAPI(endereco, label, dogConteudo, dogImagemLoad, api) {
	const successResponse = {
		'dogApi': function (json){
			imageLoaded(dogConteudo, dogImagemLoad);
			dogConteudo.src = json.message;
		},
		'wikipedia': function (json){
			const careceFontes = '<span style="color:gray"><sup>[</sup></span><sup><span>'+
				'<span style="color:gray"><i>carece de fontes</i></span></span>'+
				'<span class="printfooter">?</span><span style="color:gray">]</span></sup>';
			const htmlSaidaLimpo = json.extract_html.replaceAll(careceFontes, '');
			dogConteudo.innerHTML = htmlSaidaLimpo;
		},
	};

	const errorResponse = {
		'dogApi':  (dogConteudo) => dogConteudo,
		'wikipedia': (dogConteudo) => dogConteudo.innerHTML = '<p>Descrição do cachorro <b>' + label + '</b> indisponível no momento</p>',
	};
	
	const xhttp = new XMLHttpRequest();
	const url = endereco;
	xhttp.onreadystatechange = function() {
		if (this.readyState === 1 && api === 'dogApi') {
			loadingImage(dogConteudo, dogImagemLoad);
		}
		if (this.readyState === 4) {
			if (this.status === 200) {
				const json = JSON.parse(xhttp.responseText);
				successResponse[api](json);
			} else {
				errorResponse[api](dogConteudo);
			}
		}
	}
	xhttp.open("GET", url);
	xhttp.send();
}

selectCaes.addEventListener('change', function() {
	const dogImagem = document.getElementById('img_cao');
	const dogImagemLoad = document.getElementById('c-loader');
	let dogDescricao = document.getElementById('desc_cao');
	dogDescricao.innerHTML = '';
	const dogSelecionado = this.options[this.selectedIndex];
	requestAPI("https://dog.ceo/api/breed/"+this.value+"/images/random", this.value, dogImagem, dogImagemLoad, 'dogApi');
	if (dogSelecionado.className.includes("pt")) {
		requestAPI("https://pt.wikipedia.org/api/rest_v1/page/summary/"+dogSelecionado.text+"?redirect=true", dogSelecionado.text, dogDescricao, null, 'wikipedia');
	} else {
		dogDescricao.innerHTML = traduzTexto(this.value);
	}
})