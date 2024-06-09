// import React from 'react';
// import './footer.css';

const classBig = "big";

const justify_text = "text-justify"
const header = <h1 className={classBig}>Witaj na mojej stronie</h1>

const main = (
    <>
        <div id="elementowiec" style={{textAlign: 'left'}}>
            <h2>What is Lorem Ipsum?</h2>
        </div>
        <div className={justify_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </>
);

const footer = (
    <footer>
        <div>
            <p>footer</p>
        </div>
    </footer>
)

const disclaimer = <section>
    <div>disclaimer</div>
</section>

const app = [header, main, footer, disclaimer]
ReactDOM.render(app, document.getElementById('root'))