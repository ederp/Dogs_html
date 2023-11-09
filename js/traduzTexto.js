export function traduzTexto(raca) {
	const descricao = {
		"eskimo": "<p>O <b>Cão Esquimó Americano</b> é uma raça de cão de companhia, originária" +
			" da Alemanha. O cão esquimó americano é um membro da família Spitz. Os progenitores" +
			" da raça foram o Spitz Alemão, mas devido ao sentimento anti-alemão durante a Primeira" +
			" Guerra Mundial, ele foi renomeado como \"Cão Esquimó Americano\".</p>",

		"husky": "<p><b>Husky</b> é um termo geral para um cão usado nas regiões polares, principalmente" +
			" e especificamente para trabalhar como cães de trenó. Refere-se a um tipo tradicional" +
			" do norte, notável por sua tolerância ao frio e robustez geral. Os huskies de corrida" +
			" modernos que mantêm características da raça ártica representam um cruzamento de constante" +
			" evolução dos cães mais rápidos.</p>",

		"hound/plott": "<p>O <b>Plott Hound</b> é um grande cão farejador, originalmente criado para caçar" +
			" ursos. Em 1989, a Assembléia Geral da Carolina do Norte designou o Plott Hound como" +
			" o cão oficial do estado. O Plott Hound foi registrado pela primeira vez no United" +
			" Kennel Club em 1946.</p>",

		"puggle": "<p>Um <b>puggle</b> é um cão resultante do cruzamento de um pug e um beagle." +
			" O puggle foi criado pela primeira vez por criadores de cães nos Estados Unidos" +
			" com o objetivo de produzir um cão de companhia saudável com menor probabilidade" +
			" de herdar alguns problemas de saúde e comportamentais comuns nas raças dos pais.</p>",

		"tervuren": "<p>O <b>Tervueren</b> é uma das quatro variedades da raça de cães pastor-belga," +
			" originária da Bélgica. Tornou-se popular quando começou a ser usado como farejador" +
			" de entorpecentes. Possui pelagem longa, abundante e macia, com colaração em tons" +
			" de preto com dourado/amarelo claro.</p>",

		"terrier/toy": "<p>O <b>Toy Manchester Terrier</b> é uma raça de cachorro, categorizada como" +
			" terrier. A raça foi reduzida em tamanho na América do Norte a partir do Manchester" +
			" Terrier, e foi incluída no Toy Group pelo American Kennel Club e pelo Canadian Kennel" +
			" Club (o Manchester Terrier está incluído no Grupo Terrier). Nem a Fédération Cynologique" +
			" Internationale nem o The Kennel Club reconhecem a variedade Toy do Manchester Terrier.</p>",
	};
	return descricao[raca];
}