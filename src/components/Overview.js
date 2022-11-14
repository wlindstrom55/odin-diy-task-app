import React from "react";

//this will just render our tasks, while App.js will handle the input field with the logic

class Overview extends React.Component {
  // constructor(props) {
  //   super(props); //not sure if needed
  // }

  render() {
    return (
      <div>
        <ul>
          {this.props.array.map((task, i) => {
            const one = (
              <div contentEditable={true}>
                {"Task " + (i + 1) + " : " + task.text}
              </div>
            );
            const two = <div>{"Task " + (i + 1) + " : " + task.text}</div>;
            const three = (
              <button
                id={`${task.id}`}
                className={`${i}`}
                onClick={this.props.itemEdit}
              >
                Resubmit
              </button>
            );
            const four = (
              <button
                id={`${task.id}`}
                className={`${i}`}
                onClick={this.props.itemEdit}
              >
                Edit
              </button>
            );
            return (
              <li key={task.id} id={task.id}>
                {task.editable === "2" ? one : two}
                <button id={`${i}`} onClick={this.props.itemRemove}>
                  Delete
                </button>
                {task.editable === "2" ? three : four}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

/*
<button id={`${i}`} onClick={this.props.editTask}>
                  Edit
                </button>

                <div contentEditable={true}>
                  {"Task " + (i + 1) + " : " + task.text + "    "}
                </div>
*/

export default Overview;
