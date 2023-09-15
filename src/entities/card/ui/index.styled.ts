import { StyleSheet } from "react-native";
import { appColor } from "../../../shared/theme/color";

export const styles = StyleSheet.create({
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    badge: {
        backgroundColor: appColor.main
    }
})
