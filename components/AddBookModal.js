import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

export const AddBookModal = ({onAddBookHandler, setModalVisible, modalVisible}) => {
    const [title, setTitle] = useState("");
    const [pages, setPages] = useState(0);
    const [readPages, setReadPages] = useState(0);
    const [cover, setCover] = useState("");

    const bookTitleHandler = (text) => {
        setTitle(text);
    };

    const bookPagesHandler = (number) => {
        setPages(number);
    };

    const bookReadPagesHandler = (number) => {
        setReadPages(number);
    };

    const bookCoverHandler = (url) => {
        setCover(url);
    };

    const validateBook = () => {
        onAddBookHandler({title, pages, readPages, cover});
        setTitle("");
        setPages(0);
        setReadPages(0);
        setCover("");
        setModalVisible(false);
    };

    return (
        <View style={styles.centeredView}>
            <Modal visible={modalVisible} animationType={"fade"}>
                <TextInput
                    placeholder="Título del libro"
                    value={title}
                    onChangeText={bookTitleHandler}
                />
                <TextInput
                    placeholder="Páginas"
                    value={pages.toString()}
                    keyboardType={'number-pad'}
                    onChangeText={bookPagesHandler}
                />
                <TextInput
                    placeholder="Páginas leídas"
                    value={readPages.toString()}
                    keyboardType={'number-pad'}
                    onChangeText={bookReadPagesHandler}
                />
                <TextInput
                    placeholder="Portada (URL de imagen)"
                    value={cover}
                    onChangeText={bookCoverHandler}
                />
                <Button
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
