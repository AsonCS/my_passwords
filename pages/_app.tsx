import { AppProps } from 'next/app';
import GlobalStyle from "@ui/infra/styled/GlobalStyle";
import ThemeProvider from "@ui/infra/styled/ThemeProvider";

export default function App({
    Component,
    pageProps
}: AppProps) {
    return (
        <>
            <ThemeProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
