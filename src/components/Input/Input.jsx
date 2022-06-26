import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled'

const Input = ({ type, name, display, pattern, title, required, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      display={display}
      pattern={pattern}
      title={title}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  display: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input;


