const places = [
	{ name: "COLEGIO", id: "colegio", subtype: "GENERAL", type: "INITIAL" },
	{ name: "CASA", id: "casa", subtype: "GENERAL", type: "INITIAL" },
	{ name: "COMEDOR", id: "comedor", subtype: "GENERAL", type: "INITIAL" },
];

const actions = [
	{ name: "QUIERO", id: "quiero", type: "GENERAL", subtype: "WANT" },
	{ name: "NO QUIERO", id: "no quiero", type: "GENERAL", subtype: "NO_WANT" },
]
const verbs = [
	{ name: "COMER", id: "comer", level: 2, type: ["WANT", "NO_WANT"], subtype: "FOOD" },
	{ name: "DESAYUNAR", id: "desayunar", level: 2,  type: ["WANT", "NO_WANT"], subtype: "BREAKFAST" },
	{ name: "COGER", id: "coger", level: 2,  type: ["WANT", "NO_WANT"],subtype: "TAKE"  },
	{ name: "BEBER", id: "beber", level: 2,  type: ["WANT", "NO_WANT"], subtype: "DRINK" },
	{ name: "IR", id: "ir", level: 2,  type: ["WANT", "NO_WANT"], subtype: "PLACE" },
	{ name: "DORMIR", id: "dormir",  type: ["WANT", "NO_WANT"], subtype: "FINISH" },
	{ name: "JUGAR", id: "jugar", level: 2,  type: ["WANT", "NO_WANT"],subtype: "PLAY" },
	{ name: "VER", id: "ver", level: 2,  type: ["WANT", "NO_WANT"],subtype: "WHATCH" },
	{ name: "ABRIR", id: "abrir", level: 2,  type: ["WANT", "NO_WANT"], subtype: "OPEN" },
	{ name: "DUCHAR", id: "DUCHARSE", level: 2,  type: ["WANT", "NO_WANT"], subtype: "FINISH" },
	{ name: "BAÑAR", id: "BAÑAR", level: 2,  type: ["WANT", "NO_WANT"], subtype: "FINISH" },
	{ name: "PASEAR", id: "PASEAR", level: 2,  type: ["WANT", "NO_WANT"],subtype: "FINISH" },
	{ name: "RELAJACIÓN", id: "RELAJACION", level: 2,  type: ["WANT", "NO_WANT"], subtype: "FINISH" },
	{ name: "TIRAR", id: "tirar", level: 2,  type: ["WANT", "NO_WANT"],subtype: "TIRAR" },
	{ name: "ESCUCHAR MÚSICA", id: "ESCUCHAR MÚSICA", level: 2,  type: ["WANT", "NO_WANT"], subtype: "ESCUCHAR" },
	
];



