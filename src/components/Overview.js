import React from "react";

//this will just render our tasks, while App.js will handle the input field with the logic

class Overview extends React.Component {
    // constructor(props) {
    //     super(props); //not sure if needed
    //     this.state = {taskarray : []};
    // }
    //since props are given in this component's declaration as a child of App, we don't specify them

    render() { //probably need to use map to go thru the function here and render all
        return (
            <div>
                <ul>{this.props.array.map(
                    function taskIterator(item, i) { //got the newlines to work like so:
                        return<li>{"Task " + (i + 1) + " : " + item}</li>
                    })}</ul>
            </div>
        );
    }
}

export default Overview;