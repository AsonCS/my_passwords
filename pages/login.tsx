import styled from 'styled-components'

import { auth } from '@firebase/index'

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

/*
{
    "token": "ya29.a0AfB_byAVlQosRNV0RFzhJj9Y48_k0ead_iHiyeKbcp7Cjy7C__a_ac93lP_9MZQMvEEiYYIeL3lJo8B48gZY7Byn9EDI5xdctYh9sD8uaNU1UIg8csrVWucbXrf-hAyzkpSRzliSqY5SScJL3THUuA6QQnGhZa9tyn8caCgYKAfgSARESFQHGX2MiQKDYfakBtqM6Di3OjfkCBg0171",
    "user": {
        "uid": "N9xyJT8txNPekSALg5DN1TibHI32",
        "email": "acsgsa92@gmail.com",
        "emailVerified": true,
        "displayName": "Son ACS",
        "isAnonymous": false,
        "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJUkXFNPi3PIDlXwmTqiUko8_RpWIqH-h2s5xuh18i3Dg=s96-c",
        "providerData": [
            {
                "providerId": "google.com",
                "uid": "111508521501269277489",
                "displayName": "Son ACS",
                "email": "acsgsa92@gmail.com",
                "phoneNumber": null,
                "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJUkXFNPi3PIDlXwmTqiUko8_RpWIqH-h2s5xuh18i3Dg=s96-c"
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vBzoNMpMp8Ulgf2NkKkND8gmEMkdi8LA4LnVYy57SHxg_lUH6dEzM_ZTIE6Qvo7NEScHAlJ0OOBGXv9E1YH1nzyDuiNHS6Wg5VMTrdCS03cPn3ebHpJNEpSaKSIsmLWF6WKLC_nVvScAspyNSbn8ojZCeI0PDAVzjRq4rVNupVeUoQgfAHYPaQgVCcbx6346gUIy53fw2-Ni8VZESEXM2h1tpnxYTZjP6yfsnijcyiNGYPJMQi5Th03SRfCEODGA2KAxNWIk6RvUvI98tdmMemCxMRavlkjxhig_Bz02Aff_zsN2_BoSdAGK_HKXw6wu_tMO6rLrCRjKwgpzVXApXlj4NuMj4bG4qQ5Z6p4mi4VN8GLFbFx6_Fr-LcQ72HcbZPSQr5QFWARjFC4lOkjZ3ErQPFPsZ2Dgfysb8wItAiI1wtvAjNI",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjZjdmODcyNzA5MWU0Yzc3YWE5OTVkYjYwNzQzYjdkZDJiYjcwYjUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU29uIEFDUyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKVWtYRk5QaTNQSURsWHdtVHFpVWtvOF9ScFdJcUgtaDJzNXh1aDE4aTNEZz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9teS1wYXNzd29yZHMtNWIzNWMiLCJhdWQiOiJteS1wYXNzd29yZHMtNWIzNWMiLCJhdXRoX3RpbWUiOjE3MDU2MDE2ODIsInVzZXJfaWQiOiJOOXh5SlQ4dHhOUGVrU0FMZzVETjFUaWJISTMyIiwic3ViIjoiTjl4eUpUOHR4TlBla1NBTGc1RE4xVGliSEkzMiIsImlhdCI6MTcwNTYwMTY4MiwiZXhwIjoxNzA1NjA1MjgyLCJlbWFpbCI6ImFjc2dzYTkyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNTA4NTIxNTAxMjY5Mjc3NDg5Il0sImVtYWlsIjpbImFjc2dzYTkyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.MEZODQnjjrjqVm45P2jSWx8OFzuvGpW5Kzm7O4cB66kttjYxxPgqutnjOz02CrNYeV4R4vqgGpKFYwAcK0HrKm8gRwAWVQe0AFnJVLW-ATI_24AjtNpD-KNNKbM_KBwGHBWQmeszP4QQyd4JUsjzyum6PozmtxzxIYPN0JMO8jArYNR4B2D33bJ90HWrLOo5_Chr0G32rskNPtj7unbsHiDOBj6FBwMog1ERZdBbqisDw_a01IpNQF7bnjr4KrZ6qtC6_s2EuNQgUlJ7_Pf5zRSyafU994_ez_QiiWcMjk0kMVEwQ3x-HiQgQp-JmEMxLcC6YZV9pIvOXzhiwcQn0w",
            "expirationTime": 1705605282442
        },
        "createdAt": "1705601682552",
        "lastLoginAt": "1705601682553",
        "apiKey": "AIzaSyBMTTlcYuSX3RhN0KNB8ri_RKHfEUszK0o",
        "appName": "[DEFAULT]"
    }
}
*/

export default function Login() {
    const onLogin = async () => {
        const result = await auth().signInWithPopup()
        if (result.data) {
            alert(`Login success: alreadyLoggedIn=${result.data.alreadyLoggedIn}`)
            //console.log(result.data)
        } else {
            alert('Login error')
            //console.log(result.error)
        }
    }

    return (
        <Div>
            <Content>
                <h1>Login</h1>
                <Button
                    onClick={onLogin}
                >Sign in</Button>
            </Content>
        </Div>
    )
}
