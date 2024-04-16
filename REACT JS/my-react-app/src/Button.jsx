
function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH !!";

    return(<button onClick={(e) => handleClick(e)}>Click me &#x1F642;</button>)
}

export default Button