//region AAA

// const header = <h1 className="title">Witaj na mojej stronie!</h1>

// const classBig = "big";
//
// const handleClick = () => alert("Zostało kliknięte...")
//
// const main = (
//     <div>
//         <h1 onClick={handleClick} className="red">Pierwszy artykół</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
//             odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
//             Curabitur venenatis neque sit amet felis suscipit, a lacinia odio elementum.
//             Phasellus hendrerit neque a urna aliquet, ut sollicitudin sapien dapibus.
//             Sed consectetur massa a odio tincidunt, non bibendum libero cursus. Nullam
//             vel turpis eu lorem suscipit facilisis. Nam eget sem augue. Suspendisse potenti.
//             Etiam ac bibendum mauris. Pellentesque habitant morbi tristique senectus et
//             netus et malesuada fames ac turpis egestas. Vivamus convallis turpis vel enim
//             blandit, sit amet ultricies nisl ultricies.
//         </p>
//
//     </div>
// )
//
// ReactDOM.render(<main/>, document.getElementById("root"))
//endregion

//region CheckBoxAgeConfirmation
// class CheckBoxAgeConfirmation extends React.Component {
//
//     state = {
//         isConfirmed: false,
//     }
//
//     handleCheckboxChange = () => {
//         this.setState({
//             isConfirmed: !this.state.isConfirmed
//         })
//     }
//
//     render() {
//         const positive_message = () => <p>MOżesz obejrzeć ten film</p>
//         const negative_message = () => <p>Nie mOżesz obejrzeć ten film</p>
//
//         console.log(this.state.isConfirmed)
//         return (
//             <>
//                 <h1>Kupi bilet na horror</h1>
//                 <input type='checkbox' id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
//                 <label htmlFor='age'> Mam powyżej 18 lat</label>
//             </>
//         )
//     }
// }
//
// ReactDOM.render(<CheckBoxAgeConfirmation/>, document.getElementById("root"))
//endregion

//region aaa - replay
// class BuyTicket extends React.Component {
//
//     state = {
//         isConfirmed: false
//     }
//
//     handleChangeCheckbox = () => {
//         console.log(this.state.isConfirmed)
//
//         this.setState({
//             isConfirmed: !this.state.isConfirmed
//         })
//
//         // console.log(this.state.isConfirmed)        
//     }
//
//     render() {
//         return (<>
//             <h3>Kup bilet na horror > 18 lat</h3>
//             <input type="checkbox" id='age' onChange={this.handleChangeCheckbox}
//                    checked={this.state.isConfirmed}/>
//             <label htmlFor='age'>Potwierdz swój wiek</label>
//         </>)
//     }
// }
//
// ReactDOM.render(<BuyTicket/>, document.getElementById('root'))
//endregion

//region addSign
// class ButtonAddSign extends React.Component {
//     state = {
//         sign: 'A',
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>Tu jest nowy tekst</h1>
//                 <p>SSS</p>
//             </>
//         )
//     }
// }

// ReactDOM.render(<ButtonAddSign/>, document.getElementById('root'))

//endregion

//region komponent funkcyjny, bezstanowy
// const App = () => {
//     return (
//         <div>
//             <h1>App przykłąd</h1>
//         </div>
//     )
// }

// ReactDOM.render(<App/>, document.getElementById('root'))
//endregion

//region komponent klasowy, stanowy
// class App2 extends React.Component {
//     state = {
//         number: 0,
//     }
//
//     render() {
//         return (
//             <section>
//                 <h2>App2 przykład - {this.state.number}</h2>
//             </section>
//         )
//     }
// }
//
// const Apps = () => {
//     return (
//         <>
//             <App/>
//             <App2/>
//         </>
//     )
// }
//
// ReactDOM.render(<Apps/>, document.getElementById('element_shopping_list'))
//endregion

//region Shopping List
// class ShoppingList extends React.Component {
//     state = {
//         pozycja_1: "ogórki",
//         pozycja_2: "chleb",
//         pozycja_3: "kawa",
//     }
//
//     render() {
//         return (
//             <React.Fragment>
//                 <h1>Tu coś będzie</h1>
//                 <u>
//                     <ListWrapperek przedmiot={this.state.pozycja_1} ilosc={23}/>
//                     <ListWrapperek przedmiot={this.state.pozycja_2}/>
//                     <ListWrapperek przedmiot={this.state.pozycja_3} ilosc={3424}/>
//                 </u>
//             </React.Fragment>)
//     }
// }
//
// class ListWrapperek extends React.Component {
//     render() {
//         return (
//             <li>{this.props.przedmiot} szt. {this.props.ilosc}</li>
//         )
//     }
//
//
// }
//
// ReactDOM.render(<ShoppingList/>, document.getElementById('root'))
//endregion

