import { reduxForm } from 'redux-form';
import TextComponent from './TextComponent';

const TextQuestion = reduxForm(
  (state, props) => ({
    form: props.id,
  })
)(TextComponent);

export { TextQuestion }