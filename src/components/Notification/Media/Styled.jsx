import styled from "styled-components";

export const Image = styled.img`
     background-repeat:space;
     width:100%;
     min-height:40vh;
     max-height:400px;
     background-size:cover;
     border-radius:5px;
     border:none;
     cursor:pointer;
     margin-top:4px;
     margin-bottom:4px;
     &:hover{
         opacity:0.9;
     }
`
export const Video = styled.video`
     min-height:40vh;
     max-height:240px;
     background-size:cover;
     border-radius:5px;
     border:none;
     cursor:pointer;
     margin-top:4px;
     margin-bottom:4px;     
     &:hover{
         opacity:0.9;
     }
`