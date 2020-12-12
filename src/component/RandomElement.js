import React from 'react'
import {themeContext, themes} from "../context/ThemeContext";

const RandomElement = () => {
    return (
        <themeContext.Consumer>
            {({ theme, toggleTheme }) => {
                console.log(theme, toggleTheme)
                const bc = theme === themes.light ? "#e3f2fd" : theme === themes.dark ? "#474747" : "#d81b60"
                const style = {backgroundColor: bc}
                return (
                    <div style={style}>
                        <h1>hello world, this is simple element</h1>
                    </div>
                )
            }}
        </themeContext.Consumer>
    )
}

export {RandomElement}