import React from 'react';
import Overview from './Overview';

//app will handle the input field with the logic of sending inputs to task array
class App extends React.Component {
  constructor() {
      super(); //not sure we need props at all here
      this.state = { array: [], value: '' }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  //IMPORTANT: must make our component a 'controlled component' to deal with forms.
  //that requires an onChange event and a value={this.state.value} property (on the input).
  handleChange(event) {
      this.setState({value : event.target.value}) //basically the state of value is stored
      //as state on the App component, instead of in the form (which doesn't work on React b/c)
  }

  handleSubmit(event) {
    //alert('A task was submitted: ' + this.state.array[i]); //won't work. Can't access array like so
    this.setState({array: [...this.state.array, this.state.value]}) //non-mutating concat
    event.preventDefault(); //prevent default behavior (refresh)
    this.setState({value: ''}); //this resets the input after submit! neat
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Create a Task: 
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <Overview array={this.state.array}/>
      </div>
    );
  }
}

export default App;
