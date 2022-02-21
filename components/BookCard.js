import { useState } from 'react';
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { EditBookModal } from './EditBookModal';
import Colors from "../constants/Colors";

export const BookCard = ({ bookItem, deleteBook, editBookHandler}) => {
    const [editModalVisible, setEditModalVisible] = useState(false);

    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={styles.coverImage}>
                    <Image source={{ uri: bookItem.value.cover }}/>
                </View>
                <View style={styles.cardRightSide}>
                    <View style={styles.bookInfoContainer}>
                        <Text style={styles.bookTitle}>"{bookItem.value.title}"</Text>
                        <Text style={styles.bookInfo}>• Páginas: {bookItem.value.pages}</Text>
                        <Text style={styles.bookInfo}>• Total leído: {Math.ceil((bookItem.value.readPages / bookItem.value.pages) * 100)}%</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Eliminar"
                                color={Colors.coffee4}
                                onPress={deleteBook}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Editar"
                                color={Colors.coffee4}
                                onPress={() => {setEditModalVisible(true)}}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <EditBookModal
                bookItem={bookItem}
                onEditBookHandler={editBookHandler}
                editModalVisible={editModalVisible}
                setEditModalVisible={setEditModalVisible}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.coffee2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.coffee5,

        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        height: 200,
        width: 350
    },
    coverImage: {
        height: '100%',
        width: '100%',
        flex: 2,
        marginRight: 10,
        backgroundColor: Colors.coffee5
    },
    cardRightSide: {
        flex: 3
    },
    bookInfoContainer: {
        alignContent: 'center',
        flex: 8
    },
    bookTitle: {
        flexWrap: 'wrap',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.coffee5,
        backgroundColor: Colors.coffee3,
        padding: 5,
        borderRadius: 10
    },
    bookInfo: {
        marginLeft: 5,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.coffee4
    },
    buttonsContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: 90,
        height: 40,
    }
});
