
function Button() {

    let count = 0;
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name}, you clicked me ${count} time.`)
        } else {
            console.log(`${name}, please stop clicking me.`)
        }
    };

    

    return(<button onClick={() => handleClick("Joh")}>Click me &#x1F642;</button>)
}

export default Button