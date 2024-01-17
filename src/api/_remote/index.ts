import firebase from "@firebase/index";
import passwordApiImpl from "./content/PasswordApiImpl";

const passwordApi = (idClient: string) => passwordApiImpl(firebase.db, idClient)

export { passwordApi }
