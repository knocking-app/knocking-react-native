import { StyleSheet } from 'react-native';
import { appColor } from '../../../shared/theme/color';


export const styles = StyleSheet.create({
    appBarContainer: {
        display: 'flex',
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        height: 100,
        borderWidth: 1,
        width: '100%',
        backgroundColor: appColor.main,
    },
    // hide: {
    //     marginBottom: -100
    // }
})
