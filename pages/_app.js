// import '@/styles/globals.css'
import '../assest/css/admin/style.css';
import '../assest/css/user/custome.css';
import Script from 'next/script'
import { Provider } from 'react-redux';
import { Store } from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function App({ Component, pageProps }) {
  
  return <>
    {/* <Script src="assest/js/admin/main.js" strategy="lazyOnload"/> */}
    <Provider store={Store}>
    <ToastContainer />
    <Component {...pageProps} />
    </Provider>
   
  </>
   
}
