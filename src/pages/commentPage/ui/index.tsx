import { useState } from "react"
import { View, FlatList, ListRenderItemInfo } from "react-native"
import Comment from "../../../entities/comment"
import { CommentProps } from "../../../entities/comment/index.types"
import { styles } from "./index.styled"

const CommentPage = () => {
    const [data, setData] = useState([
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
        {  text: 'test text', title: 'test title', likeUp: 1, likeDown: 1 },
    ])

    return(
        <View style={styles.container}>
            <FlatList {...{data}} renderItem={({item}: ListRenderItemInfo<CommentProps>) =>  <Comment {...item} />} />
        </View>
    )
}

export default CommentPage