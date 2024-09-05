import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
