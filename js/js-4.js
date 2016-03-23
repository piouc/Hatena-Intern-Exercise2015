document.addEventListener('DOMContentLoaded', () => {
	const tableContainer = document.getElementById('table-container')
	const logInput = document.getElementById('log-input')
	const searchColumn = document.getElementById('search-column')
	const searchWord = document.getElementById('search-word')


	function updateLabels(){
		const labels = getLabels(parseLTSVLog(logInput.value))
		searchColumn.innerHTML = ''
		labels.forEach(label => {
			const option = document.createElement('option')
			option.setAttribute('value', label)
			option.appendChild(document.createTextNode(label))
			searchColumn.appendChild(option)
		})
	}
	updateLabels()
	logInput.addEventListener('input', updateLabels)


	function updateResult(e){
		const source = logInput.value
		const list = parseLTSVLog(source)

		const columnName = searchColumn.value
		const word = searchWord.value

		const result = list.filter(row => {
			return row[columnName] && row[columnName].toString().indexOf(word) > -1
		})

		tableContainer.innerHTML = ''
		createLogTable(tableContainer, result)
	}
	updateResult()
	searchWord.addEventListener('input', updateResult)
	searchColumn.addEventListener('change', updateResult)
})