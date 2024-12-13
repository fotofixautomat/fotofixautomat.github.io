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
					children: [
						{ name: 'Ein mittelalterliches Schloss' },
						{ name: 'Ein futuristisches Raumschiff' },
						{ name: 'Eine Landschaft mit Wasserfällen' },
						{ name: 'Landschaft' },
						{ name: 'Portrait' },
						{ name: 'Abstrakt' },
						{ name: 'Stilleben' },
						{ name: 'Aktion' },
						{ name: 'Sport' },
						{ name: 'Fantasy' },
						{ name: 'Historisch' },
						{ name: 'Futuristisch' },
						{ name: 'Dystopisch' },
						{ name: 'Utopisch' },
						{ name: 'Industriell' },
						{ name: 'Aquatisch' },
					],
				},
				{
					name: 'Elemente',
					id: 'elemente-output',
					class: 'btn-outline-primary',
					children: [
						{ name: 'Bäume' },
						{ name: 'Gebäude' },
						{ name: 'Menschen' },
						{ name: 'Tiere' },
						{ name: 'Fahrzeuge' },
						{ name: 'Möbel' },
						{ name: 'Geräte' },
						{ name: 'Wolken' },
						{ name: 'Gewässer' },
						{ name: 'Berge' },
						{ name: 'Blumen' },
						{ name: 'Früschte' },
						{ name: 'Elektronik' },
						{ name: 'Denkmäler' },
						{ name: 'Wege' },
						{ name: 'Straßen' },
					],
				},
				{
					name: 'Komposition',
					id: 'komposition-output',
					class: 'btn-outline-primary',
					children: [
						{ name: 'Nahaufnahme' },
						{ name: 'Augenhöhe' },
						{ name: 'tiefer Winkel' },
						{ name: 'hoher Winkel' },
						{ name: 'Fisheye' },
						{ name: 'Über die Schulter' },
						{ name: 'Zentrale Positionierung des Hauptmotivs' },
						{ name: 'Angedeutete Führungslinien' },
						{ name: 'Asymmetrische Bildaufteilung' },
						{ name: 'Außermittig' },
						{ name: 'Close-Up' },
						{ name: 'Diagonale Führungslinien' },
						{ name: 'Einrahmung durch Schatten' },
						{ name: 'Einrahmung durch Silhouette' },
						{ name: 'Eye-Level' },
						{ name: 'Froschperspektive' },
						{ name: 'Führungslinien' },
						{ name: 'Goldener Schnitt' },
						{ name: 'Horizontale Führungslinien' },
						{ name: 'Komposition durch Ebenen' },
						{ name: 'Künstlicher Rahmen' },
						{ name: 'Natürlicher Rahmen' },
						{ name: 'Panorama-Aufnahme' },
						{ name: 'Schnappschuss' },
						{ name: 'Senkrechte Führungslinien' },
						{ name: 'Sich wiederholende Führungslinien' },
						{ name: 'Symmetrische Bildaufteilung' },
						{ name: 'Unausgeglichene Komposition' },
						{ name: 'Vogelperspektive' },
						{ name: 'Zwei-Drittel-Regel' },
					],
				},
				{
					name: 'Szeneneinstellung',
					id: 'szeneneinstellung-output',
					class: 'btn-outline-primary',
					children: [
						{ name: 'Dichte Nebelwälder' },
						{ name: 'Eine pulsierende Großstadt' },
						{ name: 'Ein abgelegener Sandstrand' },
						{ name: 'draußen' },
						{ name: 'drinnen' },
						{ name: 'Urban' },
						{ name: 'ländlich' },
						{ name: 'Küste' },
						{ name: 'bergig' },
						{ name: 'Wüste' },
						{ name: 'Dschungel' },
						{ name: 'Fluss' },
						{ name: 'Insel' },
						{ name: 'unter Wasser' },
						{ name: 'Luftaufnahme' },
						{ name: 'unterirdisch' },
						{ name: 'außerirdisch' },
					],
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
				{
					name: 'Architekturfotografie',
					description: 'Gebäude und urbane Strukturen in ästhetischen und geometrischen Kompositionen.',
				},
				{
					name: 'Astrofotografie',
					description: 'Fotografien des Nachthimmels, oft mit Fokus auf Sterne, Planeten und Galaxien.',
				},
				{
					name: 'Barock',
					description: 'Prunkvolle, detailreiche Darstellungen, oft mit intensiven Farben und Goldakzenten.',
				},
				{
					name: 'Bewegungsunschärfe',
					description: 'Unscharfe Bilder - ICM',
				},
				{
					name: 'Boudoir',
					description: 'Intime, elegante Portraits, oft mit romantischer und sinnlicher Stimmung.',
				},
				{
					name: 'Cartoon',
					description: 'Übertriebene, humorvolle Formen mit satten Farben und vereinfachten Designs.',
				},
				{
					name: 'Cinematisch',
					description: 'Filmähnliche Ästhetik mit Fokus auf Licht, Farben und Erzählung.',
				},
				{
					name: 'Concept Art',
					description:
						'Künstlerische Darstellungen, die Ideen oder Konzepte visualisieren, häufig in der Film- oder Spieleindustrie genutzt.',
				},
				{
					name: 'Cyberpunk',
					description: 'Futuristische, neonlastige Ästhetik, oft mit düsteren und technologischen Elementen.',
				},
				{
					name: 'Dokumentarisch',
					description: 'Authentische, ungefilterte Darstellung des Lebens, oft mit gesellschaftlichem Fokus.',
				},
				{
					name: 'Doppelbelichtung',
					description: 'meherer Bilder übereinander gelegt',
				},
				{
					name: 'Dramatisch',
					description: 'test',
				},
				{
					name: 'Drohnenfotografie',
					description: 'Luftaufnahmen mit einzigartigen Perspektiven, oft aus großer Höhe.',
				},
				{
					name: 'Editorial',
					description: 'Künstlerische Fotografien, oft für Zeitschriften oder Storytelling.',
				},
				{
					name: 'Expressionistisch',
					description: 'Intensiv und emotional, mit starken Farben und dramatischen Kompositionen.',
				},
				{
					name: 'Fantasy',
					description: 'Magische und fantastische Szenen, oft mit kreativen und übernatürlichen Elementen.',
				},
				{
					name: 'Fine Art',
					description: 'Künstlerisch und oft abstrakt, mit Fokus auf Ästhetik und Emotionen.',
				},
				{
					name: 'Fotorealistisch',
					description: 'test',
				},
				{
					name: 'Food-Fotografie',
					description: 'Ästhetische Darstellung von Speisen und Getränken, oft mit Fokus auf Textur und Farbe.',
				},
				{
					name: 'Futuristisch',
					description: 'Szenen mit futuristischen Technologien, Räumen und Designs, die in die Zukunft blicken.',
				},
				{
					name: 'Gothic',
					description: 'Dunkel und mystisch, oft mit dramatischem Licht und architektonischen Details.',
				},
				{
					name: 'High-Key',
					description: 'Helle und lebhafte Bilder mit wenig Schatten, oft für eine luftige Stimmung.',
				},
				{
					name: 'Hyperrealistisch',
					description: 'So detailliert und lebensecht, dass es fast über die Realität hinausgeht.',
				},
				{
					name: 'Impressionistisch',
					description:
						'Weiche, lichtdurchflutete Darstellungen mit Fokus auf Atmosphäre und Emotionen statt auf Details.',
				},
				{
					name: 'Industrial',
					description: 'Fokus auf Fabriken, Maschinen und industrielle Umgebungen, oft mit rauer Ästhetik.',
				},
				{
					name: 'Kawaii',
					description: 'Niedliche, verspielte Darstellungen, oft mit sanften Farben und süßen Details.',
				},
				{
					name: 'Kinderfotografie',
					description: 'Emotionale und lebendige Darstellungen von Kindern, oft in spielerischen Szenen.',
				},
				{
					name: 'Landschaftsfotografie',
					description: 'Darstellung von Natur- und Außenlandschaften, oft mit Schwerpunkt auf Licht und Perspektive.',
				},
				{
					name: 'Langzeitbelichtung',
					description: 'NaN',
				},
				{
					name: 'Low-Key',
					description: 'Dunkle, stimmungsvolle Bilder mit betontem Schatten und Licht.',
				},
				{
					name: 'Makrofotografie',
					description: 'Extrem detaillierte Nahaufnahmen von kleinen Objekten oder Strukturen.',
				},
				{
					name: 'Melancholisch',
					description: 'NaN',
				},
				{
					name: 'Minimalistisch',
					description: 'Einfachheit und Reduktion auf das Wesentliche, oft mit viel Negativraum.',
				},
				{
					name: 'Modefotografie',
					description: 'Darstellung von Kleidung und Accessoires, oft in kreativen und stilisierten Szenen.',
				},
				{
					name: 'Noir',
					description:
						'Kontrastreiche Schwarz-Weiß-Ästhetik, oft mit stimmungsvollen Schatten und geheimnisvollem Flair.',
				},
				{
					name: 'Panoramafotografie',
					description: 'Breite, detaillierte Aufnahmen von Landschaften oder Stadtansichten.',
				},
				{
					name: 'Piktorialismus',
					description:
						'Der Piktorialismus ist ein fotografischer Stil, der durch weiche Fokussierung, malerische Ästhetik und handwerkliche Manipulation versucht, die Fotografie als Kunstform zu etablieren und Emotionen statt dokumentarischer Genauigkeit in den Vordergrund zu stellen.',
				},
				{
					name: 'Portrait',
					description: 'Fokus auf die Darstellung von Menschen, oft mit Betonung von Emotionen und Persönlichkeit.',
				},
				{
					name: 'Postapokalyptisch',
					description:
						'Szenarien nach einer Katastrophe, oft düster, mit verfallenen Gebäuden und überwucherten Landschaften.',
				},
				{
					name: 'Produktfotografie',
					description: 'Darstellung von Produkten für Werbung, mit besonderem Fokus auf Details und Beleuchtung.',
				},
				{
					name: 'Psychedelisch',
					description: 'Lebhafte, verzerrte und farbenfrohe Szenen, die an Träume oder Halluzinationen erinnern.',
				},
				{
					name: 'Realistisch',
					description:
						'Darstellung von Szenen, die der Realität so nah wie möglich kommen, ohne künstlerische Verzerrung.',
				},
				{
					name: 'Reise',
					description: 'Bilder, die verschiedene Kulturen, Orte und Abenteuer dokumentieren.',
				},
				{
					name: 'Retro',
					description:
						'Nostalgischer Stil, der auf vergangene Jahrzehnte anspielt, oft mit Vintage-Farbpaletten und Elementen.',
				},
				{
					name: 'Romantisch',
					description: 'NaN',
				},
				{
					name: 'Schwarz-Weiß',
					description: 'Monochrome Ästhetik, die Kontraste und Strukturen betont.',
				},
				{
					name: 'Skizzenhaft',
					description: 'Wie eine Zeichnung oder Skizze, oft mit klaren Linien und Schraffuren.',
				},
				{
					name: 'Sportfotografie',
					description: 'Dynamische Aufnahmen von Sportereignissen mit Fokus auf Bewegung und Energie.',
				},
				{
					name: 'Steampunk',
					description: 'Retro-futuristischer Stil, inspiriert von viktorianischer Ästhetik und Dampfmaschinen.',
				},
				{
					name: 'Stillleben',
					description: 'Arrangierte Objekte, oft mit künstlerischem Fokus auf Licht und Schatten.',
				},
				{
					name: 'Street Art Style',
					description: 'Inspiriert von Graffiti und urbaner Kunst, mit intensiven Farben und Formen.',
				},
				{
					name: 'Street Photography',
					description: 'Spontane Szenen aus dem urbanen Alltag, oft dynamisch und ungestellt.',
				},
				{
					name: 'Surrealistisch',
					description: 'Traumhafte, oft unwirkliche Szenen mit fantastischen Elementen und unerwarteten Kompositionen.',
				},
				{
					name: 'Unterwasserfotografie',
					description: 'Szenen unter Wasser, oft mit besonderem Fokus auf Lichtbrechung und Farben.',
				},
				{
					name: 'Vintage',
					description: 'Alte, nostalgische Ästhetik mit oft entsättigten Farben und körniger Textur.',
				},
				{
					name: 'Wildlife',
					description: 'Aufnahmen von Tieren in freier Wildbahn, mit Fokus auf Verhalten und Umgebung.',
					tag: ['natur', 'grün'],
				},
			],
		},
		{
			name: 'Beleuchtung',
			children: [
				{
					name: 'Richtung',
					id: 'richtung-output',
					class: 'btn btn-outline-info',
					children: [
						{ name: 'von oben' },
						{ name: 'von unten' },
						{ name: 'seitlich' },
						{ name: 'frontal' },
						{ name: 'Rücklicht' },
						{ name: 'Diffus' },
						{ name: 'gemischt' },
						{ name: 'Kreuzlicht' },
						{ name: 'zerstreut' },
						{ name: 'fokussiert' },
						{ name: 'schmal' },
					],
				},
				{
					name: 'Intensität',
					id: 'intensitaet-output',
					class: 'btn btn-outline-info',
					children: [
						{ name: 'Weiches Morgenlicht' },
						{ name: 'Dramatisches Gegenlicht' },
						{ name: 'Schummriges Kerzenlicht' },
						{ name: 'Hoher Kontrast' },
						{ name: 'Hohes Detailniveaut' },
						{ name: 'HDR' },
						{ name: 'Hohes Maß an Dynamik' },
						{ name: 'Natürliches Licht' },
						{ name: 'Starke Farbkontraste' },
						{ name: 'Gegenlicht' },
						{ name: 'hartes Licht' },
					],
				},
				{
					name: 'Farbe',
					id: 'farbe-output',
					class: 'btn btn-outline-info',
					children: [
						{ name: 'blau' },
						{ name: 'silber' },
						{ name: 'kalt' },
						{ name: 'warm' },
						{ name: 'neutral' },
						{ name: 'bernstein' },
						{ name: 'sepia' },
						{ name: 'Warme Herbstfarben', tag: ['natur'] },
						{ name: 'Schwarz-Weiß' },
						{ name: 'Pastelltöne' },
						{ name: 'Leuchtende Neonfarben' },
						{ name: 'kalte Farben' },
						{ name: 'Abenddämmerung' },
					],
				},
			],
		},
		{
			name: 'Farbpalette',
			children: [
				{
					name: 'Dominante Farben',
					children: [
						{ name: 'Beige' },
						{ name: 'Bronze' },
						{ name: 'Grau' },
						{ name: 'Blau' },
						{ name: 'Rot' },
						{ name: 'Scharz' },
						{ name: 'Weiß' },
					],
				},
				{
					name: 'Akzentfarben',
					children: [{ name: 'Gold' }, { name: 'Silber' }, { name: 'Weiß' }, { name: 'Schwarz' }, { name: 'Blau' }],
				},
				{
					name: 'Stimmung',
					children: [
						{ name: 'hell' },
						{ name: 'dunkelr' },
						{ name: 'kalt' },
						{ name: 'warm' },
						{ name: 'neutral' },
						{ name: 'erdige Töne' },
						{ name: 'metallisch glänzend' },
					],
				},
				{
					name: 'Töne',
					children: [
						{ name: 'Pastell' },
						{ name: 'Lebhaft' },
						{ name: 'Gedämpft' },
						{ name: 'Gesättigt' },
						{ name: 'Entsättigt' },
						{ name: 'Monochromatisch' },
						{ name: 'Komplementär' },
					],
				},
			],
		},
		{
			name: 'Bildbearbeitungsaufforderungen',
			children: [
				{
					name: 'Bereiche löschen',
					children: [{ name: 'Gebäude' }, { name: 'Menschen' }, { name: 'Fahrzeuge' }, { name: 'Schilder' }],
				},
				{
					name: 'Neue Elemente hinzufügen',
					children: [
						{ name: 'Bäume' },
						{ name: 'Tiere' },
						{ name: 'Wolken' },
						{ name: 'Sterne' },
						{ name: 'Mond' },
						{ name: 'Sonne' },
						{ name: 'Regen' },
						{ name: 'Schnee' },
						{ name: 'Nebel' },
						{ name: 'Regenbogen' },
						{ name: 'Blitze' },
						{ name: 'Blumen' },
						{ name: 'Vögel' },
					],
				},
				{
					name: 'Bestehende Elemente skalieren',
					children: [
						{ name: 'Gebäude verkleinern' },
						{ name: 'Menschen vergößern' },
						{ name: 'Fahrzeuge komprimieren' },
						{ name: 'Himmel erweitern' },
					],
				},
				{
					name: 'Farben ersetzen',
					children: [
						{ name: 'Grün in Herbstfarben ändern' },
						{ name: 'Blau durch stürmisches Grau ersetzen' },
						{ name: 'Weiß mit Gold tauschen' },
					],
				},
				{
					name: 'Komposition anpassen',
					children: [
						{ name: 'Elemente neu positionieren' },
						{ name: 'Horizontal oder vertikal ausrichten' },
						{ name: 'Fokuspunkte zentrieren' },
						{ name: 'Asymmetrie ausgleichen' },
						{ name: 'Gleichmäßig verteilen' },
						{ name: 'Führende Linien schaffen' },
					],
				},
				{
					name: 'Texturen ändern',
					children: [
						{ name: 'Wasser glätten' },
						{ name: 'Gelände aufraue' },
						{ name: 'Glanz auf Oberflächen hinzufügen' },
						{ name: 'Mattierungen erzeugen' },
						{ name: 'Glitzer hinzufügen' },
					],
				},
				{
					name: 'Elemente mischen',
					children: [
						{ name: 'Himmel mit Horizont mischen' },
						{ name: 'Schatten mit Gelände verbinden' },
						{ name: 'Reflexionen ins Wasser einfügen' },
						{ name: 'Blattwerk mit Bäumen verschmelzen' },
					],
				},
				{
					name: 'Outpainting',
					children: [
						{ name: 'Himmel nach oben erweitern' },
						{ name: 'Wald nach außen vergrößern' },
						{ name: 'Straße nach vorne verlängern' },
						{ name: 'Meerblick vergrößern' },
						{ name: 'Feld seitlich dehnen' },
					],
				},
				{
					name: 'Zusätzliche Bilder überlagern',
					children: [
						{ name: 'Text' },
						{ name: 'Karte' },
						{ name: 'Effekte' },
						{ name: 'Muster' },
						{ name: 'Vintage-Filter' },
					],
				},
			],
		},
		{
			name: 'Emotion/Stimmung',
			children: [
				{ name: 'Friedlich und beruhigend' },
				{ name: 'Düster und geheimnisvoll' },
				{ name: 'Fröhlich und lebendig' },
				{ name: 'Nostalgisch' },
				{ name: 'dunkel und mystisch' },
				{ name: 'düster' },
				{ name: 'dramatisch' },
				{ name: 'verspielt' },
			],
		},
		{
			name: 'Künstler/Inspiration',
			children: [{ name: 'Walt Disney' }, { name: 'Bansky' }, { name: 'Picasso' }],
		},
		{
			name: 'Format/Dimensionen',
			children: [
				{ name: 'Quadratisch (1:1)' },
				{ name: 'Panorama (16:9)' },
				{ name: 'Hochformat (3:4)' },
				{ name: 'Querformat (4:3)' },
			],
		},
		{
			name: 'Medium/Material',
			children: [
				{ name: 'Aquarell' },
				{ name: 'Kohlezeichnung' },
				{ name: 'Digitale Illustration' },
				{ name: 'Öl auf Leinwand' },
				{ name: 'Fotografie' },
			],
		},
	],
}
