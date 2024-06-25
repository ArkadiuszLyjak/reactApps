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
// //endregion
//
// // region App
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
//                     <ItemList name={this.state.item_2}/>
//                     <ItemList name={this.state.item_3}/>
//
//                     <ItemListClass name={this.state.item_1} example={"example 1"}/>
//                     <ItemListClass name={this.state.item_2} example={"example 2"}/>
//                     <ItemListClass name={this.state.item_3}/>
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
// const styled_button_css = "styled-button";
// const button_text = "Dodaj literę";
//
// class ButtonApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "",
//             number: 0 // Inicjalizacja stanu number
//         };
//     }
//
//     change_text = (letter) => {
//         this.setState(prevState => ({
//             text: prevState.text + letter
//         }));
//     }
//
//     add_number = () => {
//         const random_number = Math.floor(Math.random() * 10);
//         this.setState(prevState => ({
//             number: prevState.number + random_number
//         }));
//     }
//
//     render() {
//         return (
//             <>
//                 <AddButton onClick={() => this.change_text('A')} css_class={styled_button_css}
//                            button_text={button_text}/>
//                 <AddButton onClick={this.add_number} css_class={styled_button_css}
//                            button_text="Dodaj numer"/>
//                 <AddButton onClick={() => this.change_text('C')} css_class={styled_button_css}
//                            button_text="Dodaj literę C"/>
//
//                 <PanelResultFunc number={this.state.number}>To jest komponent liczbowy</PanelResultFunc>
//                 <PanelResultClass text={this.state.text}/>
//             </>
//         );
//     }
// }
//
// class PanelResultClass extends React.Component {
//     render() {
//         return (
//             <h1>{this.props.text}</h1>
//         )
//     }
// }
//
// const PanelResultFunc = (props) => {
//     return (
//         <>
//             <h2>children: {props.children}, {props.number}</h2>
//         </>
//     )
// }
//
// const AddButton = (props) => {
//     return (
//         <button onClick={props.onClick} className={props.css_class}>{props.button_text}</button>
//     );
// }
//
// ReactDOM.render(<ButtonApp/>, document.getElementById('root_4'));
//endregion

//region input
// class AppInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '',
//             placeholder: 'wprowadz email:'
//         };
//     }
//
//     handleInputChange = (e) => {
//         this.setState({
//             value: e.target.value
//         });
//         console.log(e.target.value);
//     }
//
//     handleReset = () => {
//         this.setState({
//             value: '',
//             placeholder: 'wprowadz email:'
//         });
//     }
//
//     render() {
//         return (
//             <React.Fragment>
//                 <h1>Wprowadz email:</h1>
//                 <AddInput
//                     handle_input_change={this.handleInputChange}
//                     label_for_input={'Podaj swój email:'}
//                     email_input_id={'email_id'}
//                     type_input={'text'}
//                     value={this.state.value}
//                     placeholder_for_email={this.state.placeholder}
//                 />
//
//                 <button onClick={this.handleReset}>Reset</button>
//                 <h2 className={'title'}>Twój email to: {this.state.value}</h2>
//             </React.Fragment>
//         );
//     }
// }
//
// const AddInput = (props) => {
//     return (
//         <>
//             <label htmlFor={props.email_input_id}>{props.label_for_input}</label>
//             <input
//                 onChange={props.handle_input_change}
//                 id={props.email_input_id}
//                 type={props.type_input}
//                 placeholder={props.placeholder_for_email}
//                 value={props.value}
//             />
//         </>
//     );
// }
//
// ReactDOM.render(<AppInput/>, document.getElementById('root_5'));
//endregion

//region znikajacy tekst
// const message_text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
//     ' tempor incididunt ut labore et dolore magna aliqua. Massa massa ultricies mi quis hendrerit dolor ' +
//     'magna. Rhoncus est pellentesque elit ullamcorper dignissim cras. Arcu dictum varius duis at ' +
//     'consectetur. Commodo sed egestas egestas fringilla phasellus. Quisque id diam vel quam elementum.' +
//     ' Porttitor leo a diam sollicitudin tempor id. Sagittis eu volutpat odio facilisis mauris sit amet ' +
//     'massa. Ridiculus mus mauris vitae ultricies. Porttitor rhoncus dolor purus non enim praesent elementum.' +
//     ' Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.';
//
// const message_header = 'Lorem Ipsum';
//
// class Message extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             message_is_active: false,
//         }
//         this.handle_message_button = this.handle_message_button.bind(this)
//     }
//
//     handle_message_button() {
//         this.setState(
//             {
//                 message_is_active: !this.state.message_is_active
//             }
//         )
//
//     }
//
//     render() {
//         console.log(this.state.message_is_active)
//
//         return (
//             <>
//                 <div>
//                     <p>{message_header}</p>
//                     <button className={'styled-button'} onClick={this.handle_message_button}>
//                         {this.state.message_is_active ? 'Ukryj' : 'Pokaż'}
//                     </button>
//
//                     <p className='text-justify'>{this.state.message_is_active && message_text}</p>
//
//                 </div>
//
//
//             </>
//         )
//     }
// }
//
// ReactDOM.render(<Message/>, document.getElementById('root'));
//endregion

