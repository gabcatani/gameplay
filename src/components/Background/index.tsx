import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type ChildrenProps = {
    children: JSX.Element[]
}

export function Background({ children }: ChildrenProps) {

    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    )
}