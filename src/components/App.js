import React from "react";
import Overview from "./Overview";
import uniqid from "uniqid";

//app will handle the input field with the logic of sending inputs to task array
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // testRightArray: [],
      // testLeftArray: [],
      // testArrayLength: "",
      // testId: "",
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
  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id, //does this change anything? should just set it to what it already was?
        editable: "1",
      },
    }); //basically the state of task is stored
    //as state on the App component, instead of in the form (which doesn't work on React b/c)
  }

  handleSubmit(event) {
    event.preventDefault(); //prevent default behavior (refresh)
    this.setState({
      array: [...this.state.array, this.state.task], //non-mutating concat
    });
    this.setState({
      //this resets the input after submit!
      task: {
        text: "",
        id: uniqid(),
        editable: "1",
      },
    });
  }

  removeItem(event) {
    //we want to remove from state array using event.target.id
    const targ = parseInt(event.target.id) + 1; //if you try to concatenate event.target.id + 1, you are doing so as a string
    //so you have to parseInt it.
    const leftArray = this.state.array.slice(0, event.target.id); //should take from 0 to target
    const rightArray = this.state.array.slice(targ); //should take everything to the right of index
    // this.setState({ testRightArray: rightArray });
    // this.setState({ testLeftArray: leftArray });
    const newArray = [...leftArray, ...rightArray];
    this.setState({ array: newArray });
  }

  editItem(event) {
    // const targ = parseInt(event.target.id);
    //const target = this.state.array[targ].task.editable;
    //should flip the state of a task to whatever the opposite is...
    // const one = "1";
    // const two = "2";
    //let opposite = "";

    //should I have some way of saving the new value to state? or will that be a problem
    //might do it, but is probably outside the scope of instructions.

    let targ = this.state.array[parseInt(event.target.className)]
      ? this.state.array[parseInt(event.target.className)].editable
      : null;
    if (targ === "1") {
      targ = "2";
    } else {
      targ = "1";
    }
    // if (
    //   this.state.array[this.state.array.indexOf({ id: event.target.id })]
    //     .editable === "1"
    // ) {
    //   opposite = two;
    // } else {
    //   opposite = one;
    // }

    // this.state.array.map((obj) =>{
    //     obj.id === event.target.id ?
    // })

    this.setState((prevState) => ({
      array: prevState.array.map((obj) =>
        obj.id === event.target.id
          ? Object.assign(obj, { editable: targ })
          : obj
      ),
    }));
    // if (this.state.array[targ].task.editable === "true") {
    //   this.setState({ array }); //will this work?
    // } else {
    //   target.setState({ task: { ...target.task, editable: "true" } });
    // }
  }

  render() {
    const { array, task } = this.state; //destructuring
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
