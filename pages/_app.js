import '../styles/globals.css'
import { ContextProvider } from '../context/Context'
import Layout from '../components/layoutComponent/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>

    </Layout>

  )
}

export default MyApp
