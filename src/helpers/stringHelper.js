const formatStringToReadable = (string) => {
	const formattedString = string.replace(/([a-z])([A-Z])/g, '$1 $2')

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