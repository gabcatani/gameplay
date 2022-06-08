import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Guild 1',
            icon: 'https://i.imgur.com/2Y8WQYJ.png',
            owner: true
        },
        {
            id: '2',
            name: 'Guild 2',
            icon: 'https://i.imgur.com/2Y8WQYJ.png',
            owner: true
        }
    ]

  return (
    <View style={styles.container}>
        <FlatList
            data={guilds}
            keyExtractor={guild => guild.id}
            renderItem={({ item }) => (
                <Guild 
                    data={item} 
                    onPress={() => handleGuildSelect(item)}
                />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListHeaderComponent={() => <ListDivider isCentered />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 68, paddingTop: 104 }}
            style={styles.guilds}
        />
    </View>
  );
}