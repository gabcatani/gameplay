
import { StatusBar, LogBox } from 'react-native';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';

LogBox.ignoreAllLogs

export default function App() {

  return (
      <Background>
       <StatusBar 
            barStyle="light-content" 
            backgroundColor="transparent"
            translucent 
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Background>
  )
}
