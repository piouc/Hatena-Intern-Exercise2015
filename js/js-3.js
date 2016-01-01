// 課題 JS-3 の実装をここに記述してください。
document.addEventListener('DOMContentLoaded', () => {
	const tableContainer = document.getElementById('table-container')
	const logInput = document.getElementById('log-input')
	const submitButton = document.getElementById('submit-button')

	submitButton.addEventListener('click', () => {
		const source = logInput.value
		tableContainer.innerHTML = ''
		createLogTable(tableContainer, parseLTSVLog(source))
	})
})