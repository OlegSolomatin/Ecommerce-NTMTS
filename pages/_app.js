import '../styles/globals.css'
import '../styles/stars.css'
import '../styles/productcard.css'
import {ProductsContextProvider} from "../components/productsContext";

function MyApp({ Component, pageProps }) {

  return(
      <ProductsContextProvider>
        <Component {...pageProps} />
      </ProductsContextProvider>
  )
}

export default MyApp
