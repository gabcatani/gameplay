import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading';
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