import { formatStringToReadable } from "./stringHelper"

const propertiesToReadable = (properties) => {
	let readableNames = []

	properties.forEach((key) => {
		readableNames.push(formatStringToReadable(key))
	})

	return readableNames
}

export { propertiesToReadable }