import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import ReadListButton from './components/ReadListButton/ReadListButton';
import ToReadListButton from './components/ToReadListButton/ToReadListButton';

export default function App() {
  const [showReadList, setShowReadList] = useState(true);
  

  return (
    <View style={styles.container}>
      <View style={styles.listButtons}>
        <ReadListButton toggleList={() => {setShowReadList(true); console.log('RLtn')}}></ReadListButton>
        <ToReadListButton toggleList={() => {setShowReadList(false); console.log('TRLbtn')}}></ToReadListButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginTop: 50
  },
  listButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
