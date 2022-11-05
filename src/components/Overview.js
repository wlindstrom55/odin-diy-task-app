import React from "react";

//this will just render our tasks, while App.js will handle the input field with the logic

class Overview extends React.Component {
    // constructor(props) {
    //     super(props); //not sure if needed
    //     this.state = {taskarray : []};
    // }
    //since props are given in this component's declaration as a child of App, we don't specify them

    render() {
        return (
            <div>
                <ul>{this.props.array.map(
                        function taskIterator(item, i) { 
                            return <li>{"Task " + (i + 1) + " : " + item}</li>
                })}</ul>
            </div>
        );
    }
}

export default Overview;