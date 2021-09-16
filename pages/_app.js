import 'tailwindcss/tailwind.css'
import Layout from '@components/layout'
import { ThemeProvider } from "@context/Theme";
import '../public/stylesheet/custom.css'

function MyApp({ Component, pageProps }) {
  return (
  	<ThemeProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  )
}

export default MyApp
