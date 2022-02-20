import { StyleSheet, View, StatusBar, Button, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { Tab } from './components/Tab';
import { AddBookModal } from "./components/AddBookModal";
import { EditBookModal } from './components/EditBookModal';
import { BookCard } from "./components/BookCard";
import Colors from "./constants/Colors";

export default function App() {
  const [color, setColor] = useState(Colors.coffee1);
  const [readBookList, setReadBookList] = useState([]);
  const [toReadList, setToReadList] = useState([]);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [showList, setshowList] = useState(true);
  const [bookItem, setBookItem] = useState({key:'', value: {title:'', pages:'', readPages:'', cover:''}});

  const addBookHandler = (book) => {
    if (book.title !== "" && book.cover !== "") {
      if (book.readPages > 0) {
        setReadBookList((currentRBList) => [...currentRBList, { key: Math.random().toString(), value: book }]);
      } else {
        setToReadList((currentToReadList) => [...currentToReadList, { key: Math.random().toString(), value: book }]);
      }
    }
  };

  const confirmDeleteAlert = (item) => {
    Alert.alert(
      "¿Eliminar libro '" + item.value.title + "'?", "",
      [
        { text: "Cancelar" },
        { text: "Confirmar", onPress: () => deleteBookHandler(item.key) }
      ]
    );
  }

  const deleteBookHandler = (key) => {
    if (showList) setReadBookList((readBookList) => readBookList.filter((book) => book.key !== key));
    else setToReadList((toReadList) => toReadList.filter((book) => book.key !== key));
  }

  const editBookHandler = (book, key) => {
    console.log('editando')
  }

  const styles = StyleSheet.create({
    screen: {
      width: "100%",
      height: "100%",
      alignItems: 'center',
      backgroundColor: Colors.coffee5,
      paddingTop: 10
    },
    bookList: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
      height: '85%',
      width: '100%',
      paddingTop: 20
    }
  });

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.coffee5} />
      <View style={{ flexDirection: 'row' }}>
        <Tab
          toggleList={() => { setshowList(true); setColor(Colors.coffee1) }}
          title="Libros leídos"
          style={{ backgroundColor: Colors.coffee1, width: '50%' }}
        />
        <Tab
          toggleList={() => { setshowList(false); setColor(Colors.coffee4) }}
          title="Libros a leer"
          style={{ backgroundColor: Colors.coffee4, width: '50%' }}
        />
      </View>

      <View style={styles.bookList}>
        {showList ?
          <FlatList data={readBookList} renderItem={itemList => (
            <BookCard
              value={itemList.item.value}
              deleteBook={() => confirmDeleteAlert(itemList.item)}
              editBook={() => {setBookItem(itemList.item); setEditModalVisible(true)}}
            />
          )} /> :
          <FlatList data={toReadList} renderItem={itemList => (
            <BookCard
              value={itemList.item.value}
              deleteBook={() => confirmDeleteAlert(itemList.item)}
              editBook={() => {setBookItem(itemList.item); setEditModalVisible(true)}}
            />
          )} />}
      </View>

      <View style={{ width: 150, marginTop: 15 }}>
        <Button title={'Agregar libro'} color={Colors.coffee2} onPress={() => setAddModalVisible(true)} />
      </View>

      <AddBookModal
        onAddBookHandler={addBookHandler}
        addModalVisible={addModalVisible}
        setAddModalVisible={setAddModalVisible}
      />

      <EditBookModal
        bookItem={bookItem}
        onEditBookHandler={editBookHandler}
        editModalVisible={editModalVisible}
        setEditModalVisible={setEditModalVisible}
      />
    </View>
  );
};
