import React from 'react';
import { 
  View, 
  Text, 
  Image,
} from 'react-native';


import { styles } from './styles';
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';

export function SingIn() {

  const navigate = useNavigation()

  function handleSingIn() {
    navigate.navigate('Home')
  }

  return ( 
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

          <ButtonIcon 
            title='Entrar com o Discord'
            onPress={handleSingIn}
          />

        </View>
    </View>
  )
}