//region zliczanie kliknięć
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             overflow: 10,
//             click_counter: 0,
//             result: 0
//         }
//     }
//
//     handleMathClick(type, number) {
//         if (type === "subtraction") {
//             this.setState(prevState => ({
//                 click_counter: prevState.click_counter + 1,
//                 result: prevState.result - number
//             }))
//         } else if (type === "adding") {
//             this.setState(prevState => ({
//                 click_counter: prevState.click_counter + 1,
//                 result: prevState.result + number
//             }))
//         } else if (type === "reset") {
//             this.setState(prevState => ({
//                         click_counter: 0,
//                         result: 0
//                     }
//                 )
//             )
//         }
//     }
//
//     render() {
//         return (
//             <>
//                 <CreateButton onClick={() => this.handleMathClick("subtraction", 1)} button_name={"-1"}/>
//                 <CreateButton onClick={() => this.handleMathClick("reset", 0)} button_name={"reset"}/>
//                 <CreateButton onClick={() => this.handleMathClick("adding", 1)} button_name={"+1"}/>
//                 <ResultPanel click_counter={this.state.click_counter} result={this.state.result}/>
//             </>
//         )
//     }
//
// }
//
// const ResultPanel = (props) => {
//     return (
//         <>
//             <h1>Liczba kliknięć: {props.click_counter} {props.click_counter > 10 ? <span>Przeciążenie!!</span>: null}</h1>
//             <h2>Rezultat: {props.result}</h2>
//         </>
//     )
// }
//
// const CreateButton = (props) => {
//     return (
//         <button onClick={props.onClick}>{props.button_name}</button>
//     )
// }
//
// const startValue = 0;
// ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'));
//endregion

//region koszyk
// class App extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             available_products: 5,
//             shopping_card_items: 0
//         }
//     }
//
//     handle_remove_from_cart = () => {
//         this.setState({
//             shopping_card_items: this.state.shopping_card_items - 1
//         })
//
//     }
//
//     handle_add_to_cart = () => {
//         this.setState(prevState => ({
//             shopping_card_items: prevState.shopping_card_items + 1
//         }));
//         console.log("kupione");
//     }
//
//     handle_buy = () => {
//         this.setState(prevState => ({
//             available_products: prevState.available_products - prevState.shopping_card_items,
//             shopping_card_items: 0 // Resetowanie koszyka po zakupie
//         }));
//     }
//
//     render() {
//         const style = this.state.shopping_card_items === 0 ? {opacity: 0.3} : {}
//         const {available_products, shopping_card_items} = this.state
//
//         return (
//             <div>
//
//                 <button
//                     disabled={shopping_card_items === 0 ? true : false}
//                     onClick={this.handle_remove_from_cart}>-
//                 </button>
//
//                 <span
//                     style={style}> {shopping_card_items} </span>
//
//                 <button
//                     disabled={available_products === shopping_card_items ? true : false}
//                     onClick={this.handle_add_to_cart}>+
//                 </button>
//
//                 {shopping_card_items > 0 && <button onClick={this.handle_buy}>Kup</button>}
//
//
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<App/>, document.getElementById('root'))
//endregion

//region tablice
// const data = {
//     users: [{
//         id: 1,
//         age: 23,
//         name: "Marek"
//     }, {
//         id: 2,
//         age: 43,
//         name: "Darek"
//     }, {
//         id: 3,
//         age: 33,
//         name: "Czarek"
//     }]
// }
// const Item = (props) => {
//     return (
//         <>
//             <li>{`owoc: ${props.name} [id: ${props.ids}]`}</li>
//             <p>{`Wszystkie owoce: ${props.all_items.join(', ')}`}</p>
//         </>
//     )
// }
//
// class ListItems extends React.Component {
//     state = {
//         items: ["jabłko", "gruszka", "pomidor"]
//     }
//
//     render() {
//         const users = this.props.data.users;
//        
//         return (
//             <>
//                 <ul>
//                 </ul>
//             </>
//         );
//     }
// }
//
// ReactDOM.render(<ListItems data={data}/>, document.getElementById('root'));

//endregion
