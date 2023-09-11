import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { styles } from './index.styled';
import { useState } from 'react';
import IconBird from '../../../shared/icons/birdIcon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation';
import { Formik } from 'formik';
import { validationSchema } from '../config';

type Props = NativeStackScreenProps<RootStackParamList, 'Registration'>;


const Registration = (props: Props) => {
    const { navigation } = props
    const [isShowPassword, setIsShowPassword] = useState(true)

    return(
        <View style={styles.container}>
            <Formik  
                initialValues={{  
                    login: '',
                    password: '',
                    email: ''
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
                                onChangeText={handleChange('email')}
                                label="email"
                                value={values.email}
                                placeholder="Введите email"
                                style={{ marginBottom: 20 }}
                                error={!!errors.email}
                            />
                            <HelperText type="error" visible={!!errors.email}>
                                {errors.email}
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
                                right={<TextInput.Icon onPress={() => setIsShowPassword((prev) => !prev)} icon="eye" />}
                                style={{ marginBottom: 8 }}
                                error={!!errors.password}
                            /> 
                            <HelperText type="error" visible={!!errors.password}>
                                {errors.password}
                            </HelperText> 
                        </View>
                    </View>
                    <View>
                        <Button onPress={() => {
                                    handleSubmit()
                                    handleReset()
                                }
                            } 
                            style={styles.button} 
                            icon="" 
                            loading={false} 
                            mode="contained-tonal"
                        >
                            Зарегестрироваться
                        </Button>
                        <Text style={styles.navAutorization} onPress={() => navigation.navigate('Autorization', {})} variant="labelSmall">Авторизоваться</Text>
                    </View>
                </View>        
                )}
            </Formik>
            <IconBird />
        </View> 
        )
}

export default Registration