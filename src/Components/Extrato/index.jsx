import React from 'react'
import { Box, Button } from '../UI'

import { extratoLista } from '../../info'
import { Item, Items } from '../Items';
import switeIcon from '../UI/switeIcon';
import { useState } from 'react';
import { itemHeight } from '../UI/variaveis';

export default function Extrato() {
    const data = extratoLista.updates;
    const initial = 3 * itemHeight;
    const [count, setCount] = useState(initial);

    const _handleClickVerMais = () => {
        setCount(data.length * (itemHeight + 10));
    }

    const _handleClickVerMenos = () => {
        setCount(initial);
    }
    return (
        <Box>
            <Box height={`${count}px`} width='100%' transparent>
                {
                    data.map(item => {
                        const { id, value, type, date, from } = item;
                        return <Items key={id}>
                            <Item>{switeIcon(type)}</Item>
                            <Item>
                                <span className='text'>{type}</span>
                                <span>{from}</span>
                                <span>{value}</span>
                            </Item>
                            <Item>{date}</Item>
                        </Items>
                    })
                }
            </Box>
            <Box width='100%' transparent row >
                <Button onClick={_handleClickVerMais} disabled={count !== initial ? true : false}>Ver Mais</Button>
                <Button onClick={_handleClickVerMenos} disabled={count === initial ? true : false}>Ver Menos</Button>
            </Box>

        </Box>
    );
}
