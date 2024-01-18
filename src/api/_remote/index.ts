import passwordApiImpl from './content/PasswordApiImpl'

const passwordApi = (idClient: string) => passwordApiImpl(idClient)

export {
    passwordApi
}
