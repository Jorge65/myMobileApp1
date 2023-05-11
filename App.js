import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>8My first ReactNative mobile app. Yeah!</Text>
      <Text>Tested environments:</Text>
      <Text>ok: Real device: iPadPro 11 - iPadOS 16.4.1</Text>
      <Text>ok: Real device: Samsung S21+ - Android v13 </Text>
      <Text>ok: Simulator/MacPro: ipadPro (Xcode v13.2.1) </Text>
      <Text>ok: Simulator/MacPro: Google Pixel 6 Pro (Android Studio 2022.2.1) </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
