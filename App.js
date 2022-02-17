import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    margin: 10,
    marginTop: 50
  }
});
