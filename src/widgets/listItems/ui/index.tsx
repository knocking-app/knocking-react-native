import { FlatList, ScrollView, ListRenderItemInfo } from "react-native"
import { styles } from "./index.styled"
import MyCard from '../../../entities/card/index'
import { SafeAreaView } from "react-native-safe-area-context"
import { CardProps } from "../../../entities/card/ui/index.types"
import { Props } from './index.type'
import { useState } from "react"

const ListItems = () => {
    // const { handleIsHideAppBar, appBarHide } = props
    // const [scrollY, setScrollY] = useState(0)
    const testData = [
        {title: 'test', description: 'test', url: 'test url' },
        {title: 'test1', description: 'test', url: 'test url' },
        {title: 'test2', description: 'test', url: 'test url' },
        {title: 'test3', description: 'test', url: 'test url' },
        {title: 'test4', description: 'test', url: 'test url' },
        {title: 'test5', description: 'test', url: 'test url' },
        {title: 'test6', description: 'test', url: 'test url' },

    ]

    // onScroll={(e) => {
    //     const scrollYposition = e.nativeEvent.contentOffset.y
    //     if(scrollYposition > scrollY && !appBarHide && handleIsHideAppBar) {
    //         handleIsHideAppBar(true)
    //         setScrollY(scrollYposition)
    //         return
    //     }

    //     if(appBarHide && handleIsHideAppBar) {
    //         handleIsHideAppBar(false)
    //     }

    //     setScrollY(scrollYposition)
    // }}

    return(
        <SafeAreaView style={styles.container}>
            <FlatList  data={testData} renderItem={({item}: ListRenderItemInfo<CardProps>) => (
                <MyCard {...item} />
                )} 
            /> 
        </SafeAreaView>
    )
}

export default ListItems