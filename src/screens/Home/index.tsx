import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

export function Home() {

  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '06/06 ás 00:43',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentsDetails() {
    navigation.navigate('AppointmentDetails');
  }
  
  function handleAppointmentsCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentsCreate}/>
      </View>

        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        
          <ListHeader 
            title="Partidas Agendadas" 
            subtitle="Total 6" 
          />
         
        <FlatList 
            data={appointments}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Appointment data={item} 
                onPress={handleAppointmentsDetails}
              />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingRight: 69 }}
              style={styles.matches}
              showsHorizontalScrollIndicator={false}
          />
    </Background>
  );
}

