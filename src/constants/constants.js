const places = [
	{ name: "Parque", id: "park", subtype: "GENERAL", type: "INITIAL" },
	{ name: "Colegio", id: "school", subtype: "GENERAL", type: "INITIAL" },
];

const actions = [
	{ name: "Quiero", id: "want", type: "GENERAL", subtype: "WANT" },
	{ name: "Dame", id: "give", type: "GENERAL", subtype: "GIVE" },
];

const verbs = [
	{ name: "Comer", id: "eat", level: 2, type: "WANT", subtype: "FOOD" },
	{ name: "Coger", id: "take", level: 2, type: "WANT", subtype: "TAKE"  },
	{ name: "Beber", id: "drink", level: 2, type: "WANT", subtype: "DRINK" },
	{ name: "Ir", id: "go", level: 2, type: "WANT", subtype: "PLACE" },
];

const foods = [
	{
		name: "Galletas de chocolate",
		id: "Galletas chocolate",
		type: "FOOD",
		subtype: "FINISH",
	},
	{
		name: "Patatas",
		id: "patatas",
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
		name: "Zumo de naranja",
		id: "zumo",
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
		name: "Baño",
		id: "baño",
		type: "PLACE",
		subtype: "FINISH",
	},
];

export { places, actions, verbs, foods };
