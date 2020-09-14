import styled from "styled-components"
import { hexToRgba, rgbToRgba } from "../utility"

export const Wrapper = styled.div`
       display:flex;
       align-items:flex-end;
       padding-top:30px;
`

export const Button = styled.button`
       background-color: ${({ type, color }) => pickBackgroundColor(type, color, true)};
       color:${({ type, color }) => pickColor(type, color)};
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
        background-color:${({ type, color }) => pickBackgroundColor(type, color)};
      }
      &:focus{
          outline:none
      }
`
const pickBackgroundColor = (type, color, alpha) => {
    if (color) {
        if (color.startsWith('#')) {
            return hexToRgba(color, alpha);
        }
        return rgbToRgba(color, alpha);
    }
    switch (type) {
        case "info": return `rgba(0,87,255,${alpha ? '0.1' : 1})`;
        case "warning": return `rgba(255,157,0,${alpha ? '0.1' : 1})`;
        case "success": return `rgba(0,216,0,${alpha ? '0.1' : 1})`;
        case "error": return `rgba(255,0,0,${alpha ? '0.1' : 1})`;
        default: return `rgba(190,190,190,${alpha ? '0.1' : 1})`;
    }
}

const pickColor = (type, color) => {
    if (color) {
        return color;
    }
    switch (type) {
        case "info": return "rgba(0, 87, 255)";
        case "warning": return "rgba(255,157,0)";
        case "success": return "rgba(0,216,0)";
        case "error": return "rgba(255,0,0)";
        default: return "rgba(190,190,190)";
    }
}
