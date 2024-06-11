// import React from 'react';
// import './footer.css';

const classBig = "big";

const justify_text = "text-justify"
const handleClick = () => {
    alert("Dzień Dobry, jestem z Kobry")
}

const header = <h1 onClick={handleClick} className={classBig}>Witaj na mojej stronie</h1>
const main = (
    <>
        <h2>What is Lorem Ipsum?</h2>
        <div id="elementowiec" style={{textAlign: 'left'}}>
        </div>
        <div className={justify_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum...
        </div>
    </>
);

const footer_text = "Copyright 2024"

const footer = (
    <footer>
        <div>
            <p>{footer_text}</p>
        </div>
    </footer>
)

const disclaimer = <section>
    <div>...</div>
</section>

const app = [header, main, footer, disclaimer]
ReactDOM.render(app, document.getElementById('root'))

// ///////////////////////////////////////////////////////////////////////////////

const App = () => {
    return (
        <div>
            <h1>Pierwszy komponent funkcyjny</h1>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root_1'))

// ///////////////////////////////////////////////////////////////////////////////

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isConfirmed: false
        }
    }

    render() {
        return (
            <section>
                <h2>To jest tekst z komponentu klaswoego Blog</h2>
            </section>
        )

    }


}

ReactDOM.render(<Blog/>, document.getElementById('root_2'))

// ///////////////////////////////////////////////////////////////////////////////



