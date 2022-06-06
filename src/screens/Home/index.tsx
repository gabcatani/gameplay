import { View, FlatList, Text } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';

export function Home() {

  const [category, setCategory] = useState('');

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

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View style={styles.container}>
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={styles.content}>
          <ListHeader 
            title="Partidas Agendadas" 
            subtitle="Total 6" 
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Appointment data={item} />
              )}
              style={styles.matches}
              showsHorizontalScrollIndicator={false}
          />
          
        </View>
      </View>
    </View>
  );
}

