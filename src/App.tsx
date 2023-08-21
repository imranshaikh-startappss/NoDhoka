import 'react-native-gesture-handler';
import React, { useEffect } from 'react'; // Import useEffect
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import SplashScreen from 'react-native-splash-screen';




const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide splash screen when the component mounts
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;