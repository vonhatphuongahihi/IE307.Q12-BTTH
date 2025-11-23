import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// 22521172 - Vo Nhat Phuong

function HomeScreen({ navigation }) {
  const navigateToDetails = () => {
    const parent = navigation.getParent();
    if (parent) {
      parent.navigate('HomeDetails');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToDetails}
      >
        <Text style={styles.buttonText}>GO TO DETAILS</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

// 22521172 - Vo Nhat Phuong
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
