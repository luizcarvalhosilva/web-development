
function Button() {

    const handleClick = () => console.log("OUCH");

    return(<button onClick={handleClick}>Click me &#x1F642;</button>)
}

export default Button