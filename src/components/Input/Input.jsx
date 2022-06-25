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

export default Input;


