import styled from "styled-components";

export const Wrapper = styled.div`
       display:block;
       justify-items:center;             
`

export const Title = styled.p`
  color: ${({ type, color }) => pickColor(type, color)};
  font-size:15px;
  font-weight:600;
  margin-top:0px;
  margin-bottom:0px;
  font-family: 'Arial';
`

export const Subtitle = styled.p`
  color:rgba(150,150,150);
  font-size:11px;
  font-weight:500;
  margin-top:3px;
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
    default: return "rgba(40,40,40)";
  }
}
