import { StyleSheet, View } from 'react-native';
import { FormEndereco } from './src/screens/FormEndereco';

export default function App() {
  return (
    <View style={styles.container}>
      <FormEndereco />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