const foods = [
	{
		name: "BARRITA CHOCOLATE",
		id: "barrita chocolate",
		type: "BREAKFAST",
		subtype: "FINISH",
	},
	{
		name: "BIZCOCHO",
		id: "bizcocho",
		type: "BREAKFAST",
		subtype: "FINISH",
	},
	{
		name: "CEREALES CHOCOLATE",
		id: "cereales 3",
		type: "BREAKFAST",
		subtype: "FINISH",
	},
	{
		name: "DANONINO",
		id: "danonino 2",
		type: "BREAKFAST",
		subtype: "FINISH",
	},
	{
		name: "DONUTS",
		id: "donuts azucar",
		type: "BREAKFAST",
		subtype: "FINISH",
	},
	{
		name: "DONUTS CHOCOLATE",
		id: "donuts chocolate",
		type: "BREAKFAST",
		subtype: "FINISH",
	},
	{
		name: "YOGURT",
		id: "yogurt",
		type: "BREAKFAST",
		subtype: "FINISH",
	},
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
		name: "ACTIMEL",
		id: "actimel",
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
		name: "AGUA 2",
		id: "agua 2",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "COCA-COLA ",
		id: "Coca-Cola botella",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "COCA-COLA LATA",
		id: "Cocacola lata",
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
		name: "AQUARIUS LIMÓN",
		id: "aquarius limón",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "AQUARIUS NARANJA",
		id: "aquarius naranja",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "BATIDO FRESA",
		id: "batido fresa",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "BATIDO CHOCOLATE BRIK ",
		id: "batido chocolate brik",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "BATIDO CHOCOLATE",
		id: "batido chocolate",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "BATIDO FRESA BRIK",
		id: "batido fresa brik",
		type: "DRINK",
		subtype: "FINISH",
	},

	{
		name: "BATIDO VAINILLA BRIK",
		id: "batido vainilla brik" ,
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "BATIDO VAINILLA",
		id: "batido vainilla",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "CHOCOLATE",
		id: "chocolate",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "COLACAO",
		id: "colacao",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "FANTA DE LIMÓN ",
		id: "fanta limón botella",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "FANTA DE LIMÓN LATA",
		id: "fanta limón lata",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "FANTA DE NARANJA",
		id: "fanta naranja botella",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "FANTA DE NARANJA LATA ",
		id: "fanta naranja lata",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "NESTEA LATA",
		id: "nestea lata" ,
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "SSEVEN UP",
		id: "seven up",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "TRINA LIMÓN",
		id: "trina limón botella",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "TRINA LIMÓN LATA",
		id: "trina limón lata",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "TRINA NARANJA",
		id: "trina naranja botella",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "TRINA NARANJA LATA",
		id: "fanta limón lata",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "VASO LECHE",
		id: "vaso leche",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "AZUMO NATURAL ",
		id: "zumo natural",
		type: "DRINK",
		subtype: "FINISH",
	},
	{
		name: "ZUMO",
		id: "zumo" ,
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
		name: "ANIMALES",
		id: "ANIMALES",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "ARENA",
		id: "ARENA",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "COCHES",
		id: "COCHES",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "COLUMPIO",
		id: "COLUMPIO",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "PELOTA FÚTBOL",
		id: "PELOTA FUTBOL",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "PELUCHE",
		id: "PELUCHE",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "SPINNER",
		id: "SPINNER 1",
		type: "PLAY",
		subtype: "FINISH",
	},
	{
		name: "PLASTILINA",
		id: "PLASTILINA",
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
		name: "ABRAHAM MATEO",
		id: "ABRAHAM MATEO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "AITANA",
		id: "AITANA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "ÁLVARO DE LUNA",
		id: "alvaro",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "ÁLVARO SOLER",
		id: "ALVARO SOLER",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "ANA GUERRA",
		id: "ANA GUERRA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "ANA MENA",
		id: "ANA MENA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "BAD GYAL",
		id: "Bad Gyal",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "BERET",
		id: "BERET",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "BRUNO MARS",
		id: "BRUNO MARS",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "EL CANTO DEL LOCO",
		id: "CANTO DEL LOCO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "CHANEL",
		id: "CHANEL",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "ESTOPA",
		id: "ESTOPA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "FITO Y FITIPALDIS",
		id: "FITO Y FITIPALDIS",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "INDIA MARTINEZ",
		id: "INDIA MARTINEZ",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "JARABE DE PALO",
		id: "JARABE DE PALO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "KATY PERRY",
		id: "KATY PERRY",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "LEIVA",
		id: "LEIVA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "LOCA ÍNDIGO",
		id: "LOCA INDIGO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
		{
		name: "MALUMA",
		id: "MALUMA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "MELENDI",
		id: "MELENDI",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "MANUEL TURIZO",
		id: "MANUEL TURIZO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "NATY PELUSO",
		id: "NATY PELUSO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "QUEVEDO",
		id: "QUEVEDO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "ROSALIA",
		id: "ROSALIA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "SEBASTIAN YATRA",
		id: "SEBASTIAN YATRA",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
	{
		name: "VICIO",
		id: "VICIO",
		type: "ESCUCHAR",
		subtype: "FINISH",
	},
];



export { places, actions, verbs, foods };
