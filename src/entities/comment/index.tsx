
import { View } from 'react-native'
import { Badge, Card, IconButton, Text } from 'react-native-paper'
import { styles } from './index.styled'
import { CommentProps } from './index.types'

const Comment = (props: CommentProps) => {
    const { text, title , likeUp , likeDown} = props

    return(
        <Card style={styles.container}>
            <Card.Title title />
            <Card.Content>
                <Text style={styles.title} variant="titleMedium">{title}</Text>
                <Text variant="labelMedium">{text}</Text>
            </Card.Content>
            <Card.Actions>
                <View>
                    <IconButton
                        icon='account-arrow-up'
                        mode='contained-tonal'
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    <Badge style={styles.badge} size={16}>{likeUp || 0}</Badge>
                </View>
                <View>
                    <IconButton
                        icon='account-arrow-down'
                        mode='contained-tonal'
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    <Badge style={styles.badge} size={16}>{likeDown || 0}</Badge>
                </View>
            </Card.Actions>
        </Card>
    )
}

export default Comment