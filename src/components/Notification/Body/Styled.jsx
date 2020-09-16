import styled from "styled-components"

export const Wrapper = styled.div`
       margin-top:0px;
       max-width: fit-content;
`
export const Text = styled.p`
       color:${({ darkmode }) => setColor(darkmode)};
       font-size:0.78rem;
       font-weight:500;
       font-family:'Arial';
       margin-top:0;
       text-align:justify;
       line-height:1.4rem;
`
const setColor = (darkmode) => {
    if (darkmode) {
        return 'rgba(140,140,140)'
    }
    return 'rgba(60,60,60)'
}