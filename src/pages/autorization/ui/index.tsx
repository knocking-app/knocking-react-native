import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { styles } from './index.styled';
import { useState } from 'react';
import IconBird from '../../../shared/icons/birdIcon';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation';
import { Formik } from 'formik';
import { validationSchema } from '../config';


type Props = NativeStackScreenProps<RootStackParamList, 'Autorization'>;

const Autorization = (props: Props) => {
    const { navigation } = props
    const [creds, setCreds] = useState({
        login: '',
        password: ''
    })
    const [isShowPassword, setIsShowPassword] = useState(true)

    return(
        <View style={styles.container}>
            <Formik
                initialValues={{  
                    login: '',
                    password: '' 
                }}
                onSubmit={(values) =>{ 
                    console.log(values)
                }}
                validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, values, errors, handleReset }) => (
                            <View>
                                <View>
                                    <View>
                                        <TextInput
                                            mode="outlined"
                                            onChangeText={handleChange('login')}
                                            label="Логин"
                                            value={values.login}
                                            placeholder="Введите логин"
                                            style={{ marginBottom: 20 }}
                                            error={!!errors.login}
                                        />
                                        <HelperText type="error" visible={!!errors.login}>
                                            {errors.login}
                                        </HelperText>
                                    </View>
                                    <View>
                                        <TextInput       
                                            mode="outlined"
                                            onChangeText={handleChange('password')}
                                            label="Пароль"
                                            value={values.password}
                                            placeholder="Введите пароль"
                                            secureTextEntry={isShowPassword}
                                            error={!!errors.password}
                                            right={<TextInput.Icon onPress={() => setIsShowPassword((prev) => !prev)} icon="eye" />}
                                            style={{ marginBottom: 8 }}
                                        />
                                        <HelperText type="error" visible={!!errors.password}>
                                            {errors.password}
                                        </HelperText>
                                    </View>
                                    <View>
                                    <Button style={styles.button} icon="" loading={false} mode="contained-tonal" onPress={() => {
                                        handleSubmit()
                                        handleReset()
                                    }}>
                                        Авторизоваться
                                    </Button>
                                    <Text style={styles.navRegistration} onPress={() => { 
                                        navigation.navigate('Registration', {})
                                    }} variant="labelSmall">
                                        Зарегестрироваться
                                    </Text> 
                                </View>
                                </View>
                            </View>
                        )}
                </Formik>
                <IconBird />
        </View> 
    )
}

export default Autorization