import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
	return <div className="mb-3">
		<label htmlFor={props.name} className='form-label'>{props.title}</label>
		<input
			ref={ref}
			type={props.type ? props.type : 'text'}
			name={props.name}
			id={props.name}
			value={props.value}
			autoComplete={props.name + '-new'}
			className={props.className ? props.className : 'form-control'}
			{...(props.readonly && { readOnly: true })}
			{
			...(typeof props.handler === 'function' &&
			{
				onChange: (event) => props.handler(event.target.value)
			})
			}
		/>
	</div>
})

export default Input