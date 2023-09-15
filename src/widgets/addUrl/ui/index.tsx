import { Formik } from "formik"
import { validationSchema } from "../config"
import { Button, HelperText, TextInput } from 'react-native-paper';
import { SafeAreaView, View } from 'react-native';
import { styles } from "./index.styled";
import { Props } from "./index.types"


const AddUrlPanel = (props: Props) => {
    const { navigation } = props
    return (
        <View >
            <Formik                
                initialValues={{  
                    url: ''
                }}
            onSubmit={(values) =>{ 
                console.log(values)
                //  navigation.navigate('MainPage')

            }}
            validationSchema={validationSchema}
            >
            {({ handleChange, handleSubmit, values, errors, handleReset }) => (
                <>
                    <TextInput
                        label="URL"
                        onChangeText={handleChange('url')}
                        value={values.url}
                        right={<TextInput.Icon onPress={() => handleReset()} icon="format-clear" />
                    }
                        error={!!errors.url}
                     />
                    <HelperText type="error" visible={!!errors.url}>
                        {errors.url}
                    </HelperText>
                     <Button 
                        style={styles.button}
                        mode="contained-tonal" 
                        icon='send' 
                        onPress={() => {
                         handleSubmit()
                         handleReset()
                        }}
                     >
                        ОТПРАВИТЬ
                    </Button>
                </>     

            )}
            </Formik>
        </View>

    )
}

export default AddUrlPanel