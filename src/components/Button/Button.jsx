import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', children, width, onClick }) => {
  return (
    <StyledButton type={type} width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
