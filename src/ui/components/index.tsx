import styled from 'styled-components'

import { Link } from '@ui/infra/next'

const Div = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;
`

export function Links() {
    return (
        <Div>
            <Link href='/'>Index</Link>
            &nbsp;|&nbsp;
            <Link href='/login'>Login</Link>
            &nbsp;|&nbsp;
            <Link href='/save'>Save</Link>
        </Div>
    )
}
