import React from "react";

//this will just render our tasks, while App.js will handle the input field with the logic

class Overview extends React.Component {
  // constructor(props) {
  //   super(props); //not needed. we pass all our props in App I'm guessing is why
  // }

  render() {
    return (
      <div>
        <ul>
          {this.props.array.map((task, i) => {
            const yesEditTask = (
              <div contentEditable={true}>
                {"Task " + (i + 1) + " : " + task.text}
              </div>
            );
            const noEditTask = (
              <div>{"Task " + (i + 1) + " : " + task.text}</div>
            );
            const yesEditButton = (
              <button
                id={`${task.id}`}
                className={`${i}`}
                onClick={this.props.itemEdit}
              >
                Resubmit
              </button>
            );
            const noEditButton = (
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
                {task.editable === "2" ? yesEditTask : noEditTask}
                <button id={`${i}`} onClick={this.props.itemRemove}>
                  Delete
                </button>
                {task.editable === "2" ? yesEditButton : noEditButton}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;
