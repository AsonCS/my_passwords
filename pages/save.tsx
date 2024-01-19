import styled from 'styled-components'

import contentService from '@data/index'

import { Password, PasswordGroup } from '@domain/model'

import { logAny, logError } from '@infra/Console'

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

const Form = styled.form`
`

const Label = styled.label`
    display: block;
`

const Input = styled.input`
    margin-left: 8px;
`

const Button = styled.button`
    display: block;
    margin-top: 12px;
    padding: 12px;
`

type PasswordForm = {
    group: string,
    name: string,
    value: string,
    applyTransform: boolean
}

export default function Save() {
    const submit = (password: PasswordForm) => {
        logAny(password)

        contentService()
            .passwordApi()
            .putGroup(
                password.applyTransform,
                new PasswordGroup({
                    id: null,
                    title: password.group,
                    passwords: [
                        new Password({
                            title: password.name,
                            value: password.value
                        })
                    ]
                })
            ).then((result) => {
                logAny(result)
                alert('Save success')
            }).catch((error) => {
                logError(error)
                alert('Save error')
            })
    }

    return (
        <Div>
            <Content>
				<Links />
                <h1>Save</h1>

                <Form
                    onSubmit={(e) => {
                        e.preventDefault()
                        const { 
                            passwordGroup, 
                            passwordName,
                            passwordValue,
                            passwordApplyTransform
                        } = e.target as any
                        submit({
                            group: passwordGroup.value,
                            name: passwordName.value,
                            value: passwordValue.value,
                            applyTransform: passwordApplyTransform.checked
                        })
                    }}
                    target='#'
                >
                    <Label>
                        Password group name:
                        <Input type='text' name='passwordGroup' defaultValue='Group name'/>
                    </Label>
                    <Label>
                        Password name:
                        <Input type='text' name='passwordName' defaultValue='Password name'/>
                    </Label>
                    <Label>
                        Password value:
                        <Input type='text' name='passwordValue' defaultValue='PasswordValue123!@#'/>
                    </Label>
                    <Label>
                        Transform password:
                        <Input type='checkbox' name='passwordApplyTransform' />
                    </Label>
                    <Button type='submit'>Send</Button>
                </Form>
            </Content>
        </Div>
    )
}
