function renderDataToHTML(data) {
	if (!data.children) return

	data.children.forEach((child) => {
		if (child.id) {
			const div = document.getElementById(child.id)
			if (div) {
				// Hinzufügen der Child-Elemente als Liste
				switch (child.type) {
					case 'text':
						addTextList(div, child)
						break
					case 'list':
						addList(div, child)
						break
					case 'link':
						addLink(div, child)
						break
					case 'button':
						addButtonList(div, child)
						break
					default:
						addTextList(div, child)
				}
			}
		}
		// Rekursiv weitergehen für tiefere Strukturen
		if (child.children) {
			renderDataToHTML(child)
		}
	})
}

function addLink(div, node) {
	let title = document.createElement('h3')
	title.textContent = node.name
	div.append(title)

	node.children.forEach((child) => {
		const a = document.createElement('a')
		a.textContent = child.name
		a.href = child.link
		a.className = 'mx-1'
		a.setAttribute('target', '_blank')

		if (child.description) {
			a.setAttribute('data-bs-toggle', 'tooltip')
			a.setAttribute('data-bs-placement', 'top')
			a.setAttribute('data-bs-title', child.description)
		}

		div.appendChild(a)
	})
}

function addList(div, node) {
	let title = document.createElement('h3')
	title.textContent = node.name
	div.append(title)

	const ul = document.createElement('ul')
	// ul.className = 'list-group' // Klasse für das <ul>

	node.children.forEach((child) => {
		const li = document.createElement('li')
		// li.className = 'list-group-item' // Klasse für die <li>
		li.textContent = child.name

		ul.appendChild(li)
	})
	div.appendChild(ul)
}

function addTextList(div, node) {
	const p = document.createElement('p')
	const span = document.createElement('span')
	span.textContent = node.name
	span.className = 'badge text-bg-primary'

	let concatenatedNames = ''

	node.children.forEach((child, index) => {
		concatenatedNames += child.name
		if (index < node.children.length - 1) {
			concatenatedNames += ', ' // Komma hinzufügen, außer beim letzten Element
		}
	})
	div.appendChild(span)
	p.textContent = concatenatedNames
	div.appendChild(p)
}

function addButtonList(div, child) {
	// Sections Titel
	let title = document.createElement('h3')
	title.textContent = child.name
	div.append(title)

	let description = document.createElement('p')
	description.textContent = child.description
	div.append(description)

	// Schleife
	;(child.children || []).forEach((subChild) => {
		// console.log(child)
		const button = document.createElement('button')
		button.textContent = subChild.name
		button.className = 'btn btn-sm m-1 ' + child.class
		button.setAttribute('type', 'button')
		button.setAttribute('style', '--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;')

		if (subChild.description) {
			// console.log(child.description)
			button.setAttribute('data-bs-toggle', 'tooltip')
			button.setAttribute('data-bs-placement', 'top')
			button.setAttribute('data-bs-title', subChild.description)
		}

		div.appendChild(button)
	})
}

renderDataToHTML(data)

/**
 * Textbausteine kopieren
 */
// Alle Buttons auswählen
const buttons = document.querySelectorAll('.btn')

// Textarea auswählen
const textarea = document.getElementById('output')

// Event-Listener für alle Buttons hinzufügen
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const buttonText = button.textContent.trim() // Button-Text holen und trimmen
		textarea.value += (textarea.value ? '\n' : '') + buttonText // Text in die Textarea schreiben
	})
})
