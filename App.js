//region Sekcja 1
// const classBig = "big";
// const justify_text = "text-justify"
// const handleClick = () => {
//     alert("Dzień Dobry, jestem z Kobry")
// }
//
// const header = <h1 onClick={handleClick} className={classBig}>Witaj na mojej stronie</h1>
// const main = (
//     <>
//         <h2>What is Lorem Ipsum?</h2>
//         <div id="elementowiec" style={{textAlign: 'left'}}>
//         </div>
//         <div className={justify_text}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
//             electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
//             Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
//             Aldus PageMaker including versions of Lorem Ipsum...
//         </div>
//     </>
// );
//
// const footer_text = "Copyright 2024"
//
// const footer = (
//     <footer>
//         <div>
//             <p>{footer_text}</p>
//         </div>
//     </footer>
// )
//
// const disclaimer = <section>
//     <div>...</div>
// </section>
//
// const app = [header, main, footer, disclaimer]
// ReactDOM.render(app, document.getElementById('root'))
//endregion

// region App
// const App = () => {
//     return (
//         <div>
//             <h1>Pierwszy komponent funkcyjny</h1>
//         </div>
//     )
// }
//
// ReactDOM.render(<App/>, document.getElementById('root_1'))
//endregion

//region Blog
// class Blog extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isActive: false,
//             isConfirmed: false
//         }
//     }
//
//     render() {
//         return (
//             <section>
//                 <h2>To jest tekst z komponentu klaswoego Blog</h2>
//             </section>
//         )
//
//     }
//
//
// }
//
// ReactDOM.render(<Blog/>, document.getElementById('root_2'))
//endregion

//region ShoppingList
// class ShoppingList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             item_1: 'ogorki1',
//             item_2: 'ogorki2',
//             item_3: 'ogorki3',
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>Lista zakupów</h1>
//                 <ul>
//                     <ItemList name={this.state.item_1} example={"example"}/>
//                     <ItemList name={this.state.item_2} />
//                     <ItemList name={this.state.item_3} />
//                    
//                     <ItemListClass name={this.state.item_1} example={"example 1"}/>
//                     <ItemListClass name={this.state.item_2} example={"example 2"}/>
//                     <ItemListClass name={this.state.item_3} />
//
//                 </ul>
//             </>
//
//         )
//     }
//
//
// }
//
// const ItemList = (props) => {
//     return (
//         <li>{props.name} {props.example && `(${props.example})`}</li>
//     )
// }
//
// class ItemListClass extends React.Component {
//     render() {
//         return (
//             <li>{this.props.name} {this.props.example && `- ${this.props.example}`}</li>
//         ) 
//     }
// }
//
// ReactDOM.render(<ShoppingList/>, document.getElementById('root_3'));
//endregion

//region przycisk
const styled_button_css = "styled-button";
const button_text = "Dodaj literkę";

class ButtonApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            number: 0 // Inicjalizacja stanu number
        };
    }

    change_text = (letter) => {
        this.setState(prevState => ({
            text: prevState.text + letter
        }));
    }

    add_number = () => {
        const random_number = Math.floor(Math.random() * 10);
        this.setState(prevState => ({
            number: prevState.number + random_number
        }));
    }

    render() {
        return (
            <>
                <AddButton onClick={() => this.change_text('A')} css_class={styled_button_css}
                           button_text={button_text}/>
                <AddButton onClick={this.add_number} css_class={styled_button_css}
                           button_text="Dodaj numer"/>
                <AddButton onClick={() => this.change_text('C')} css_class={styled_button_css}
                           button_text="Dodaj literkę C"/>

                <PanelResultFunc number={this.state.number}>To jest komponent liczbowy</PanelResultFunc>
                <PanelResultClass text={this.state.text}/>
            </>
        );
    }
}

class PanelResultClass extends React.Component {
    render() {
        return (
            <h1>{this.props.text}</h1>
        )
    }
}

const PanelResultFunc = (props) => {
    return (
        <>
            <h2>children: {props.children}, {props.number}</h2>
        </>
    )
}

const AddButton = (props) => {
    return (
        <button onClick={props.onClick} className={props.css_class}>{props.button_text}</button>
    );
}

ReactDOM.render(<ButtonApp/>, document.getElementById('root'));


//endregion



