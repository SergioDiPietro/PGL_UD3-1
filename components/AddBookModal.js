import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

export const AddBookModal = ({setModalVisible, modalVisible}) => {
    const [bookName, setBookName] = useState("");
    const [bookPages, setBookPages] = useState(0);

    const validateBook = () => {
        setBookName("");
        setBookPages(0);
        setModalVisible(false);
    };

    return (
        <View style={styles.centeredView}>
            <Modal visible={modalVisible} animationType={"fade"}>
                <TextInput
                    //style={styles.bookNameInput}
                    placeholder="Nombre del libro"
                    value={bookName}
                    //onChangeText={bookNameHandler}
                />
                <TextInput
                    //style={styles.bookInput}
                    placeholder="Pages"
                    value={bookPages}
                    //onChangeText={bookPagesHandler}
                />
                <Button
                    //style={styles.}
                    onPress={validateBook}
                    title="Añadir"
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
});
