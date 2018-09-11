console.log("App.js is running");

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'An app to help you make decisions',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

const onClickRemove = (e) => {
    app.options = [];
    renderApp();
};
// create "Remove All" button above list
// on click -> wipe array -> rerender

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onClickRemove}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();