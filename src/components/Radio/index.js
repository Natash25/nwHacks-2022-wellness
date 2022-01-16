import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'




export default class RadioTest extends Component {
  value = "";
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  
  

  // createTime = async () => {
  //   await addDoc(usersCollectionRef, { name: value});
  // };


//   handleInputChange = e => {
//     const { name, value } = e.target;
//     console.log(name, value);
//     setState(state => {
//         const newState = { ...state, [name]: value }
  
//         //post newState to firebase
  
//        return newState
//     });

  render() {
    return (
      <Form>
        <Form.Field>
          Selected Time: <b>{this.state.value}</b>
          {/* checked={test(this.state.value)} */}
        </Form.Field>
        <Form.Field>
          <Radio
            label='January 15th 12:00pm'
            name='radioGroup'
            value='January 15th 12:00pm'
            checked={this.state.value === 'January 15th 12:00pm'}
            // checked={console.long("sdfsdf")}
            onChange={this.handleChange}
            
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='January 16th 12:00pm'
            name='radioGroup'
            value='January 16th 12:00pm'
            checked={this.state.value === 'January 16th 12:00pm'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='January 17th 12:00pm'
            name='radioGroup'
            value='January 17th 12:00pm'
            checked={this.state.value === 'January 17th 12:00pm'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='January 18th 12:00pm'
            name='radioGroup'
            value='January 18th 12:00pm'
            checked={this.state.value === 'January 18th 12:00pm'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    );
  }

  
}


// const RadioTest = () => (
//     <div>
//       <h1>Appointments</h1>
//     </div>
//   );
  
//   export default RadioTest;