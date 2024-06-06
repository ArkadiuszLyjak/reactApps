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
//        
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
//         item_1: "ogórki1",
//         item_2: "ogórki2",
//         item_3: "ogórki3",
//         item_4: "ogórki4",
//         item_5: "ogórki5",
//         item_6: "ogórki6",
//         item_7: "ogórki7",
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>Lista zakupów</h1>
//                 <ul>
//                     <li>{this.state.item_1}, szt. 4</li>
//                     <li>{this.state.item_2}</li>
//                     <li>{this.state.item_3}</li>
//                     <ItemList position={this.state.item_3} quontity={21}/>
//                     <ItemList position={this.state.item_4}/>
//                     <ItemList position={this.state.item_5}/>
//                     <ItemList position={this.state.item_5}/>
//                     <ItemListClassComponent position={this.state.item_6} quontity={3423}/>
//                     <ItemListClassComponent position={this.state.item_7} quontity={3}/>
//                 </ul>
//             </>
//         )
//     }
// }
//
// const ItemList = (props) => {
//     return (
//         <li>{props.position}, szt. {props.quontity}</li>
//     )
// }
//
// class ItemListClassComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li>{this.props.position}, szt. {this.props.quontity}</li>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<ShoppingList/>, document.getElementById('root'))
//endregion

//region AddSign
// class AppAddingSign extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             litera: ''
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     // handleClick() {
//     //     console.log("kliknięte")
//     //
//     //     this.setState((prevState) => ({
//     //             litera: this.prevState.litera + '_'
//     //         })
//     //     )
//     // }
//
//     handleClick = () => {
//         console.log("kliknięte")
//         let number = Math.floor(Math.random() * 100)
//         this.setState(
//             {
//                 litera: this.state.litera + " " + number
//             }
//         )
//     }
//
//     render() {
//         return (
//             <>
//                 <button onClick={this.handleClick.bind(this)}>{this.props.buttonTitle}</button>
//                 <label> Kliknij mnie</label>
//                 {/*<PanelResult letter={this.state.litera}/>*/}
//                 <PanelResult letter={this.state.litera}>Dziecko</PanelResult>
//             </>
//         )
//     }
// }
//
// const PanelResult = (props) => {
//     return (
//         <h1>{props.letter}:{props.children}</h1>
//     )
// }
//
// ReactDOM.render(<AppAddingSign buttonTitle="dodaj cyfrę..."/>, document.getElementById('root'))
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
//             history: [...prevState.history, {firstNumber: newFirstNumber, randomNumber: random_number}]
//         }));
//     }
//
//     render() {
//         const button_name = "dodaj nową liczbę";
//         return (
//             <>
//                 <h2>Zaczynamy</h2>
//                 <button onClick={this.handleButtonClick}>{button_name}</button>
//                 <PrintOnSite history={this.state.history}/>
//             </>
//         );
//     }
// }
//
// const PrintOnSite = (props) => {
//     return (
//         <div>
//             {props.history.map((entry, index) => (
//                 <h2 key={index}>firstNumber: {entry.firstNumber}, randomNumber: {entry.randomNumber}</h2>
//             ))}
//         </div>
//     );
// }
//
// ReactDOM.render(<AppInputText/>, document.getElementById('root'));
//endregion

//region wpisuj
// class InputStringFromUser extends React.Component {
//     state = {
//         value: ""
//     }
//     handleInputChange = (e) => {
//         console.log(e.target.value)
//         this.setState(
//             {
//                 value: e.target.value
//             }
//         )
//     }
//
//     handleResetClick = () => {
//         this.setState({
//             value: ""
//         })
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>Wpisywanie z wejścia</h1>
//                 <input value={this.state.value} placeholder="wpisz coś... " type="text"
//                        onChange={this.handleInputChange.bind(this)}/>
//                 <button onClick={this.handleResetClick}>Reset</button>
//                 <h1 className="title">{this.state.value.toUpperCase()}</h1>
//             </>
//         )
//     }
// }
//
// ReactDOM.render(<InputStringFromUser/>, document.getElementById('root'))
//endregion

