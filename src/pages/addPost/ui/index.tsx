import { View } from "react-native"
import { Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import AddUrlPanel from "../../../widgets/addUrl/ui"
import { styles } from "./index.styled"
import { Props } from "./index.types"
import IconBird  from "../../../shared/icons/birdIcon"

const AddPost = (props: Props) => {
    const { navigation, route } = props

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} variant="displayMedium">Добавить пост</Text>
            <View style={styles.iconBlock}>
                <IconBird />
            </View>
            <View style={styles.urlBlock}>
                <AddUrlPanel {...props} />
            </View>
        </SafeAreaView>
    )
}

export default AddPost