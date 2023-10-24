function loadingImage(){
    document.getElementById('img_cao').style.display = "none";
	document.getElementById('c-loader').style.display = "inline-flex";
}

function requestAPI(endereco) {
	const Http = new XMLHttpRequest();
	const url = endereco;
	Http.open("GET", url);
	Http.send();
	if (endereco.includes('dog.ceo')){
		loadingImage();
	}
	return Http;
}

function successResponse(http) {
	const response = http.responseText;
	const json = JSON.parse(response);
	return json;
}

function imageLoaded(imgCao, loading){
	loading.style.display = "none";
    imgCao.style.display = "inline-flex";
}

document.getElementById('select_cao').addEventListener('change', function() {
	const dogImagem  = document.getElementById('img_cao');
	const dogImagemLoad = document.getElementById('c-loader');
	let dogDesc = document.getElementById('desc_cao');
	dogDesc.setHTML("");
	const indSel = this.options[this.selectedIndex];
	const requestDogApi = requestAPI("https://dog.ceo/api/breed/"+this.value+"/images/random");
	requestDogApi.onreadystatechange = function(){
		imageLoaded(dogImagem, dogImagemLoad);
		if(this.readyState === 4 && this.status === 200){
			const jsonDogApi = successResponse(this);
			dogImagem.src = jsonDogApi.message;
		}
	}
	const requestWikiApi = requestAPI("https://"+indSel.className+".wikipedia.org/api/rest_v1/page/summary/"+indSel.text+"?redirect=true");
	requestWikiApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const jsonWikiApi = successResponse(this);
			const careceFontes = '<span style="color:gray"><sup>[</sup></span><sup><span><span style="color:gray"><i>carece de fontes</i></span></span><span class="printfooter">?</span><span style="color:gray">]</span></sup>';
			const htmlSaidaLimpo = jsonWikiApi.extract_html.replaceAll(careceFontes, "");
			dogDesc.setHTML(htmlSaidaLimpo);
		} else {
			const msgErro = "<p>Descrição do cachorro <b>"+indSel.text+"</b> indisponível no momento</p>";
			dogDesc.setHTML(msgErro);
		}
	}
})