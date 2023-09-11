import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Card, Chip, IconButton, Text, MD3Colors, Tooltip, Badge } from 'react-native-paper';
import { CardProps } from './index.types';
import { styles } from './index.styled';

const MyCard = (props: CardProps) => {
 const { title, description, url} = props
  return (
        <Card style={{ width: '100%', marginBottom: 8, marginTop:16 }}>
            <Card.Cover
                loadingIndicatorSource={{uri: '../../shared/icons/birdIcon/ui/statics/logoBird.svg'}}
                source={{ uri: 'https://kartinki.pics/uploads/posts/2022-03/1647064522_2-kartinkin-net-p-krasivie-kartinki-ptits-2.jpg' }} 
                resizeMode={'cover'}
            />
            <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">
                            Card content Card content Card content Card content Card content Card content
                            Card content Card content Card content Card content
                            Card content Card content Card content Card contentCard content Card content Card content Card content
                            
            </Text>
            </Card.Content>
            {/* <View style={styles.buttonGroup}> */}
            <Card.Actions>
                <View>
                    <IconButton
                        icon='account-arrow-up'
                        mode='contained-tonal'
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    <Badge style={styles.badge} size={16}>0</Badge>
                </View>
                <View>
                    <IconButton
                            icon='account-arrow-down'
                            mode='contained-tonal'
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                    <Badge style={styles.badge} size={16}>0</Badge>
                </View>
                <View>
                    <IconButton
                            icon='comment-outline'
                            mode='contained-tonal'
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                    <Badge style={styles.badge} size={16}>0</Badge>
                </View>

                </Card.Actions>
            {/* </View> */}
        </Card>
  )
}


export default MyCard;