import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import store from './src/store';
import {paperTheme, navTheme} from './src/core/theme';

import AppNavigation from './src/navigation';
import {navigationRef} from './src/utils/app_navigation';

const persistor = persistStore(store);

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer theme={navTheme} ref={navigationRef}>
            <AppNavigation />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
