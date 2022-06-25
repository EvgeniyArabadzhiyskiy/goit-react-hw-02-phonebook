import styled from 'styled-components';

export const MainSection = styled.div`
  width: 800px;
  margin: ${prop => prop.theme.marginAuto};
  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
`
