// 課題 JS-1: 関数 `parseLTSVLog` を記述してください

function parseLTSVLog(str){
	return str
		.split('\n')
		.filter(line => line !== '') //空行削除
		.map(line => {
			return line
				.split('\t')
				.filter(data => data !== '')
				.map((attr) => { //':'で分割し[key, value]の形で返すvalueが数値だった場合、数値形にする
					const [key, value] = attr.split(':')
					return [key, isFinite(value) ? Number(value) : value]
				})
				.reduce((obj, keyValue) => { //[key, value]をオブジェクトに変換する
					const [key, value] = keyValue
					return Object.assign({}, obj, {
						[key]: value
					})
				}, {})
		})
}

// 課題 JS-2: 関数 `createLogTable` を記述してください

/**
 * [createElement description]
 * @param  {String} name     HTML tag name
 * @param  {Object} props    attributes
 * @param  {Array}  children 
 * @return {HTMLElement}     HTMLElement
 */
function createElement(name, props = {}, children = []){
	const element = document.createElement(name)

	Object.keys(props).forEach(key => element.setAttribute(key, props[key]))
	children.forEach(child => element.appendChild(child instanceof HTMLElement ? child : document.createTextNode(child.toString())))

	return element
}

function getLabels(arr){
	return arr.reduce((labels, record) => {
		Object.keys(record).forEach(label => {
			if(labels.indexOf(label) < 0){
				labels.push(label)
			}
		})
		return labels
	}, [])
}

function createLogTable(container, data){

	const labels = getLabels(data)

	const table = createElement('table', {}, [
		createElement('thead', {}, [
			createElement('tr', {}, labels.map(label => createElement('th', {}, [label])))
		]),
		createElement('tbody', {},
			data.map(record => createElement('tr', {}, 
				labels.map(key => createElement('td', {}, [record[key] || ''])))
			)
		)
	])

	container.appendChild(table)
}