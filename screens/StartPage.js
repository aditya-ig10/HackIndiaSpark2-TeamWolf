import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supply Chain Traceability</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
      <Button
        title="Markets"
        onPress={() => navigation.navigate('StockTracking')}
      />
      <Button
        title="Track Product"
        onPress={() => navigation.navigate('ProductTracking')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});