
function List(){
    const fruits = [
        {id: 1, name:"apple", calories: 95}, 
        {id: 2, name:"orange", calories: 45}, 
        {id: 3, name:"banana", calories: 105}, 
        {id: 4, name:"mango", calories: 159}, 
        {id: 5, name:"pineapple", calories: 37}
    ];

    // fruits.sort((a,b) => a.name.localeCompare(b.name));  //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a,b) => b.calories - a.calories);     //REVERSE NUMERIC
    // fruits.sort((a,b) => a.calories - b.calories);    //NUMERIC

    /* 
    *    O uso de 'key' permite definir chaves únicas para cada elemento e isso é importante, pois permite que o *  *    react identifique, de forma eficiente e otimizada, os itens adicionados, removidos ou modificados de um    *    array.
    */

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                              {lowCalFruit.name}: &nbsp; 
                                                              <span style={{fontWeight: "bold"}}>
                                                              {lowCalFruit.calories}</span></li>); 

    return(<ul>{listItems}</ul>)
}
export default List