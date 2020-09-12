import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`{
      from { opacity:0; }
      to { opacity:1; }
  }`

const leftToRight = keyframes`{
   from { transform:translateX(100%)}
  to { transform:translateX(0)}
}`

const bottomToUp = keyframes`{
  from { transform:translateY(100%)}
 to { transform:translateY(0)}
}`

export const Wrapper = styled.div`
      position:absolute;
      overflow:hidden;
      bottom:0;
      right:0;
      margin-right:1.2em;
      margin-bottom:1.2em;
      background-color: ${({ darkmode }) => setBackgroundColor(darkmode)};
      padding:1.2em;
      min-width:350px;
      min-height:100px;
      border-radius:${({ rounded }) => rounded ? `1.2em` : `0.2em`};
      box-shadow: 0 0.2em 2em 0 ${({ type }) => setShadowColor(type)};
      animation: ${({ duration }) => setDuration(duration) + `s`} ${({ animation }) => setAnimation(animation)};
      animation-fill-mode: forwards;`

const setBackgroundColor = darkmode => {
  if (darkmode) {
    return `#000010`;
  }
  return `#fff`
}

const setShadowColor = (type) => {
  switch (type.toLowerCase()) {
    case "info": return "rgba(0,151,255,0.3)";
    case "warning": return "rgba(255,157,0,0.3)";
    case "success": return "rgba(0,216,0,0.3)";
    case "error": return "rgba(255,0,0,0.3)";
    default: return "rgba(190,190,190,0.3)";
  }
}

const setAnimation = animation => {
  switch (animation.toLowerCase()) {
    case "fadein":
      return fadeIn;
    case "left2right":
      return leftToRight;
    case "bottom2up":
      return bottomToUp;
    default: return fadeIn
  }
}

const setDuration = duration => {
  if (duration) {
    return duration
  }
  return 2
}