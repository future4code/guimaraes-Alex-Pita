import styled from "styled-components";

export const StyledApp = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F6D41E;
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-template-rows: 15vh 85vh;
    grid-template-areas: 'aside header'
                         'aside main'
`
export const StyledHeader = styled.div`
    background: #005F70;
    grid-area: header;
`

export const StyledMain = styled.div`
    background: #D5FFFF;
    grid-area: main;
    
    
`

export const StyledAside = styled.div`
    background: #0096B0;
    grid-area: aside;

    img {
        height: 80px;
        width: 80px;
        align-items: center;
        justify-content: center;
    }
`