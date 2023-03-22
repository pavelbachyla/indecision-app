import React from "react";

const Header = (props) => {
    return (
        <div>
            <h1 id={'template-id'}>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision'
}

export {Header}