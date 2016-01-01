// 課題 JS-1: 関数 `parseLTSVLog` を記述してください

function parseLTSVLog(str){
	return str
		.split('\n')
		.filter(line => line !== '') //空行削除
		.map(line => {
			return line
				.split('\t')
				.map((attr) => {
					const [key, value] = attr.split(':')
					return [key, isFinite(value) ? Number(value) : value]
				})
				.reduce((obj, keyValue) => {
					const [key, value] = keyValue
					return Object.assign({}, obj, {
						[key]: value
					})
				}, {})
		})
}

// 課題 JS-2: 関数 `createLogTable` を記述してください
