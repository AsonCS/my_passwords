'use client'

export default function Home() {
	// const firebase = useContext(FirebaseContext)
	return (
		<>
			<h1>Hello word</h1>
			<form
				action='#'
				onSubmit={async (e) => {
					e.preventDefault()
					const num = (e.target as any).num.value
					const res = await fetch('/api', {
						method: 'POST',
						body: JSON.stringify({
							test: num,
						}),
					}).then((res) => res.json())
					console.log(res)
				}}
			>
				<input name='num' type='text' defaultValue='12' />
				<button type='submit'>Send</button>
			</form>
		</>
	)
}
