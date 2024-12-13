const data = {
	name: 'Bildgenerierung',
	children: [
		{
			name: 'Motiv',
			children: [
				{
					name: 'Thema',
					id: 'thema-output',
					class: 'btn-outline-primary',
					children: [{ name: 'Ein mittelalterliches Schloss' }, { name: 'Ein futuristisches Raumschiff' }],
				},
				{
					name: 'Elemente',
					id: 'elemente-output',
					class: 'btn-outline-primary',
					children: [{ name: 'Bäume' }, { name: 'Gebäude' }],
				},
			],
		},
		{
			name: 'Stil',
			id: 'stil-output',
			class: 'btn-outline-secondary',
			children: [
				{
					name: 'Abstrakt',
					description: 'Fokus auf Farben, Formen und Strukturen statt auf konkrete Gegenstände oder Szenen.',
				},
				{
					name: 'Anime-Stil',
					description: 'Lebhafte, gezeichnete Darstellungen im Stil japanischer Animation.',
				},
			],
		},
	],
}
