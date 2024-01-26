import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
	const defaults = {
		type: 'text',
		className: 'form-control'
	}

	let tagsProperties = { ...defaults, ...props  }

	let input

	if (props.type === 'select') {
		let options = tagsProperties.options
		delete tagsProperties.options
		delete tagsProperties.type

		input = <select ref={ref} {...tagsProperties}>
			{
				options.map(
					option => <option key={option.value} value={option.value}>{option.description}</option>
				)
			}
		</select>
	} else if (props.type === 'textarea') {
		input = <textarea ref={ref} {...tagsProperties} />
	} else {
		input = <input ref={ref} {...tagsProperties} />
	}

	return <div className="mb-3">
		<label htmlFor={props.name} className='form-label'>{props.title}</label>
		{input}
	</div>
})

export default Input