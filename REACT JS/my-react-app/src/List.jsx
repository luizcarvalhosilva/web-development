
function List(){
    const fruits = ["apple", "orange", "banana", "mango", "pineapple"];

    fruits.sort();

    /*a linha de código abaixo é necessária para que possamos mostrar os elementos do array como lista*/
    const listItems = fruits.map(fruit => <li>{fruit}</li>); 

    return(<ul>{listItems}</ul>)
}
export default List