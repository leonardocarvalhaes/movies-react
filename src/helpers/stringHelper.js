const formatStringToReadable = (string) => {
	let formattedString = string.replace(/([a-z])([A-Z])/g, '$1 $2')
	formattedString = string.replace(/_/g, ' ')

	if (formattedString.length < 6 && isAnAcronym(string)) {
		return string.toUpperCase()
	}

	return formattedString.charAt(0).toUpperCase() + formattedString.slice(1)
}

const isAnAcronym = (word) => {
	return [
		'id'
	].indexOf(word) !== -1
}

export { formatStringToReadable }