import React from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

//App will handle the input field with the logic of sending inputs to task array
//Note: "1" for the 'editable' attribute (the default as shown in the constructor below)
//signifies the task as NOT EDITABLE and "2" signifies EDITABLE
//Boolean values (which make more sense to use) don't render in React.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      array: [],
      task: {
        text: "",
        id: uniqid(),
        editable: "1",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  //IMPORTANT: must make our component a 'controlled component' to deal with forms.
  //that requires an onChange event and a task={this.state.task} property (on the input).
  //basically the state of task is stored as state on the App component,
  //instead of in the form (which doesn't work on React b/c)
  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
        editable: "1",
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.task], //non-mutating concat
    });
    this.setState({
      //resets the input after submit
      task: {
        text: "",
        id: uniqid(),
        editable: "1",
      },
    });
  }

  removeItem(event) {
    //we want to remove from state array using event.target.id
    const targ = parseInt(event.target.id) + 1;
    //if you try to concatenate event.target.id + 1, you are doing so as a string
    //so you have to parseInt it.
    const leftArray = this.state.array.slice(0, event.target.id); //should take from 0 to target
    const rightArray = this.state.array.slice(targ); //should take everything to the right of index
    const newArray = [...leftArray, ...rightArray]; //non-mutating spread array concat
    this.setState({ array: newArray });
  }

  editItem(event) {
    //should flip the state of a task to whatever the opposite is...
    //should I have some way of saving the new value to state? or will that be a problem
    //might do it, but is probably outside the scope of instructions.

    //our edit button's className is the INDEX we need of our array
    //so below: is there an object at that index of our array? if so, targ = that,
    //otherwise return null
    let targ = this.state.array[parseInt(event.target.className)]
      ? this.state.array[parseInt(event.target.className)].editable
      : null;
    if (targ === "1") {
      targ = "2";
    } else {
      targ = "1";
    }

    //prevState is the name given to the argument passed to setState callback function.
    //It holds the value of state before the setState was triggered by React; since setState
    //does batching, its important to know what the previous state was when you want to update
    //the new state based on previous state.
    //using functional set state like so, w/ callback, basically works like i +=1. More
    //info here: https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
    this.setState((prevState) => ({
      array: prevState.array.map((obj) =>
        obj.id === event.target.id
          ? Object.assign(obj, { editable: targ })
          : obj
      ),
    }));
  }

  render() {
    const { array, task } = this.state; //destructuring state for readability
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskInput">Create a Task:</label>
          <input
            type="text"
            id="taskInput"
            value={task.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <Overview
          array={array}
          itemRemove={this.removeItem}
          itemEdit={this.editItem}
        />
      </div>
    );
  }
}

export default App;
