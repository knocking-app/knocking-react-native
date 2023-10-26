import type { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialBottomTabNavigationProp } from 'react-native-paper';
import { RootStackParamList } from '../../../app/navigation'



export type ProfileScreenNavigationProp = CompositeNavigationProp<MaterialBottomTabNavigationProp<RootStackParamList, 'CommentPage'>,
NativeStackNavigationProp<RootStackParamList>>
export interface CardProps { 
    title: string;
    description: string;
    url: string
    image?: Blob
}