import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Text } from "react-native";
import Colors from "../constants/Colors";

export const AddBookModal = ({ onAddBookHandler, setAddModalVisible, addModalVisible }) => {
    const [title, setTitle] = useState("");
    const [pages, setPages] = useState("");
    const [readPages, setReadPages] = useState("");
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

    const bookCoverHandler = (text) => {
        setCover(text);
    };

    const resetAndCloseModal = () => {
        setTitle("");
        setPages("");
        setReadPages("");
        setCover("");
        setAddModalVisible(false);
    }

    const validateBook = () => {
        onAddBookHandler({ title, pages: parseInt(pages), readPages: parseInt(readPages), cover });
        resetAndCloseModal();
    };

    return (
        <Modal visible={addModalVisible} animationType={'slide'} transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Agregar libro</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Título del libro"
                        value={title}
                        onChangeText={bookTitleHandler}
                        maxLength={30}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Páginas"
                        value={pages.toString()}
                        keyboardType={'numeric'}
                        onChangeText={bookPagesHandler}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Páginas leídas"
                        value={readPages.toString()}
                        keyboardType={'numeric'}
                        onChangeText={bookReadPagesHandler}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Portada (URL de imagen)"
                        value={cover}
                        onChangeText={bookCoverHandler}
                    />

                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Cancelar"
                                color={Colors.coffee5}
                                onPress={resetAndCloseModal}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Añadir"
                                color={Colors.coffee4}
                                onPress={validateBook}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        marginVertical: '50%',
        marginHorizontal: '10%',
        backgroundColor: Colors.coffee2,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: Colors.coffee1,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.coffee4
    },
    input: {
        width: 200,
        margin: 5,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: Colors.coffee3
    },
    buttonsContainer: {
        width:'100%',
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        width: 100,
        marginHorizontal: 10,
        marginTop: 10,
    }
});
