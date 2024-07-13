import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
}

body,input,button,textarea{
    font-family: "Outfit", sans-serif;
    font-style: normal;
    font-size: 14px;
}
`;
