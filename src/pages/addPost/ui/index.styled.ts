import { StyleSheet } from "react-native";
import { appColor } from "../../../shared/theme/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: appColor.main,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'column',
    },
    urlBlock: {
        marginTop: '70%'
    },
    title: { color: '#FFF', marginLeft: 'auto' },
    iconBlock: { paddingRight: '50%', marginTop: 24 }
})
