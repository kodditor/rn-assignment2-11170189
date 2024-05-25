import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.boldName}>Kwabena Owusu-Darko</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    fontWeight: '300'
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#aaaaff'
  },
  boldName: {
    fontWeight: '800'
  }
});
