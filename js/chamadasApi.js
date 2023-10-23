function requestAPI(endereco) {
	const Http = new XMLHttpRequest();
	const url = endereco;
	Http.open("GET", url);
	Http.send();
	return Http;
}

function successResponse(http) {
	const response = http.responseText;
	const json = JSON.parse(response);
	return json;
}

document.getElementById('select_cao').addEventListener('change', function() {
	let dogImagem  = document.getElementById('img_cao');
	let dogDesc = document.getElementById('desc_cao');
	const indSel = this.options[this.selectedIndex];
	dogImagem.src = '';
	const requestDogApi = requestAPI("https://dog.ceo/api/breed/"+this.value+"/images/random");
	requestDogApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const jsonDogApi = successResponse(this);
			dogImagem.src = jsonDogApi.message;
		}
	}
	const requestWikiApi = requestAPI("https://"+indSel.id+".wikipedia.org/api/rest_v1/page/summary/"+indSel.text+"?redirect=true");
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