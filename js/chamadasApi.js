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

function translateText(racaCao) {
	switch(racaCao) {
		case "eskimo":
			return "<p>O <b>Cão Esquimó Americano</b> é uma raça de cão de companhia, originária"+
				" da Alemanha. O cão esquimó americano é um membro da família Spitz. Os progenitores"+
				" da raça foram o Spitz Alemão, mas devido ao sentimento anti-alemão durante a Primeira"+
				" Guerra Mundial, ele foi renomeado como \"Cão Esquimó Americano\".</p>";
		break;
		case "husky":
			return "<p><b>Husky</b> é um termo geral para um cão usado nas regiões polares, principalmente"+
				" e especificamente para trabalhar como cães de trenó. Refere-se a um tipo tradicional"+
				" do norte, notável por sua tolerância ao frio e robustez geral. Os huskies de corrida"+
				" modernos que mantêm características da raça ártica representam um cruzamento de constante"+
				" evolução dos cães mais rápidos.</p>";
		break;
		case "hound/plott":
			return "<p>O <b>Plott Hound</b> é um grande cão farejador, originalmente criado para caçar"+
				" ursos. Em 1989, a Assembléia Geral da Carolina do Norte designou o Plott Hound como"+
				" o cão oficial do estado. O Plott Hound foi registrado pela primeira vez no United"+
				" Kennel Club em 1946.</p>";
		break;
		case "puggle":
			return "<p>Um <b>puggle</b> é um cão resultante do cruzamento de um pug e um beagle."+
				" O puggle foi criado pela primeira vez por criadores de cães nos Estados Unidos"+
				" com o objetivo de produzir um cão de companhia saudável com menor probabilidade"+
				" de herdar alguns problemas de saúde e comportamentais comuns nas raças dos pais.</p>";
		break;
		case "tervuren":
			return "<p>O <b>Tervueren</b> é uma das quatro variedades da raça de cães pastor-belga,"+
				" originária da Bélgica. Tornou-se popular quando começou a ser usado como farejador"+
				" de entorpecentes. Possui pelagem longa, abundante e macia, com colaração em tons"+
				" de preto com dourado/amarelo claro.</p>";
		break;
		default:
			return "<p>O <b>Toy Manchester Terrier</b> é uma raça de cachorro, categorizada como"+
				" terrier . A raça foi reduzida em tamanho na América do Norte a partir do Manchester"+
				" Terrier, e foi incluída no Toy Group pelo American Kennel Club e pelo Canadian Kennel"+
				" Club (o Manchester Terrier está incluído no Grupo Terrier). Nem a Fédération Cynologique"+
				" Internationale nem o The Kennel Club reconhecem a variedade Toy do Manchester Terrier.</p>"; 
	}
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
	if (indSel.className.includes("pt")) {
		const requestWikiApi = requestAPI("https://pt.wikipedia.org/api/rest_v1/page/summary/"+indSel.text+"?redirect=true");
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
	} else {
		dogDesc.setHTML(translateText(this.value));
	}
})