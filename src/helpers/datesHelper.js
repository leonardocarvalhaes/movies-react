const toReadable = (fromDatabase) => {
	let options = {year: 'numeric', month: 'long', day: 'numeric' }

	return (new Date(fromDatabase)).toLocaleDateString('en-US', options)
}

const toISO = (fromDatabase) => {
	return (new Date(fromDatabase)).toISOString()
}

const toInputDate = (fromDatabase) => {
	return toISO(fromDatabase).split('T')[0]
}

export { toReadable, toISO, toInputDate }