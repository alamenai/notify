import React from "react"

const WithLink = Component => {
    return ({ src, link }) => <a href={link} target="__blank">
        <Component url={src} />
    </a>

}

export default WithLink