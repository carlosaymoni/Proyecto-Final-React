const Button = (props) => {
    return <button style = {
        {
            color: props.color,
            border: props.border,
            width: props.width,
            height: props.height,
            fontSize: props.fontSize,
            borderRadius: props.borderRadius
        }
    }
    onClick = { props.handleClick } > { props.label } </button>
}

export default Button
