const places = [
	{ name: "COLEGIO", id: "colegio", subtype: "GENERAL", type: "INITIAL" },
	{ name: "CASA", id: "casa", subtype: "GENERAL", type: "INITIAL" },
	{ name: "COMEDOR", id: "comedor", subtype: "GENERAL", type: "INITIAL" },
];

const actions = [
	{ name: "QUIERO", id: "quiero", type: "GENERAL", subtype: "WANT" },
	{ name: "NO QUIERO", id: "no quiero", type: "GENERAL", subtype: "NO_WANT" },
];

const verbs = [
	{ name: "COMER", id: "comer", level: 2, type: "WANT", subtype: "FOOD" },
	{ name: "COGER", id: "coger", level: 2, type: "WANT", subtype: "TAKE"  },
	{ name: "BEBER", id: "beber", level: 2, type: "WANT", subtype: "DRINK" },
	{ name: "IR", id: "ir", level: 2, type: "WANT", subtype: "PLACE" },
	{ name: "DORMIR", id: "dormir", type: "WANT", subtype: "FINISH" },
	{ name: "JUGAR", id: "jugar", level: 2, type: "WANT", subtype: "PLAY" },
	{ name: "VER", id: "ver", level: 2, type: "WANT", subtype: "WHATCH" },
	{ name: "ABRIR", id: "abrir", level: 2, type: "WANT", subtype: "OPEN" },
	{ name: "DUCHARME", id: "duchar", level: 2, type: "WANT", subtype: "FINISH" },
	{ name: "TIRAR", id: "tirar", level: 2, type: "WANT", subtype: "TIRAR" },
	{ name: "ESCUCHAR", id: "escuchar", level: 2, type: "WANT", subtype: "ESCUCHAR" },
];

const foods = [
	{
		name: "GALLETAS DE CHOCOLATE",
		id: "galletas de chocolate",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "PATATAS FRITAS",
		id: "patatas fritas",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "CHOCOLATE",
		id: "chocolate",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "CHOCOLATE BLANCO",
		id: "chocolate blanco",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "ACEITUNAS",
		id: "aceitunas",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "REGALICES",
		id: "regaliz",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "GOLOSINAS",
		id: "golosinas",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "ABRIGO",
		id: "abrigo",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "MANTA",
		id: "manta",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "GUANTES",
		id: "guantes",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "CARGADOR",
		id: "cargador",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "PARAGUAS",
		id: "paraguas",
		type: "TAKE",
		subtype: "FINISH",
	},	
	{
		name: "CASCOS",
		id: "cascos",
		type: "TAKE",
		subtype: "FINISH",
	},
	{
		name: "ZUMO DE NARANJA",
		id: "zumo de naranja",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "AGUA",
		id: "agua",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "COCA-COLA NORMAL",
		id: "Coca-Cola",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "LECHE",
		id: "leche",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "CAFÉ",
		id: "café",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "BAÑO CHICOS",
		id: "baño chicos",
		type: "PLACE",
		subtype: "FINISH",
	},
	{
		name: "BAÑO CHICAS",
		id: "baño chicas",
		type: "PLACE",
		subtype: "FINISH",
	},
	{
		name: "FÚTBOL",
		id: "fútbol",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "PELOTA",
		id: "pelota",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "MUÑECO",
		id: "muñeco",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "PINTURAS",
		id: "pinturas",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "BALONCESTO",
		id: "canasta",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "PELÍCULA",
		id: "pelicula",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "PARTIDO DE FÚTBOL",
		id: "partido futbol",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "VIDEOCLIP",
		id: "video",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "FOTOS",
		id: "fotos",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "MÓVIL",
		id: "movil",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "BAILES",
		id: "bailes",
		type: "WHATCH",
		subtype: "FINISH",
	},
	{
		name: "MOCHILA",
		id: "mochila",
		type: "OPEN",
		subtype: "FINISH",
	},
	{
		name: "PUERTA",
		id: "puerta",
		type: "OPEN",
		subtype: "FINISH",
	},
	{
		name: "NEVERA",
		id: "nevera",
		type: "OPEN",
		subtype: "FINISH",
	},
	{
		name: "BASURA",
		id: "basura",
		type: "TIRAR",
		subtype: "FINISH",
	},
	{
		name: "PUERTA",
		id: "puerta",
		type: "TIRAR",
		subtype: "FINISH",
	},
	{
		name: "RADIO",
		id: "radio",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "MÚSICA",
		id: "musica",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	
		
];


export { places, actions, verbs, foods };
