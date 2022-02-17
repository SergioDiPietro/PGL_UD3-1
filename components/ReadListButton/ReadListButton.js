import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const ReadListButton = ({ toggleList }) => {
    return (
        <TouchableHighlight onPress={toggleList}>
            <View style={styles.readListBtn}>
                <Text style={styles.rlbText}>{"Libros leídos"}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    readListBtn: {
        height: 50,
        width: 195,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
    },
    rlbText: {
        color: "white",
        fontSize: 18
    },
});

export default ReadListButton;