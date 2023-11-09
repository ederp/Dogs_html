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

function requestAPI(endereco, label, dogDesc, dogImagem, dogImagemLoad, api) {
	const successResponse = {
		'dogApi': function (json){
			imageLoaded(dogImagem, dogImagemLoad);
			dogImagem.src = json.message;
		},
		'wikipedia': function (json){
			const careceFontes = '<span style="color:gray"><sup>[</sup></span><sup><span>'+
				'<span style="color:gray"><i>carece de fontes</i></span></span>'+
				'<span class="printfooter">?</span><span style="color:gray">]</span></sup>';
			const htmlSaidaLimpo = json.extract_html.replaceAll(careceFontes, '');
			dogDesc.innerHTML = htmlSaidaLimpo;
		},
	};

	const errorResponse = {
		'dogApi':  (dogDesc) => dogDesc,
		'wikipedia': (dogDesc) => dogDesc.innerHTML = '<p>Descrição do cachorro <b>' + label + '</b> indisponível no momento</p>',
	};
	
	const xhttp = new XMLHttpRequest();
	const url = endereco;
	xhttp.onreadystatechange = function() {
		if (this.readyState === 1 && api === 'dogApi') {
			loadingImage(dogImagem, dogImagemLoad);
		}
		if (this.readyState === 4) {
			if (this.status === 200) {
				const json = JSON.parse(xhttp.responseText);
				successResponse[api](json);
			} else {
				errorResponse[api](dogDesc);
			}
		}
	}
	xhttp.open("GET", url);
	xhttp.send();
}

selectCaes.addEventListener('change', function() {
	const dogImagem = document.getElementById('img_cao');
	const dogImagemLoad = document.getElementById('c-loader');
	let dogDesc = document.getElementById('desc_cao');
	dogDesc.innerHTML = '';
	const indSel = this.options[this.selectedIndex];
	requestAPI("https://dog.ceo/api/breed/"+this.value+"/images/random", this.value, null, dogImagem, dogImagemLoad, 'dogApi');
	if (indSel.className.includes("pt")) {
		requestAPI("https://pt.wikipedia.org/api/rest_v1/page/summary/"+indSel.text+"?redirect=true", indSel.text, dogDesc, null, null, 'wikipedia');
	} else {
		dogDesc.innerHTML = traduzTexto(this.value);
	}
})