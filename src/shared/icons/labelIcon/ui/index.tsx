import { View } from "react-native"
import { SvgXml } from 'react-native-svg';
import { xml } from './statics/index'
import { Props } from './index.types'

const IconLogo = (props: Props) => {
    const { size } = props
    return(
        <View >
            <SvgXml {...{xml}} width={size?.width || 50} height={size?.height || 50} />
        </View>
    )
}

export default IconLogo