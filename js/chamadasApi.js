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
	let dogImage = document.getElementById('img_cao');
	let dogDesc = document.getElementById('desc_cao');
	const dogText = this.options[this.selectedIndex].text;
	const idValue = this.options[this.selectedIndex].id;
	dogImage.src = '';
	const requestDogApi = requestAPI("https://dog.ceo/api/breed/"+this.value+"/images/random");
	requestDogApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const jsonDogApi = successResponse(this);
			dogImage.src = jsonDogApi.message;
		}
	}
	const requestWikiApi = requestAPI("https://"+idValue+".wikipedia.org/api/rest_v1/page/summary/"+dogText+"?redirect=true");
	requestWikiApi.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200){
			const jsonWikiApi = successResponse(this);
			dogDesc.setHTML(jsonWikiApi.extract_html);
		} else {
			const msgErro = "<p>Descrição do cachorro <b>"+dogText+"</b> indisponível no momento</p>";
			dogDesc.setHTML(msgErro);
		}
	}
})