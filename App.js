import { StyleSheet, View, StatusBar, Button } from 'react-native';
import { useState } from 'react';
import { Tab } from './components/Tab';
import { AddBookModal } from "./components/AddBookModal";
import Colors from "./constants/Colors";

export default function App() {
  const [color, setColor] = useState(Colors.coffee1);
  const [bookList, setBookList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleShowList = (showReadList) => {
    if (showReadList) setColor(Colors.coffee1);
    else setColor(Colors.coffee3);

    //Mostrar lista
  };

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

      <AddBookModal onAddBookHandler={() => console.log('agregado')} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};
