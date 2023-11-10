import { PreencheSelect }  from './preencheSelect.js';
import { traduzTexto } from './traduzTexto.js';

const selectCaes = document.getElementById("select_cao");
const dogImagemLoad = document.getElementById('c-loader');

new PreencheSelect(selectCaes);

function loadingImage(dogImagem, dogImagemLoad){
    dogImagem.style.display = 'none';
	dogImagemLoad.style.display = 'inline-flex';
}

function imageLoaded(dogImagem, dogImagemLoad){
	dogImagemLoad.style.display = 'none';
    dogImagem.style.display = 'inline-flex';
}

function requestAPI(label, dogConteudo, api) {
	const apiObj = {
		'dogApi': {
			endereco: "https://dog.ceo/api/breed/" + label + "/images/random",
			successResponse: function (json) {
				imageLoaded(dogConteudo, dogImagemLoad);
				dogConteudo.src = json.message;
			},
			errorResponse: (dogConteudo) => dogConteudo
		},
		'wikipedia': {
			endereco: "https://pt.wikipedia.org/api/rest_v1/page/summary/" + label + "?redirect=true",
			successResponse: function (json) {
				const limpaCareceFontes = '<span style="color:gray"><sup>[</sup></span><sup><span>' +
					'<span style="color:gray"><i>carece de fontes</i></span></span>' +
					'<span class="printfooter">?</span><span style="color:gray">]</span></sup>';
				const htmlSaidaLimpo = json.extract_html.replaceAll(limpaCareceFontes, '');
				dogConteudo.innerHTML = htmlSaidaLimpo;
			},
			errorResponse: (dogConteudo) => dogConteudo.innerHTML = '<p>Descrição do cachorro <b>' + label + '</b> indisponível no momento</p>'
		}
	};
	
	const xhttp = new XMLHttpRequest();
	const url = apiObj[api].endereco;
	xhttp.onreadystatechange = function() {
		if (this.readyState === 1 && api === 'dogApi') {
			loadingImage(dogConteudo, dogImagemLoad);
		}
		if (this.readyState === 4) {
			if (this.status === 200) {
				const json = JSON.parse(xhttp.responseText);
				apiObj[api].successResponse(json);
			} else {
				apiObj[api].errorResponse(dogConteudo);
			}
		}
	}
	xhttp.open("GET", url);
	xhttp.send();
}

selectCaes.addEventListener('change', function() {
	const dogImagem = document.getElementById('img_cao');
	let dogDescricao = document.getElementById('desc_cao');
	dogDescricao.innerHTML = '';
	const dogSelecionado = this.options[this.selectedIndex];
	requestAPI(this.value, dogImagem, 'dogApi');
	if (dogSelecionado.className.includes("pt")) {
		requestAPI(dogSelecionado.text, dogDescricao, 'wikipedia');
	} else {
		dogDescricao.innerHTML = traduzTexto(this.value);
	}
})