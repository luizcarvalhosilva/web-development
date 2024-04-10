function List(props){
    
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <span style={{fontWeight: "bold"}}>
                                            {item.calories}</span></li>); 

    return(<>
                <h3>{category}</h3>
                <ol>{listItems}</ol>
            </>);
}
export default List