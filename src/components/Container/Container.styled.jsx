import styled from "styled-components";

export const MainContainer = styled.div`
    width: 1200px;
    margin:${prop => prop.theme.marginAuto};
    padding:${prop => prop.theme.space[0]} ${prop => prop.theme.space[5]}px;
    background-color: ${prop => prop.theme.colors.container};
`;