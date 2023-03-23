import React from "react"
import {Option} from "./Option";

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map(option =>
                <Option
                    key={Math.random()}
                    option={option}
                    handleDeleteOption={props.handleDeleteOptionSingular}
                />
            )
        }
    </div>
)

export {Options}