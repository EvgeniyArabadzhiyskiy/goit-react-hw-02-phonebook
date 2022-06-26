import styled from 'styled-components';

export const FormLabel = styled.label`
  display: block;
  font-weight: ${prop => prop.theme.fontWeights.semiBold};
  margin-bottom: ${prop => prop.theme.space[3] * 3}px;
`;
