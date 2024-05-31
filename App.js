const header = <h1 className="title">Witaj na mojej stronie!</h1>

const classBig = "big";

const handleClick = () => alert("Zostało kliknięte...")

const main = (
    <div>
        <h1 onClick={handleClick} className="red">Pierwszy artykół</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
            odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
            Curabitur venenatis neque sit amet felis suscipit, a lacinia odio elementum.
            Phasellus hendrerit neque a urna aliquet, ut sollicitudin sapien dapibus.
            Sed consectetur massa a odio tincidunt, non bibendum libero cursus. Nullam
            vel turpis eu lorem suscipit facilisis. Nam eget sem augue. Suspendisse potenti.
            Etiam ac bibendum mauris. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vivamus convallis turpis vel enim
            blandit, sit amet ultricies nisl ultricies.
        </p>

    </div>
)

//region component_klasowy
class ShoppingList extends React.Component {

    state = {
        items1: 'ogórki',
        items2: 'sok',
        items3: 'coś do picia'
    }

    render() {
        return (
            <>
                <h1>Lista zakupów</h1>
                <ul>
                    <ItemList name={this.state.items1} example={2 + 2}/>
                    <ItemList name={this.state.items2} example={2 + 2}/>
                    <ItemList name={this.state.items3} example={2 + 2}/>
                </ul>
            </>
        )
    }
}

class ItemList extends React.Component {
    render() {
        return (
            <li>{this.props.name} - {this.props.example}</li>
        )
    }
}


ReactDOM.render(<ShoppingList/>, document.getElementById('element_shopping_list'))

//endregion

//region button
class App extends React.Component {

    state = {
        text: ""
    }

    handleClick() {
        const letterToAdd = 'A';
        this.setState(() => {
            return {
                text: this.state.text + letterToAdd
                
            }
        })

    }


    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))

//endregion
