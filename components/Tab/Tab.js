import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import Colors from '../../constants/Colors';

export const Tab = ({ toggleList, title, style }) => {
    return (
        <TouchableHighlight onPress={toggleList} style={{...styles.button, ...style}} underlayColor={Colors.coffee2}>
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold'
    },
});