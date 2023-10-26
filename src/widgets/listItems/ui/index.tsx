import { FlatList, ListRenderItemInfo } from "react-native"
import { styles } from "./index.styled"
import MyCard from '../../../entities/card/index'
import { SafeAreaView } from "react-native-safe-area-context"
import { CardProps } from "../../../entities/card/ui/index.types"


const ListItems = () => {
    const testData = [
        {title: 'test', description: 'test', url: 'test url' },
        {title: 'test1', description: 'test', url: 'test url' },
        {title: 'test2', description: 'test', url: 'test url' },
        {title: 'test3', description: 'test', url: 'test url' },
        {title: 'test4', description: 'test', url: 'test url' },
        {title: 'test5', description: 'test', url: 'test url' },
        {title: 'test6', description: 'test', url: 'test url' },

    ]
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