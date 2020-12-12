import React, { useState } from 'react'

const themes = {
    light: "light",
    dark: "dark",
    rose: "rose"
}

const themeContext = React.createContext({ theme: null, toggleTheme: () => {} })

const ThemeContext = (props) => {
    const [_theme, setTheme] = useState(themes.light)

    function _toggleTheme() {
        setTheme((theme) => {
            if (theme === themes.light)
                return themes.dark
            if (theme === themes.dark)
                return themes.rose
            if (theme === themes.rose)
                return themes.light
        })
    }

    return (
        <themeContext.Provider value={{ theme: _theme, toggleTheme: _toggleTheme }}>
            {props.children}
        </themeContext.Provider>
    )
}

export {ThemeContext, themeContext, themes}