//region AddSign
class AppAddingSign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }


    handleClick = () => {
        const numberRandom = Math.floor(Math.random() * 21)
        const letter = 'z'
        this.setState(
            {
                text: this.state.text + numberRandom + ", "
            }
        )
        console.log(this.state.text)
    }


    render() {
        const btnName1 = "wykreuj liczbę"

        return (
            <div>
                <h2>Dodawanie znaków działa...</h2>
                <button onClick={this.handleClick.bind(this)}>{btnName1} / {this.props.btnTitle}</button>
                <PanelResult text={this.state.text}/>
            </div>
        );
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

ReactDOM.render(<AppAddingSign btnTitle={"dodaj cyfrę"}/>, document.getElementById('root'))
//endregion

//region input text
// class AppInputText extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstNumber: 1,
//             randomNumber: 2,
//             history: []
//         };
//     }
//
//     handleButtonClick = () => {
//         const random_number = Math.floor(Math.random() * 99);
//         const newFirstNumber = this.state.firstNumber + random_number;
//        
//         this.setState(prevState => ({
//             firstNumber: newFirstNumber,
//             randomNumber: random_number,
//             history: [...prevState.history, { firstNumber: newFirstNumber, randomNumber: random_number }]
//         }));
//     }
//
//     render() {
//         const button_name = "button_1";
//         return (
//             <>
//                 <h2>Zaczynamy</h2>
//                 <button onClick={this.handleButtonClick}>{button_name}</button>
//                 <PrintOnSite history={this.state.history} />
//             </>
//         );
//     }
// }

// const PrintOnSite = (props) => {
//     return (
//         <div>
//             {props.history.map((entry, index) => (
//                 <h2 key={index}>firstNumber: {entry.firstNumber}, randomNumber: {entry.randomNumber}</h2>
//             ))}
//         </div>
//     );
// }

// ReactDOM.render(<AppInputText />, document.getElementById('root'));

//endregion

//region wpisuj
// class InputStringFromUser extends React.Component {
//     state = {
//         value: ""
//     }
//
//     handleChange(e) {
//         console.log("Zawartość w evencie: " + e.target.value)
//         console.log("Zawartość przed setState: " + this.state.value)
//         this.setState(
//             {
//                 value: e.target.value
//             }
//         )
//
//         console.log("Zawartość po setState: " + this.state.value)
//     }
//
//     handleClick = () => {
//         this.setState(
//             {
//                 value: ""
//             }
//         )
//     }
//
//     render() {
//         return (
//             <>
//                 <input value={this.state.value} placeholder="wpisz..." onChange={this.handleChange.bind(this)}
//                        type="text"/>
//                 <button onClick={this.handleClick}>reset</button>
//                 <h1 className="title">{this.state.value.toUpperCase()}</h1>
//             </>
//         )
//     }
// }

// ReactDOM.render(<InputStringFromUser/>, document.getElementById('root'))

//endregion

//region SeekAndHide

// class Message extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             messageIsActive: false
//         }
//
//         this.handleMessageButton = this.handleMessageButton.bind(this)
//
//     }
//
//     handleMessageButton = () => {
//         // debugger
//         this.setState(
//             {
//                 messageIsActive: !this.state.messageIsActive
//             }
//         )
//     }
//
//     render() {
//         console.log(this.state.messageIsActive)
//
//         const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor " +
//             "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation " +
//             "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" +
//             " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat " +
//             "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//
//         return (
//             <>
//                 <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'ukryj' : 'pokaz'}</button>
//                 <p className="justified-uppercase">{this.state.messageIsActive && text}</p>
//             </>
//         )
//     }
// }

// ReactDOM.render(<Message/>, document.getElementById('root'))
//endregion

//region CheckboxAgeConfirmation

// class CheckboxAgeConfirmation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.setState({
//             age: false
//         })
//
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>{this.state.age}</h1>
//
//             </>
//         )
//     }
//
//
// }

// ReactDom.render(<CheckboxAgeConfirmation/>, document.getElementById('root'))

//endregion