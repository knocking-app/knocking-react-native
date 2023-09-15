import { View } from "react-native"
import { Size } from './index.types'
import { styles } from "./index.styled"
import { SvgXml } from 'react-native-svg';
import { xml } from './statics/index'


const IconBird = (props: Size) => {
    const { size } = props
    return(
        <View style={styles.container}>
            <SvgXml {...{xml}} width={size?.width || 200} height={size?.height || 200} />
        </View>
    )
}

export default IconBird