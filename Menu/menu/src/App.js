import React from "react";

import "./App.css";
import { removeTypeDuplicates } from "@babel/types";

class App extends React.Component {
  render() {
    return <h1></h1>;
  }
}

class Menu extends React.Component {
  state = {
    fooditems: [
      { name: "apple", type: "fruit", cost: "£1" },
      { name: "strawberry", type: "berry", cost: "50p" },
      { name: "beef", type: "meat", cost: "£4.50" }
    ],
    counter: 0,
    userName: "squirrel"
  };
  changeState = () => {
    this.setState({
      fooditems: [
        { name: "pear", type: "fruit", cost: "£1" },
        { name: "blueberry", type: "berry", cost: "50p" },
        { name: "chicken", type: "meat", cost: "£4.50" }
      ],
      counter: this.state.counter + 1,
      userName: this.refs.name.value
    });
  };

  render() {
    return (
      <div className="menu">
        {/* <FoodItem type="fruit" cost="50p" /> */}
        <FoodItem
          name={this.state.fooditems[0].name}
          type={this.state.fooditems[0].type}
          cost={this.state.fooditems[0].cost}
        />
        <FoodItem
          name={this.state.fooditems[1].name}
          type={this.state.fooditems[1].type}
          cost={this.state.fooditems[1].cost}
        />
        <FoodItem
          name={this.state.fooditems[2].name}
          type={this.state.fooditems[2].type}
          cost={this.state.fooditems[2].cost}
        />
        <Counter counter={this.state.counter}></Counter>
        <HelloName userName={this.state.userName}></HelloName>
        <input ref="name" name="user"></input>
        <button onClick={this.changeState}>Click Me</button>
      </div>
    );
  }
}
function FoodItem(props) {
  return (
    <div className="FoodItem">
      <h2>{props.name}</h2>
      <h2>{props.type}</h2>
      <h2>{props.cost}</h2>
    </div>
  );
}

function Counter(props) {
  return (
    <div className="Counter">
      <h3>{props.counter}</h3>
    </div>
  );
}
function HelloName(props) {
  return (
    <div className="HelloName">
      <h3>Hello {props.userName}</h3>
    </div>
  );
}

export default Menu;
