import React from 'react'
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import { Icon } from '../UI';


export default function SwitcherTheme({ theme }) {
    return theme ? <Icon src={ThemeOff} alt="Tema Escuro" /> : <Icon src={ThemeOn} alt="Tema Claro" />;
}
