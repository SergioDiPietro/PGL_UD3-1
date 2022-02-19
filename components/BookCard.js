import React from 'react'
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const BookCard = () => {
  return (
    <View style={styles.cardContainer}>
        
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
        height: 50,
        width: 300
    }
});
