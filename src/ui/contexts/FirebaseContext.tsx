'use client'

import React from 'react'
// import { firebaseType, FirebaseType } from '../../infra/firebase'

const FirebaseContext = React.createContext<number>(1)
// const firebase = firebaseType()

export default FirebaseContext

// export { firebase }

export function FirebaseProvider(props: { children: React.ReactElement }) {
	return (
		<FirebaseContext.Provider value={1}>
			{props.children}
		</FirebaseContext.Provider>
	)
}
