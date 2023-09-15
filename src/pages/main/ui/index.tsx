import { View } from "react-native"
import AddUrlPanel from "../../../widgets/addUrl/ui"
import AppBar from "../../../widgets/appBar/ui"
import ListItems from "../../../widgets/listItems/ui"
import { styles } from "./index.styled"
import { Props } from "./index.types"
import { AnimatedFAB } from 'react-native-paper';
import { useState } from "react"


const MainPage = (props: Props) => {
    const { navigation,  } = props
    const [ isExtended, setIsExtended ] = useState(false)

    const handlerLogout = () => {
      navigation.navigate('WelcomePage')
    }


  return(
    <View style={styles.container}>
        <AppBar {...{ handlerLogout}}/>
        <ListItems />
        <AnimatedFAB
          icon={'plus'}
          label={'Label'}
          extended={isExtended}
          onPress={() => navigation.navigate('AddPost')}
          visible={true}
          animateFrom={'right'}
          iconMode={'static'}
          style={[styles.fabStyle]}
      />        
    </View>
    )
}

export default MainPage