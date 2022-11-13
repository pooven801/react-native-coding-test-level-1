import { NavigationContainer } from '@react-navigation/native';
import Entry from './src/navigation/Entry';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';

const AppWrapper = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Entry />
      </NavigationContainer>
    </PersistGate>
  );
}

export default AppWrapper;