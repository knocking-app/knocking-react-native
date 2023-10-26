import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 300,
        paddingTop: 100,
    },
    button: {
        marginBottom: 16,
        marginTop: 10
    },
    navRegistration: {
        textDecorationLine: 'underline',
        textAlign: 'center'
    },
    iconWrapper: {
        position: 'absolute',
        bottom: 200,
        left: 120
    }
  })