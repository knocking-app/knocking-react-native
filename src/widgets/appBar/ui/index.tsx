import { View } from "react-native"
import { styles } from "./index.styled"
import { Button, IconButton, Text } from 'react-native-paper';
import  IconLogo  from '../../../shared/icons/labelIcon/index'
import { Props } from './index.types'
import { SafeAreaView } from "react-native-safe-area-context";


const AppBar = (props: Props) => {
    const { handlerLogout } = props
    // const styleHide = styles.hide
 

    return (
        <SafeAreaView style={styles.appBarContainer }> 
            <IconLogo />
            <IconButton 
                style={{ backgroundColor: 'none' }}
                mode='contained'
                size={20}
                onPress={() => handlerLogout()} icon="logout-variant" 
            />
        </SafeAreaView>
    )
}

export default AppBar