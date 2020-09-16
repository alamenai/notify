import React from "react";
import PropTypes from "prop-types";
import { Video as StyledVideo, Image as StyledImage } from "./Styled";
import WithLink from "./withLink";
import { isVideo, getExtension } from "../utility";

const Image = ({ url }) => (<StyledImage src={url} alt={url} />);

const Video = ({ url }) => {

    const extension = getExtension(url);
    return (<StyledVideo autoPlay loop muted>
        <source src={url} type={`video/` + extension}></source>
        <source src={url} type={`video/` + extension}></source>
    </StyledVideo>);
}

const Media = ({ src, link }) => {
    if (!src) {
        throw new Error('src is Required');
    }
    return (
        <>{
            isVideo(src) ?
                (link ? WithLink(Video)({ src, link }) : <Video url={src} />) :
                (link ? WithLink(Image)({ src, link }) : <Image url={src} />)
        }
        </>);
}

Media.propTypes = {
    src: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default Media