import '../styles/globals.css'
import { AppProvider } from "../context/AppContext";
import Layout1 from "../components/layout/layout1"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => 
  <Layout1>{page}</Layout1>)
  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  )
}

export default MyApp
