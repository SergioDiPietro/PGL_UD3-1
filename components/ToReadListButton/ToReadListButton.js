import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const ToReadListButton = ({ toggleList }) => {
    return (
        <TouchableHighlight onPress={toggleList}>
            <View style={styles.toReadListBtn}>
                <Text style={styles.trlbText}>Libros a leer</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    toReadListBtn: {
        height: 50,
        width: 195,
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
    },
    trlbText: {
        color: "white",
        fontSize: 18
    },
});

export default ToReadListButton;