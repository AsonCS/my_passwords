import styled from 'styled-components'

import firebase from '@firebase/index'
import { Links } from '@ui/components'

const Div = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 50vh;
`

const Button = styled.button`
    display: block;
    margin-top: 48px;
    padding: 24px;
`

export default function Login() {
    const onLogin = async () => {
        const result = await firebase
            .firebaseAuth
            .signInWithPopup()
        if (result.data) {
            alert(`Login success: alreadyLoggedIn=${result.data.alreadyLoggedIn}`)
            //console.log(result.data)
        } else {
            alert('Login error')
            //console.log(result.error)
        }
    }
    const onSignOut = () => {
        firebase
            .firebaseAuth
            .signOut()
            .then(() => alert('Logged out success'))
            .catch(() => alert('Logged out error'))
        }

    return (
        <Div>
            <Content>
                <Links />
                <h1>Login</h1>
                <Button
                    onClick={onLogin}
                >Sign in</Button>
                <Button
                    onClick={onSignOut}
                >Sign out</Button>
            </Content>
        </Div>
    )
}
