const getActiveItems = (items) => {
    return items.filter(item => item.active);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, name: "herbata", active: true},
                {id: 2, name: "ziemniaki", active: false},
                {id: 3, name: "kasza", active: false},
                {id: 4, name: "zupa wodna", active: false},
                {id: 5, name: "wrzątek", active: false},
                {id: 6, name: "chleb", active: true}
            ]
        }
    }

    handleChangeStatus = (id) => {
        this.setState(prevState => ({
            items: prevState.items.map(item => 
                item.id === id ? { ...item, active: !item.active } : item
            )
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Header items={this.state.items}/>
                
                <ListItems
                    items={this.state.items}
                    activeItems={getActiveItems(this.state.items)}
                    changeStatus={this.handleChangeStatus}/>
            </React.Fragment>
        )
    }
}

const ListItems = (props) => {
    const items = props.items.map(item => (
        <Item 
            key={item.id} 
            id={item.id}
            name={item.name} 
            active={item.active} 
            changeStatus={props.changeStatus}/>
    ))

    return (
        <>
            <ul>
                <p>Menu do wyboru:</p>
                {items}
            </ul>
        </>
    )
}

const Item = (props) => (
    <li>
        {props.name} [{props.active ? "aktywny" : "nieaktywny"}]
        <button onClick={() => props.changeStatus(props.id)}>Kup</button>
    </li>
)

const ActiveMenu = (props) => {
    const activeItems = props.items.filter(item => item.active);

    return (
        <>
            <p>Wybrane pozycje</p>
            <ol>
                {activeItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ol>
        </>
    )
}

const Header = (props) => {
    return (
        <React.Fragment>
            <div>{<ActiveMenu items={props.items}/>}</div>
            <header>Liczba pozycji menu: {props.items.length}</header>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
