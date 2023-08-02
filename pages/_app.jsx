import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reviewReducer';

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}


export default MyApp;
