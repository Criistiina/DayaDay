const places = [
	{ name: "Parque", id: "parque", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Colegio", id: "colegio", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Médico", id: "médico", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Supermercado", id: "supermercado", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Casa", id: "casa", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Restaurante", id: "restaurante", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Comedor", id: "comedor", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Farmacia", id: "farmacia", subtype: "GENERAL", type: "INITIAL" },


];

const actions = [
	{ name: "Quiero", id: "quiero", type: "GENERAL", subtype: "WANT" },
];

const verbs = [
	{ name: "Comer", id: "comer", level: 2, type: "WANT", subtype: "FOOD" },
	{ name: "Coger", id: "coger", level: 2, type: "WANT", subtype: "TAKE"  },
	{ name: "Beber", id: "beber", level: 2, type: "WANT", subtype: "DRINK" },
	{ name: "Ir", id: "ir", level: 2, type: "WANT", subtype: "PLACE" },
	{ name: "Dormir", id: "dormir", type: "WANT", subtype: "FINISH" },
	{ name: "Jugar", id: "jugar", level: 2, type: "WANT", subtype: "PLAY" },
	{ name: "Ver", id: "ver", level: 2, type: "WANT", subtype: "WHATCH" },
	{ name: "Abrir", id: "abrir", level: 2, type: "WANT", subtype: "OPEN" },
	{ name: "Ducharme", id: "duchar", level: 2, type: "WANT", subtype: "FINISH" },
	{ name: "Tirar", id: "tirar", level: 2, type: "WANT", subtype: "TIRAR" },
	{ name: "Ser", id: "ser", level: 2, type: "WANT", subtype: "SER" },
	{ name: "Escuchar", id: "escuchar", level: 2, type: "WANT", subtype: "ESCUCHAR" },
];

const foods = [
	{
		name: "Galletas de chocolate",
		id: "galletas de chocolate",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Patatas fritas",
		id: "patatas fritas",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Chocolate",
		id: "chocolate",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Chocolate blanco",
		id: "chocolate blanco",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Aceitunas",
		id: "aceitunas",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Regalices",
		id: "regaliz",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Golosinas",
		id: "golosinas",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Abrigo",
		id: "abrigo",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "Manta",
		id: "manta",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "Guantes",
		id: "guantes",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "Cargador",
		id: "cargador",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "Paraguas",
		id: "paraguas",
		type: "TAKE",
		subtype: "FINISH",
	},	
	{
		name: "Cascos",
		id: "cascos",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "Zumo de naranja",
		id: "zumo de naranja",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "Agua",
		id: "agua",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "Coca-Cola Normal",
		id: "Coca-Cola",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "Leche",
		id: "leche",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "Café",
		id: "café",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "Baño chicos",
		id: "baño chicos",
		type: "PLACE",
		subtype: "FINISH",
	},
	{
		name: "Baño chicas",
		id: "baño chicas",
		type: "PLACE",
		subtype: "FINISH",
	},
	{
		name: "Fútbol",
		id: "fútbol",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "Pelota",
		id: "pelota",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "Muñeco",
		id: "muñeco",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "Pinturas",
		id: "pinturas",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "Baloncesto",
		id: "canasta",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "Película",
		id: "pelicula",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "Partido de futbol",
		id: "partido futbol",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "Videoclip",
		id: "video",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "Fotos",
		id: "fotos",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "Movil",
		id: "movil",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "Bailes",
		id: "bailes",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "Mochila",
		id: "mochila",
		type: "OPEN",
		subtype: "FINISH",
	},
	{
		name: "Puerta",
		id: "puerta",
		type: "OPEN",
		subtype: "FINISH",
	},
	{
		name: "Nevera",
		id: "nevera",
		type: "OPEN",
		subtype: "FINISH",
	},
	{
		name: "Basura",
		id: "basura",
		type: "TIRAR",
		subtype: "FINISH",
	},
	{
		name: "Puerta",
		id: "puerta",
		type: "TIRAR",
		subtype: "FINISH",
	},
	{
		name: "Disfraz",
		id: "disfraz",
		type: "SER",
		subtype: "FINISH",
	},
	{
		name: "Famoso",
		id: "famoso",
		type: "SER",
		subtype: "FINISH",
	},
	{
		name: "Pintor",
		id: "pintor",
		type: "SER",
		subtype: "FINISH",
	},
	{
		name: "Cantante",
		id: "cantante",
		type: "SER",
		subtype: "FINISH",
	},
	{
		name: "Radio",
		id: "radio",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "Música",
		id: "musica",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	
		
];


export { places, actions, verbs, foods };
