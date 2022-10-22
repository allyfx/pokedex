import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppRoutes from './src/routes';

function App() {
  return (
    <SafeAreaProvider>
      <AppRoutes />
    </SafeAreaProvider>
  );
}

export default App;
