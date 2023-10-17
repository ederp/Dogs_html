function requestResponseAPI(endereco) {
	const Http = new XMLHttpRequest();
	const url = endereco;
	Http.open("GET", url);
	Http.send();
	return Http;
}

document.getElementById('select_cao').addEventListener('change', function() {
	let dogImage = document.getElementById('img_cao');
	let dogDesc = document.getElementById('desc_cao');
	const dogText = this.options[this.selectedIndex].text;
	dogImage.src = '';
	const requestDogApi = requestResponseAPI("https://dog.ceo/api/breed/"+this.value+"/images/random");
	requestDogApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const response = requestDogApi.responseText;
			const json = JSON.parse(response);
			dogImage.src = json.message;
		}
	}
	const requestWikiApi = requestResponseAPI("https://pt.wikipedia.org/api/rest_v1/page/summary/"+dogText+"?redirect=true");
	requestWikiApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const response = requestWikiApi.responseText;
			const json = JSON.parse(response);
			dogDesc.setHTML(json.extract_html);
		} else {
			const msgErro = "<p>Descrição do cachorro <b>"+dogText+"</b> indisponível no momento</p>";
			dogDesc.setHTML(msgErro);
		}
	}
})