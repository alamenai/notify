import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Wrapper, Text } from "./Styled"
import Context from "../context"

const Body = ({ message }) => {

    const { darkmode } = useContext(Context);
    return (<Wrapper>
        <Text darkmode={darkmode}>{message}</Text>
    </Wrapper>)
}

Body.propTypes = {
    message: PropTypes.string.isRequired
}

export default Body