import React from 'react'
import {themeContext} from "../context/ThemeContext";

const ButtonTheme = () => {
    return (
        <themeContext.Consumer>
            {({ theme, toggleTheme }) => {
                return (
                    <button onClick={toggleTheme}>Change theme</button>
                )
            }}
        </themeContext.Consumer>
    )
}

export {ButtonTheme}