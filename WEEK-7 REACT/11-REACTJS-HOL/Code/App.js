import React from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    // Binding this
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleMultiple = this.handleMultiple.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  handleMultiple() {
    this.handleIncrement();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(message);
  }

  handleSyntheticEvent = (e) => {
    e.preventDefault(); // Example of using SyntheticEvent
    alert("I was clicked!");
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleMultiple}>Increase</button>
        <button onClick={this.handleDecrement}>Decrease</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to Event Handling!")}>
          Say Welcome
        </button>

        <br /><br />
        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
