console.log("App.js is running");

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'An app to help you make decisions',
    options: ['One', 'Two']

};
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const removeOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
    var templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={removeOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();