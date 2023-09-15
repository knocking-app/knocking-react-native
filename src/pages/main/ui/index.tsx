import { useState } from "react"
import { View } from "react-native"
import AppBar from "../../../widgets/appBar/ui"
import ListItems from "../../../widgets/listItems/ui"
import { styles } from "./index.styled"
import { Props } from "./index.types"

const MainPage = (props: Props) => {
    const { navigation,  } = props
    // const [isHide, setIsHide] = useState(false)

    const handlerLogout = () => {
      navigation.navigate('TestPage')
    }

    // const handleIsHideAppBar = (hide: boolean) => {
    //   setIsHide(hide)
    // }

  return(
    <View style={styles.container}>
        <AppBar {...{ handlerLogout}}/>
        <ListItems />
    </View>
    )
}

export default MainPage