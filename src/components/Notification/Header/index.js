import React from "react";
import PropTypes from "prop-types"
import { Wrapper } from "./Styled"
import Icon from "./Icon";
import Title from "./Title";
import Close from "./Close";

const Header = ({ title, subtitle }) => {
    return (<Wrapper>
        <Icon />
        <Title title={title} subtitle={subtitle} />
        <Close />
    </Wrapper>)

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Header
export { Icon, Close, Title }