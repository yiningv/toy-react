import { createElement, Component, render } from './toy-react.js';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2,
        }
    }
    render() {
        return (<div>
            <button onClick={() => this.setState({ a: this.state.a+1})}>add</button>
            <span>{ this.state.a.toString() }</span>
            <div>
            { this.state.b.toString() }
            </div>
        </div>);
    }
}

render(<MyComponent></MyComponent>,
    document.body);