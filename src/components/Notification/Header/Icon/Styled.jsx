import styled from "styled-components"

export const Wrapper = styled.div`
       padding-right:8px;
       color:${({ type, color }) => pickColor(type, color)} ;     
`
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