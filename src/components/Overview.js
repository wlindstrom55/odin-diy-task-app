import React from "react";
import App from "./App";

//this will just render our tasks, while App.js will handle the input field with the logic

class Overview extends React.Component {
  constructor(props) {
    super(props); //not sure if needed
    this.removeItem = this.removeItem.bind(this);
    //this.taskIterator = this.taskIterator.bind(this);
  }

  //since props are given in this component's declaration as a child of App, we don't specify them
  removeItem(event) {
    //we want to remove from state array using event.target.id
    //let item = this.props.array[event.target.id];
    //let newArray = this.props.array.slice(event.target.id, event.target.id);
    let newArray = this.props.array.slice(event.target.id, event.target.id + 1); //do I need the +1?
    this.setProps({ array: newArray }); //not supposed to do this - Overview can't change it's own props
    //React.renderComponent(Overview({array: newArray}));
  }

  render() {
    //onClick={this.removeItem}
    return (
      <div>
        <ul>
          {this.props.array.map((item, i) => {
            return (
              <li>
                {"Task " + (i + 1) + " : " + item + "    "}
                <button id={`${i}`} onClick={this.removeItem}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
