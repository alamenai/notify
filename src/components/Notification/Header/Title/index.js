import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Title as StyledTitle, Subtitle } from "./Styled"
import Context from "../../context"
import { Wrapper } from "./Styled"
import { upperCaseFirstLetter } from "../../utility"

const Title = ({ title, subtitle }) => {

    if (!title) {
        throw new Error(`title is a required property`)
    }
    if (!subtitle) {
        throw new Error(`subtitle is a required property`)
    }

    const { type } = useContext(Context);

    return (<Wrapper>
        <StyledTitle type={type}>{upperCaseFirstLetter(title)}</StyledTitle>
        <Subtitle >{upperCaseFirstLetter(subtitle)}</Subtitle>
    </Wrapper>)
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Title