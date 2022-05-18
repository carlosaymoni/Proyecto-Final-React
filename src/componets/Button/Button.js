const Button = (props) => {
    return <button style={{ color: props.color, width: props.width, height: props.height, borderRadius: props.borderRadius}} onClick= {props.handleClick }>{props.label}</button>
}

export default Button

