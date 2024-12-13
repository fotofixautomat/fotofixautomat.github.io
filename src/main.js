function renderDataToHTML(data) {
	if (!data.children) return

	data.children.forEach((child) => {
		if (child.id) {
			const div = document.getElementById(child.id)
			if (div) {
				// Sections Titel
				let title = document.createElement('h3')
				title.textContent = child.name
				div.append(title)

				// Hinzufügen der Child-Elemente als Liste
				;(child.children || []).forEach((subChild) => {
					// console.log(child)
					const button = document.createElement('button')
					button.textContent = subChild.name
					button.className = 'btn btn-sm m-1 ' + child.class
					button.setAttribute('type', 'button')
					button.setAttribute(
						'style',
						'--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'
					)

					if (subChild.description) {
						// console.log(child.description)
						button.setAttribute('data-bs-toggle', 'tooltip')
						button.setAttribute('data-bs-placement', 'top')
						button.setAttribute('data-bs-title', subChild.description)
					}

					div.appendChild(button)
				})
			}
		}

		// Rekursiv weitergehen für tiefere Strukturen
		if (child.children) {
			renderDataToHTML(child)
		}
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
