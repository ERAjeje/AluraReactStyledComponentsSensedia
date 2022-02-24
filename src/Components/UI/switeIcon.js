import React from 'react'

import alimentacao from '../../assets/images/alimentacao.svg';
import outros from '../../assets/images/outros.svg';
import saude from '../../assets/images/saude.svg';
import transporte from '../../assets/images/transporte.svg';
import utilidades from '../../assets/images/utilidades.svg';
import { IconTheme } from '.';

export default (type) => {
    const Images = {
        Restaurante: <IconTheme src={alimentacao} alt='Restaurante' className='svg'/>,
        Utilidades: <IconTheme src={utilidades} alt='Utilidades' />,
        Saude: <IconTheme src={saude} alt='Saude' />,
        Transporte: <IconTheme src={transporte} alt='Transporte' />,
        default: <IconTheme src={outros} alt='Outros' />,
    }

    return Images[type] || Images.default;
}
