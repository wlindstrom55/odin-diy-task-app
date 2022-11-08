import React from "react";

//this will just render our tasks, while App.js will handle the input field with the logic

class Overview extends React.Component {
  // constructor(props) {
  //   super(props); //not sure if needed
  //   this.state = { array: props.array };
  //   //this.removeItem = this.removeItem.bind(this);
  // }

  render() {
    return (
      <div>
        <ul>
          {this.props.array.map((task, i) => {
            return (
              <li key={task.id} id={task.id}>
                {"Task " + (i + 1) + " : " + task.text + "    "}
                <button id={`${i}`} onClick={this.props.itemRemove}>
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
