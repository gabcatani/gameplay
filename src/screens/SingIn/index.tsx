import { 
  View, 
  Text, 
  Image,
  ActivityIndicator
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';


export function SingIn() {

  const { user, singIn, loading } = useAuth();

  async function handleSingIn() {
    try {
        await singIn();
    } catch (error) {
      alert(error)
    }
  }

  return ( 
    <Background>
    <View style={styles.container}>
    
      <Image 
        source={IlustrationImg} 
        style={styles.image} 
        resizeMode="stretch"  
      />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}  
            e organize {'\n'} 
            suas jogatinas 
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'} 
            favoritos com seus amigos
          </Text>

          {
              loading ? <ActivityIndicator color={theme.colors.primary} /> 
            : 
              <ButtonIcon 
              title='Entrar com o Discord'
              onPress={handleSingIn}
            />
          }

        </View>
    </View>
    </Background>
  )
}
