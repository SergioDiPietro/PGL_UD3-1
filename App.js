import { StyleSheet, View, StatusBar, Button } from 'react-native';
import { useState } from 'react';
import { Tab } from './components/Tab';
import { AddBookModal } from "./components/AddBookModal";
import Colors from "./constants/Colors";

export default function App() {
  const [color, setColor] = useState(Colors.coffee1);
  const [readBookList, setReadBookList] = useState([]);
  const [toReadList, setToReadList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowList = (showReadList) => {
    if (showReadList) setColor(Colors.coffee1);
    else setColor(Colors.coffee3);

    //Mostrar lista
  };

  const addBookHandler = (book) => {
    if (book.title !== "" && book.cover !== "") {
      if (book.readPages > 0) {
        setReadBookList((currentRBList) => [...currentRBList, {key: Math.random().toString(), value: book}]);
        console.log('>> Añadido a libros leídos:', book.title, '(', book.pages, 'pags)\n');
      } else {
        setToReadList((currentToReadList) => [...currentToReadList, {key: Math.random().toString(), value: book}]);
        console.log('>> Añadido a libros para leer:', book.title, '(', book.pages, 'pags)\n');
      }
    }
  };

  const styles = StyleSheet.create({
    screen: {
      width: "100%",
      height: "100%",
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: Colors.coffee5,
      paddingTop: 10
    },
    bookList: {
      backgroundColor: color,
      height: '85%',
      width: '100%'
    }
  });

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.coffee5} />
      <View style={{ flexDirection: 'row' }}>
        <Tab
          toggleList={() => { handleShowList(true) }}
          title="Libros leídos"
          style={{ backgroundColor: Colors.coffee1, width: '50%' }}
        />
        <Tab
          toggleList={() => { handleShowList(false) }}
          title="Libros a leer"
          style={{ backgroundColor: Colors.coffee3, width: '50%' }}
        />
      </View>

      <View style={styles.bookList}></View>

      <View style={{ width: 150, marginTop: 15 }}>
        <Button title={'Agregar libro'} color={Colors.coffee2} onPress={() => setModalVisible(true)} />
      </View>

      <AddBookModal onAddBookHandler={addBookHandler} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};
