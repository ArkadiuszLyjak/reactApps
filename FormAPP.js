class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'London',
            text: "",
            isLoved: false,
            numberVisit: 0
        };
    }


    handleChange = e => {
        console.log(e.target.name)

        if (e.target.type === "checkbox") {

            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }

//region metody
//     handleCityChange = e => {
//
//         this.setState(
//             {
//                 city: e.target.value,
//             }
//         )
//         console.log(this.state.city)
//     }
//
//
//     handleNumberVisitChange(e) {
//
//         this.setState({
//             numberVisit: e.target.value,
//         })
//     }
//
//     handleTextChange = e => {
//
//         this.setState({
//             text: e.target.value,
//         })
//
//         console.log(this.state.text)
//
//     }
//
//
//     handleIsLoveChanged = e => {
//         this.setState({
//             isLoved: e.target.checked,
//         })
//         console.log(this.state.isLoved)
//
//     }
//endregion

    render() {
        return (
            <React.Fragment>
                <h1>Tu na razie jest klepisko, ale będzie San Franciskoooo</h1>
                <label>Podaj miasto:
                    <input name="city" value={this.state.city} onChange={this.handleChange} type="text"/>
                </label>

                <br/>

                <label>Napisz coś o tym mieście:
                    <textarea name="text" value={this.state.text} placeholder={"wpisz text"}
                              onChange={this.handleChange}></textarea>
                </label>

                <br/>

                <label>Czy lubisz to miasto?
                    <input name="isLoved" type={"checkbox"} checked={this.state.isLoved} onChange={this.handleChange}/>
                </label>

                <br/>

                <label>Ile razy byłeś w tym miście?
                    <select name="numberVisit" value={this.state.numberVisit} onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>

                    </select>
                </label>

            </React.Fragment>
        );
    }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Form/>, document.getElementById('root'));