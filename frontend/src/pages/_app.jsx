import store from "@/redux/store";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import '../styles/index.scss';
import { GoogleOAuthProvider } from "@react-oauth/google";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

// stripePromise
const NEXT_PUBLIC_STRIPE_KEY = 'pk_test_51RBcGaFlxdysn105mkHP5TTBy0no4AjAMQlwYeFnFALR2iWOofQqwj1vH2Nm8zSU7kMs9E67qW8aaEGf4RVBAWjE008k63pDgd';
const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_KEY);
const NEXT_PUBLIC_GOOGLE_CLIENT_ID = '713222012255-9bh4ff2r3vco7f5duqkt0m2kbiquknar.apps.googleusercontent.com'
export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <div id="root">
            <Component {...pageProps} />
          </div>
        </Elements>
      </Provider>
    </GoogleOAuthProvider>
  )
}
