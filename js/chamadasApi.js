function requestResponseAPI(endereco) {
	const Http = new XMLHttpRequest();
	const url = endereco;
	Http.open("GET", url);
	Http.send();
	return Http;
}

document.getElementById('selecao_caes').addEventListener('change', function() {
	const requestDogApi = requestResponseAPI("https://dog.ceo/api/breed/"+this.value+"/images/random");
	requestDogApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const response = requestDogApi.responseText;
			const json = JSON.parse(response);
			document.getElementById('img_cao').src = json.message;
		}
	}
	const requestWikiApi = requestResponseAPI("https://pt.wikipedia.org/api/rest_v1/page/summary/"+this.options[this.selectedIndex].text+"?redirect=true");
	requestWikiApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const response = requestWikiApi.responseText;
			const json = JSON.parse(response);
			document.getElementById('desc_cao').setHTML(json.extract_html);
		}
	}
})