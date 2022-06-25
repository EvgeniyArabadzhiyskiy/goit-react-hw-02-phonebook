import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${prop => prop.theme.space[4]}px;
  margin: ${prop => prop.theme.marginAuto};
  border: ${prop => prop.theme.borders.normal};
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: ${prop => prop.theme.fontWeights.semiBold};
  margin-bottom: ${prop => prop.theme.space[3] * 3}px;
`;