//region SeekAndHide
// class Message extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isActive: false
//         };
//         this.handleMessageButton = this.handleMessageButton.bind(this);
//     }
//
//     handleMessageButton() {
//         this.setState({
//             isActive: !this.state.isActive
//         });
//     }
//
//     render() {
//         console.log(this.state.isActive);
//         const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor " + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" + " ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" + " in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat" + " non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//
//         const style = {
//             textTransform: "uppercase", textAlign: "justify", fontSize: "10px"
//         };
//
//         return (<>
//                 <button onClick={this.handleMessageButton}>{this.state.isActive ? "Ukryj" : "Pokaż"}</button>
//                 {this.state.isActive && <p style={style}>{text}</p>}
//             </>);
//     }
// }
//
// ReactDOM.render(<Message/>, document.getElementById('root'));

//endregion

//region CheckboxAgeConfirmation_0
// class TicketShop extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             age: false
//         };
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>{this.state.age ? "Confirmed" : "Not Confirmed"}</h1>
//                 <label>
//                     Confirm Age
//                     <input 
//                         type="checkbox" 
//                         checked={this.state.age} 
//                         onChange={() => this.setState({ age: !this.state.age })} 
//                     />
//                 </label>
//             </>
//         );
//     }
// }
//
// ReactDOM.render(<TicketShop />, document.getElementById('root'));
//endregion

//region Click Counter
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             result: this.props.result
//         }
//     }
//
//     handleMathClick = (type, number = 1) => {
//         this.setState(prevState => {
//             let newResult;
//             let newCount = prevState.count + 1;
//
//             if (type === "subtraction") {
//                 newResult = prevState.result - number;
//             } else if (type === "adding") {
//                 newResult = prevState.result + number;
//             } else if (type === "reset") {
//                 newResult = 0;
//                 newCount = 0;
//             }
//
//             return {
//                 count: newCount,
//                 result: newResult
//             };
//         });
//     }
//
//     render() {
//         return (
//             <>
//                 <MathButton name="-1" number={1} type="subtraction" click={this.handleMathClick}/>
//                 <MathButton name="reset" type="reset" click={this.handleMathClick}/>
//                 <MathButton name="+1" number={1} type="adding" click={this.handleMathClick}/>
//
//                 <ResultPanel count={this.state.count} result={this.state.result}/>
//
//             </>
//         );
//     }
// }
//
// const ResultPanel = (props) => {
//     return (
//         <>
//             <p>Liczba kliknięć: {props.count} {props.count > 10 ? <span>Przeciążenie!</span> : null}</p>
//             <p>Wynik: {props.result}</p>
//         </>
//     )
// }
//
//
// const MathButton = (props) => {
//     const number = props.number || 0;
//     return (
//         <button className="styled-button" onClick={() => props.click(props.type, number)}>
//             {props.name}
//         </button>
//     );
// }
//
// const startValue = 0;
// ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'));
//endregion

//region BuyTicket
class TicketShop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfirmed: false,
            isFormSubmitted: false
        }
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false
        })
    }

    // displayMessage = () => {
    //     if (this.state.isFormSubmitted) {
    //         if (this.state.isConfirmed) {
    //             return <ValidationMessage text={"Confirmed"}/>
    //         } else {
    //             return <ValidationMessage text={"Not Confirmed"}/>
    //         }
    //     } else {
    //         return null
    //     }
    // }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState({isFormSubmitted: true});
    }

    render() {

        const {isConfirmed, isFormSubmitted} = this.state

        return (
            <>
                <h1>Kup bilet na horror</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" id="age" checked={isConfirmed}
                           onChange={this.handleCheckboxChange}/>
                    <label htmlFor="age">Mam co najmniej 16 lat</label><br/>
                    <button type="submit">Kup bilet</button>
                </form>
                {displayMessage(isConfirmed, isFormSubmitted)}
            </>
        );
    }
}

const displayMessage = (isConfirmed, isFormSubmitted) => {
    if (isFormSubmitted) {
        if (isConfirmed) {
            return <ValidationMessage text={"Confirmed"}/>
        } else {
            return <ValidationMessage text={"Not Confirmed"}/>
        }
    } else {
        return null
    }
}


const ValidationMessage = (props) => {
    const {text} = props

    return (
        <p>{text}</p>
    )

}

// const PositiveMessage = () => <p>Możesz obejrzeć ten film.</p>
// const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu!</p>

ReactDOM.render(<TicketShop/>, document.getElementById('root'));
//endregion