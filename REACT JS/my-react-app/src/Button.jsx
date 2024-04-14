
function Button() {

    const handleClick = () => console.log("OUCH");

    const handleClick2 = (name) => console.log(`${name}, stop clickling me.`) //mandando parâmetro

    return(<button onClick={() => handleClick2("Joh")}>Click me &#x1F642;</button>)
}

export default Button