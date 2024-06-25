const ListItems = (props) => {
    return (
        <>
            <ul>
                <p>Menu do wyboru:</p>
                {props.items.map((item => {
                    return (
                        <>
                            <li style={{color: item.active ? "blue":'yellow'}} key={item.id}>{item.name}</li>
                        </>
                    )
                }))}
            </ul>
        </>

    )
}

export default ListItems;