import styled from 'styled-components';

export const ContactBox = styled.li`
  display: flex;
  justify-content: space-around;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: ${prop => prop.theme.space[3]}px;
  }
`;

export const UserName = styled.span`
  width: 150px;
  font-size:  ${prop => prop.theme.fontSizes.m};
  font-weight: ${prop => prop.theme.fontWeights.semiBold};
`;

export const UserNumber = UserName

// export const UserNumber = styled.span`
//   width: 150px;
//   font-size: 18px;
//   font-weight: 500;
// `;
