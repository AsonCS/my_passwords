import { AppProps } from 'next/app'
import GlobalStyle from '@ui/infra/styled/GlobalStyle'
import ThemeProvider from '@ui/infra/styled/ThemeProvider'

export default function App({
    Component,
    pageProps
}: AppProps) {
    // To genarate a NEXT_PUBLIC_TOKEN to put on .env
    // console.log('NEXT_PUBLIC_TOKEN', require('crypto').randomBytes(20).toString('hex'))
    const Content = Component as any
    return (
        <>
            <ThemeProvider>
                <GlobalStyle />
                <Content {...pageProps} />
            </ThemeProvider>
        </>
    )
}
