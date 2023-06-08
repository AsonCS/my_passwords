import FirebaseContext from "@/src/ui/context/FirebaseContext"
import { useContext } from "react"

export default function Home() {
	const firebase = useContext(FirebaseContext)
	return <h1>Hello word: {firebase}</h1>
}
