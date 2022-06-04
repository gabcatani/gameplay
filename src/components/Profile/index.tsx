import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>

        <Avatar urlImage="https://github.com/gabcatani.png" />

        <View>
            <View style={styles.user}>
                <Text style={styles.greeting}>
                    Profile
                </Text>

                <Text style={styles.username}>
                    Gabriel
                </Text>
            </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
        </View>
    </View>
  );
}