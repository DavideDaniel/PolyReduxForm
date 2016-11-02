import React from 'react';
import { reduxForm, Field } from 'redux-form';

const CustomInput = ({ input, label, type, maxCharacters }) => (
  <div>
    <label style={{ padding: '10px 20px'}}>{input.value}</label>
    <span style={{ padding: '10px 20px'}}>{maxCharacters - input.value.length} characters remaining</span>
    <input {...input} placeholder={label} maxLength={maxCharacters} type={type}/>
  </div>
)

const InputComponent = (props) => {
  return(
    <Field name={props.form} component={CustomInput} type="text" label={props.mc.name} maxCharacters={props.mc.maxLength} />
  )
}

export default reduxForm(
  (state, props) => ({
    form: props.id,
  }),
)(InputComponent);