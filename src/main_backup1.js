// Funktion, um einen Knoten mit einem bestimmten Namen zu finden
function findNodeByName(data, targetName) {
	if (data.name === targetName) {
		return data
	}

	if (data.children) {
		for (const child of data.children) {
			const result = findNodeByName(child, targetName)
			if (result) {
				return result
			}
		}
	}

	return null
}

// Funktion, um eine Liste aus einem beliebigen Knoten zu erstellen und Klassen hinzuzufügen
function createListFromNode(node, ulClass = 'list-group', liClass = 'list-group-item') {
	if (!node || !node.children) return null // Abbruchbedingung, falls der Knoten keine Kinder hat

	const ul = document.createElement('ul')
	ul.className = ulClass // Klasse für das <ul>

	node.children.forEach((child) => {
		const li = document.createElement('li')
		li.className = liClass // Klasse für die <li>
		li.textContent = child.name

		// Falls der Knoten weitere Kinder hat, rekursiv eine Unterliste erstellen
		if (child.children) {
			const childUl = createListFromNode(child, ulClass, liClass)
			li.appendChild(childUl)
		}

		ul.appendChild(li)
	})

	return ul
}

function createButtonFromNode(node, buttonClass = 'btn-outline-primary') {
	if (!node || !node.children) return null

	console.log(document.getElementById(node.id))
	const div = document.getElementById(node.id)

	node.children.forEach((child) => {
		const button = document.createElement('button')
		button.textContent = child.name
		button.className = 'btn btn-sm m-1 ' + buttonClass
		button.setAttribute('type', 'button')
		// button.setAttribute('style', '--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;')

		if (child.description) {
			// console.log(child.description)
			button.setAttribute('data-bs-toggle', 'tooltip')
			button.setAttribute('data-bs-placement', 'top')
			button.setAttribute('data-bs-title', child.description)
		}

		div.appendChild(button)
	})
	return div
}

function createParagraphFromNode(node) {
	if (!node || !node.children) return null
	const p = document.createElement('p')
	let concatenatedNames = ''
	node.children.forEach((child, index) => {
		concatenatedNames += child.name
		if (index < node.children.length - 1) {
			concatenatedNames += ', ' // Komma hinzufügen, außer beim letzten Element
		}
	})
	p.textContent = concatenatedNames
	return p
}

function createBadgesFromNode(node) {
	if (!node || !node.children) return null
	const div = document.createElement('div')
	node.children.forEach((child) => {
		const span = document.createElement('span')
		span.className = 'badge mx-1'
		span.textContent = child.name
		div.appendChild(span)
	})
	return div
}

function processNode(targetNodeName, targetElementId, createContentCallback) {
	const targetNode = findNodeByName(data, targetNodeName)
	if (!targetNode) {
		console.error(`Der Knoten mit dem Namen "${targetNodeName}" wurde nicht gefunden.`)
		return
	}

	const targetElement = document.getElementById(targetElementId)
	if (!targetElement) {
		console.error(`Das HTML-Element mit der ID "${targetElementId}" wurde nicht gefunden.`)
		return
	}

	const content = createContentCallback(targetNode)
	if (content) {
		targetElement.appendChild(content)
	}
}

function displayListForNode(targetNodeName, targetElementId, ulClass = 'list-group', liClass = 'list-group-item') {
	processNode(targetNodeName, targetElementId, (node) => createListFromNode(node, ulClass, liClass))
}

function displayParagraphForNode(targetNodeName, targetElementId) {
	processNode(targetNodeName, targetElementId, (node) => createParagraphFromNode(node))
}

function displayBadgesForNode(targetNodeName, targetElementId) {
	processNode(targetNodeName, targetElementId, (node) => createBadgesFromNode(node))
}

function displayButtonForNode(targetNodeName, targetElementId, buttonClass = 'btn-outline-primary') {
	processNode(targetNodeName, targetElementId, (node) => createButtonFromNode(node, buttonClass))
}

// Beispielaufrufe für verschiedene Knoten
displayButtonForNode('Thema', 'thema-output', 'btn-outline-primary')
displayButtonForNode('Elemente', 'elemente-output')
displayButtonForNode('Komposition', 'komposition-output')
displayButtonForNode('Szeneneinstellung', 'szeneneinstellung-output')
displayButtonForNode('Stil', 'stil-output', 'btn-outline-secondary')

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
