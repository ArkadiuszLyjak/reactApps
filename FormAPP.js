const Dollars = () => (
    <div>Wartość w dolarach: </div>
)

const Euros = () => (
    <p>Wartość w euro: </p>
)

class ExchangeCounter extends React.Component {
    state = {
        amount: ""
    }

    handleChange = e => {
        this.setState({
            amount: e.target.value
        });

        console.log(this.state.amount)
    }

    render() {
        return (
            <div className='app'>
                <label>
                    <input onChange={this.handleChange} type='number' value={this.state.amount}
                           placeholder="wpisz liczbę"/>
                </label>
                <Dollars/>
                <Euros/>


            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'));