import { StyleSheet,  View, Button } from 'react-native';
import Autorization from './src/pages/autorization/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Registration from './src/pages/registration/ui';
import { RootStackParamList } from './src/app/navigation';
import MainPage from './src/pages/main/ui';
import { Provider as PaperProvider } from 'react-native-paper';



{/* <Autorization /> */}


const TestPage = (props: any) => {
  const { navigation } = props

  return(
    <View style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
      <Button title='Авторизоваться' onPress={() => navigation.navigate('Autorization')} />
      <Button title='Остаться гостем' onPress={() => navigation.navigate('MainPage')}/>
    </View>
    )
}




export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <PaperProvider>
      <NavigationContainer>
          {/* <View>
            <AppBar /> */}
            {/* <MainPage /> */}
            <Stack.Navigator>
            <Stack.Screen 
                name='TestPage' 
                component={TestPage}
                options={{ title: 'Welcome' }}
              />
              <Stack.Screen 
                name='Autorization' 
                component={Autorization}
              />
              <Stack.Screen 
                name='Registration' 
                component={Registration}
              />
              <Stack.Screen 
                name='MainPage' 
                component={MainPage}
                options={{ header: () => null }}

              />
              {/* <MainPage /> */}
            </Stack.Navigator>
            
        {/* </View> */}
        </NavigationContainer>
      </PaperProvider>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

