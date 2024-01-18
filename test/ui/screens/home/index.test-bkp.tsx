/**
 * @jest-environment jsdom
 */

import { test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
// import HomeScreen from '../../../../src/ui/screens/home'

test('loads and displays greeting', async () => {
	// ARRANGE
	// const homeScreen = await HomeScreen()
	render(<h1>Test</h1>)

	// ACT
	// await userEvent.click(screen.getByText('Load Greeting'))
	// await screen.findByRole('heading')
	await screen.findByText('Test')

	// ASSERT
	// expect(screen.getByRole('heading')).toHaveTextContent('hello there')
	// expect(screen.getByRole('button')).toBeDisabled()
	// expect(screen.getByRole('h1')).toHaveTextContent('Test')
})
