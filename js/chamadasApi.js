const selectCaes = document.getElementById("select_cao");
const caesList = {
			"pt affenpinscher": "Affenpinscher", 
			"pt airedale": "Airedale terrier",
			"pt akita": "Akita Inu",
			"pt pitbull": "American pit bull terrier", 
			"pt terrier/american": "Amstaff", 
			"pt basenji": "Basenji",
			"pt hound/basset": "Basset Hound", 
			"pt beagle": "Beagle", 
			"pt terrier/bedlington": "Bedlington terrier",  
			"pt frise/bichon": "Bichon Frisé", 
			"pt havanese": "Bichon havanês", 
			"pt maltese": "Bichon maltês", 
			"pt hound/blood": "Bloodhound", 
			"pt bluetick": "Bluetick Coonhound", 
			"pt bouvier": "Boiadeiro da Flandres", 
			"pt appenzeller": "Boiadeiro de Appenzell", 
			"pt mountain/bernese": "Boiadeiro de Berna", 
			"pt entlebucher": "Boiadeiro de Entlebuch", 
			"pt cattledog/australian": "Boiadeiro-australiano", 
			"pt collie/border": "Border collie", 
			"pt terrier/border": "Border terrier", 
			"pt borzoi": "Borzoi", 
			"pt bulldog/boston": "Boston terrier", 
			"pt boxer": "Boxer", 
			"pt pointer/german": "Braco alemão de pelo curto", 
			"pt pointer/germanlonghair": "Braco alemão de pelo longo", 
			"pt vizsla": "Braco húngaro de pelo curto", 
			"pt buhund/norwegian": "Buhund norueguês", 
			"pt bulldog/french": "Buldogue francês", 
			"pt bulldog/english": "Buldogue inglês", 
			"pt mastiff/bull": "Bulmastife", 
			"pt terrier/cairn": "Cairn terrier", 
			"pt waterdog/spanish": "Cão d'água espanhol", 
			"pt spaniel/irish": "Cão d'água irlandês", 
			"en eskimo": "Cão Esquimó Americano",  
			"pt pyrenees": "Cão dos pirinéus", 
			"pt finnish/lapphund": "Cão-finlandês-da-lapônia", 
			"pt spaniel/blenheim": "Cavalier King Charles Spaniel", 
			"pt retriever/chesapeake": "Chesapeake bay retriever", 
			"pt chihuahua": "Chiuaua", 
			"pt chow": "Chow-chow", 
			"pt clumber": "Clumber spaniel", 
			"pt cockapoo": "Cockapoo", 
			"pt spaniel/cocker": "Cocker spaniel inglês", 
			"pt coonhound": "Coonhound", 
			"pt cotondetulear": "Coton de Tulear", 
			"pt retriever/curly": "Curly coated retriever", 
			"pt dachshund": "Dachshund", 
			"pt dalmatian": "Dálmata (cão)", 
			"pt terrier/dandie": "Dandie dinmont terrier", 
			"pt deerhound/scottish": "Deerhound", 
			"pt dhole": "Dhole", 
			"pt dingo": "Dingo", 
			"pt doberman": "Dobermann", 
			"pt dane/great": "Dogue alemão", 
			"pt elkhound/norwegian": "Elkhound", 
			"pt retriever/flatcoated": "Flat-coated retriever", 
			"pt terrier/fox": "Fox terrier", 
			"pt hound/english": "Foxhound-inglês", 
			"pt hound/afghan": "Galgo afegão", 
			"pt greyhound/italian": "Galguinho italiano", 
			"pt retriever/golden": "Golden retriever", 
			"pt mountain/swiss": "Grande boiadeiro suíço", 
			"pt brabancon": "Griffon de Bruxelas", 
			"en husky": "Husky", 
			"pt terrier/russell": "Jack russell terrier", 
			"pt keeshond": "Keeshond", 
			"pt kelpie": "Kelpie australiano", 
			"pt terrier/kerryblue": "Kerry blue terrier",  
			"pt komondor": "Komondor", 
			"pt kuvasz": "Kuvasz", 
			"pt labradoodle": "Labradoodle", 
			"pt labrador": "Labrador retriever", 
			"pt terrier/lakeland": "Lakeland terrier", 
			"pt wolfhound/irish": "Lébrel irlandês", 
			"pt leonberg": "Leonberger", 
			"pt lhasa": "Lhasa apso", 
			"pt pomeranian": "Lulu da Pomerânia", 
			"pt african": "Mabeco", 
			"pt malamute": "Malamute", 
			"pt mastiff/english": "Mastim Inglês", 
			"pt mastiff/tibetan": "Mastim tibetano", 
			"pt terrier/norfolk": "Norfolk terrier", 
			"pt terrier/norwich": "Norwich terrier", 
			"pt sheepdog/english": "Old english sheepdog", 
			"pt otterhound": "Otterhound", 
			"pt germanshepherd": "Pastor alemão", 
			"pt groenendael": "Pastor Belga Groenendael", 
			"pt australian/shepherd": "Pastor-australiano", 
			"pt malinois": "Pastor-belga-malinois", 
			"en tervuren": "Pastor-belga Tervueren", 
			"pt briard": "Pastor-de-brie", 
			"pt sheepdog/shetland": "Pastor-de-shetland", 
			"pt ovcharka/caucasian": "Pastor-do-cáucaso", 
			"pt terrier/patterdale": "Patterdale Terrier", 
			"pt mexicanhairless": "Pelado-mexicano", 
			"pt pekinese": "Pequinês", 
			"pt pinscher/miniature": "Pinscher miniatura", 
			"en hound/plott": "Plott Hound", 
			"pt hound/ibizan": "Podengo ibicenco", 
			"pt poodle": "Poodle", 
			"pt pug": "Pug", 
			"en puggle": "Puggle", 
			"pt redbone": "Redbone Coonhound", 
			"pt ridgeback/rhodesian": "Rhodesian ridgeback", 
			"pt rottweiler": "Rottweiler", 
			"pt segugio/italian": "Sabujo italiano de pelo curto", 
			"pt saluki": "Saluki", 
			"pt samoyed": "Samoieda", 
			"pt stbernard": "São-bernardo", 
			"pt schipperke": "Schipperke", 
			"pt schnauzer/giant": "Schnauzer gigante", 
			"pt schnauzer/miniature": "Schnauzer miniatura", 
			"pt terrier/sealyham": "Sealyham terrier", 
			"pt setter/gordon": "Setter gordon", 
			"pt setter/english": "Setter inglês", 
			"pt setter/irish": "Setter irlandês", 
			"pt sharpei": "Shar Pei", 
			"pt shiba": "Shiba inu", 
			"pt shihtzu": "Shih-tzu", 
			"pt terrier/silky": "Silky terrier", 
			"pt terrier/wheaten": "Soft coated wheaten terrier", 
			"pt papillon": "Spaniel anão continental", 
			"pt spaniel/brittany": "Spaniel bretão", 
			"pt spaniel/japanese": "Spaniel japonês", 
			"pt spitz/japanese": "Spitz japonês", 
			"pt spaniel/welsh": "Springer spaniel de Gales", 
			"pt springer/english": "Springer spaniel inglês", 
			"pt bullterrier/staffordshire": "Staffordshire bull terrier", 
			"pt spaniel/sussex": "Sussex spaniel", 
			"pt newfoundland": "Terra-nova (cão)", 
			"pt terrier/australian": "Terrier australiano", 
			"pt terrier/scottish": "Terrier escocês", 
			"pt terrier/irish": "Terrier irlandês", 
			"pt terrier/tibetan": "Terrier tibetano", 
			"en terrier/toy": "Toy Manchester Terrier", 
			"pt hound/walker": "Treeing Walker Coonhound", 
			"pt mix": "Vira-lata", 
			"pt weimaraner": "Weimaraner", 
			"pt corgi/cardigan": "Welsh corgi cardigan", 
			"pt pembroke": "Welsh corgi pembroke", 
			"pt terrier/welsh": "Welsh terrier", 
			"pt terrier/westhighland": "West highland white terrier", 
			"pt whippet": "Whippet", 
			"pt terrier/yorkshire": "Yorkshire terrier", 
};

let caesArray = Object.entries(caesList);
caesArray.forEach((caes) => {
		const caesValue = caes[0].split(" ");
		option = new Option(caes[1], caesValue[1]);
		option.className = caesValue[0];
		selectCaes.options[selectCaes.options.length] = option;
});

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

selectCaes.addEventListener('change', function() {
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