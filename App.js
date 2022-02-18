import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import { Tab } from './components/Tab/Tab';
import Colors from "./constants/Colors";

export default function App() {
  const [color, setColor] = useState(Colors.coffee1);
  const styles = StyleSheet.create({
    screen: {
      width: "100%",
      height: "100%",
      justifyContent: 'flex-start',
      marginTop: 40
    }, 
    bookList: {
      backgroundColor: color,
      height: '100%',
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
      <View style={{flexDirection: 'row'}}>
        <Tab 
          toggleList={() => {handleShowList(true)}} 
          title="Libros leídos" 
          style={{backgroundColor: Colors.coffee1, width: '50%'}}
        />
        <Tab 
          toggleList={() => {handleShowList(false)}} 
          title="Libros a leer"
          style={{backgroundColor: Colors.coffee3, width: '50%'}}
        />
      </View>

      <View style={styles.bookList}>   
        
      </View>
    </View>
  );
};
