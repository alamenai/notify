import styled from "styled-components"

export const Wrapper = styled.div`
       display:flex;
       align-items:flex-end;
       padding-top:30px;
`

export const Button = styled.button`
       background-color: ${({ type }) => pickBackgroundColor(type, true)};
       color:${({ type }) => pickColor(type)};
       position:absolute;
       right:0;
       padding-left:10px;
       padding-right:10px;
       padding-top:5px;
       padding-bottom:5px;
       margin-bottom:0px;
       margin-right:15px;
       border:none;
       border-radius:5px;
       cursor:pointer;
       font-size:12px;
       font-weight:600; 
       &:hover {
        color: white;
        background-color:${({ type }) => pickBackgroundColor(type)};
      }
      &:focus{
          outline:none
      }
`
const pickBackgroundColor = (type, alpha) => {
    switch (type) {
        case "info": return `rgba(0,151,255,${alpha ? '0.1' : 1})`;
        case "warning": return `rgba(255,157,0,${alpha ? '0.1' : 1})`;
        case "success": return `rgba(0,216,0,${alpha ? '0.1' : 1})`;
        case "error": return `rgba(255,0,0,${alpha ? '0.1' : 1})`;
        default: return `rgba(190,190,190,${alpha ? '0.1' : 1})`;
    }
}

const pickColor = (type) => {
    switch (type) {
        case "info": return "rgba(0,151,255)";
        case "warning": return "rgba(255,157,0)";
        case "success": return "rgba(0,216,0)";
        case "error": return "rgba(255,0,0)";
        default: return "rgba(190,190,190)";
    }
}