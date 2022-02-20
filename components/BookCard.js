import React from 'react'
import { View, StyleSheet, Text, Image } from "react-native";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Colors from "../constants/Colors";

export const BookCard = ({ value }) => {
    return (
        <View style={styles.cardContainer}>
            <View>
                <Image
                    style={styles.coverImage}
                    source={{ uri: value.cover }}
                />
            </View>
            <View style={styles.bookInfoContainer}>
                <Text style={styles.bookTitle}>"{value.title}"</Text>
                <Text style={styles.bookInfo}>• Páginas: {value.pages}</Text>
                <Text style={styles.bookInfo}>• Total leído: {Math.ceil((value.readPages / value.pages) * 100)}%</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: Colors.coffee2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.coffee5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

        marginTop: 20,
        alignItems: "center",
        flexDirection: 'row',
        height: 200,
        width: 350
    },
    coverImage: {
        margin: 10,
        width: 120,
        height: 180,
    },
    bookInfoContainer: {
        alignContent: 'center',
        width: 195,
        height: 180
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
    }
});
