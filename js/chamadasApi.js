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
			dogDesc.setHTML(htmlSaidaLimpo);
		},
	};

	const errorResponse = {
		'dogApi':  (dogDesc) => dogDesc,
		'wikipedia': (dogDesc) => dogDesc.setHTML('<p>Descrição do cachorro <b>'+label+'</b> indisponível no momento</p>'),
	};
	
	const xhttp = new XMLHttpRequest();
	const url = endereco;
	xhttp.onreadystatechange = function() {
		if (this.readyState === 1 && endereco.includes('dog.ceo')) {
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

function translateText(racaCao) {
	const racas = {
		"eskimo" : "<p>O <b>Cão Esquimó Americano</b> é uma raça de cão de companhia, originária"+
				" da Alemanha. O cão esquimó americano é um membro da família Spitz. Os progenitores"+
				" da raça foram o Spitz Alemão, mas devido ao sentimento anti-alemão durante a Primeira"+
				" Guerra Mundial, ele foi renomeado como \"Cão Esquimó Americano\".</p>",
				
		"husky" : "<p><b>Husky</b> é um termo geral para um cão usado nas regiões polares, principalmente"+
				" e especificamente para trabalhar como cães de trenó. Refere-se a um tipo tradicional"+
				" do norte, notável por sua tolerância ao frio e robustez geral. Os huskies de corrida"+
				" modernos que mantêm características da raça ártica representam um cruzamento de constante"+
				" evolução dos cães mais rápidos.</p>",
				
		"hound/plott" : "<p>O <b>Plott Hound</b> é um grande cão farejador, originalmente criado para caçar"+
				" ursos. Em 1989, a Assembléia Geral da Carolina do Norte designou o Plott Hound como"+
				" o cão oficial do estado. O Plott Hound foi registrado pela primeira vez no United"+
				" Kennel Club em 1946.</p>",
				
		"puggle" : "<p>Um <b>puggle</b> é um cão resultante do cruzamento de um pug e um beagle."+
				" O puggle foi criado pela primeira vez por criadores de cães nos Estados Unidos"+
				" com o objetivo de produzir um cão de companhia saudável com menor probabilidade"+
				" de herdar alguns problemas de saúde e comportamentais comuns nas raças dos pais.</p>",
		"tervuren" : "<p>O <b>Tervueren</b> é uma das quatro variedades da raça de cães pastor-belga,"+
				" originária da Bélgica. Tornou-se popular quando começou a ser usado como farejador"+
				" de entorpecentes. Possui pelagem longa, abundante e macia, com colaração em tons"+
				" de preto com dourado/amarelo claro.</p>",
				
		"terrier/toy" : "<p>O <b>Toy Manchester Terrier</b> é uma raça de cachorro, categorizada como"+
				" terrier. A raça foi reduzida em tamanho na América do Norte a partir do Manchester"+
				" Terrier, e foi incluída no Toy Group pelo American Kennel Club e pelo Canadian Kennel"+
				" Club (o Manchester Terrier está incluído no Grupo Terrier). Nem a Fédération Cynologique"+
				" Internationale nem o The Kennel Club reconhecem a variedade Toy do Manchester Terrier.</p>",
	};
	return racas[racaCao]; 
}

document.getElementById('select_cao').addEventListener('change', function() {
	const dogImagem = document.getElementById('img_cao');
	const dogImagemLoad = document.getElementById('c-loader');
	let dogDesc = document.getElementById('desc_cao');
	dogDesc.setHTML("");
	const indSel = this.options[this.selectedIndex];
	requestAPI("https://dog.ceo/api/breed/"+this.value+"/images/random", this.value, null, dogImagem, dogImagemLoad, 'dogApi');
	if (indSel.className.includes("pt")) {
		requestAPI("https://pt.wikipedia.org/api/rest_v1/page/summary/"+indSel.text+"?redirect=true", indSel.text, dogDesc, null, null, 'wikipedia');
	} else {
		dogDesc.setHTML(translateText(this.value));
	}
})