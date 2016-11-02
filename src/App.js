import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputComponent from './InputComponent';
import { getForms } from './state/selectors'

const mcs = [
  {id:0,name:'LEFT', maxLength: 7},
  {id:1,name:'RIGHT', maxLength: 7},
  {id:2,name:'LSHORT', maxLength: 7},
  {id:3,name:'RSHORT', maxLength: 7},
];

const validate = values => {
  const errors = {}
  if(values && /A/.test(values)){
    errors.left = true;
  }
  return errors
}

async function asyncValidate(v) {
  await setTimeout(() => console.log('done',Object.keys(v), 'validated'), 2000);
}

class App extends Component {
  render() {
    return (
      <div>
        {mcs.map((item) => (
          <InputComponent
            mc={item}
            key={item.id}
            form={item.id.toString()}
            syncValidate={validate}
            asyncValidate={asyncValidate}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    forms: getForms(state),
  })
)(App);
