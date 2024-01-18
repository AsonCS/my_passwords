import React from 'react'
import {
    ThemeProvider as StyledThemeProvider,
    useTheme as useThemeStyled,
} from 'styled-components'

import { getTheme, ThemeType } from './theme'

export function useTheme(): ThemeType {
    return useThemeStyled() as unknown as any
}

interface ThemeProviderProps {
    children: React.ReactNode;
}
export default function ThemeProvider({
    children
}: ThemeProviderProps) {
    return (
        <StyledThemeProvider theme={getTheme('StyledDarkTheme')}>
            {children}
        </StyledThemeProvider>
    )
}
