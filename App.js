import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';


export default function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [result, setResult] = useState(null)


  return (

    <View style={styles.container}>
      <Text>{result ? `Result: ${result}` : ""}</Text>
      <TextInput style={styles.numberinput} keyboardType={"numeric"} onChangeText={text => setFirstNum(text)} />
      <TextInput style={styles.numberinput} keyboardType={"numeric"} onChangeText={text => setSecondNum(text)} />
      <View style={styles.buttoncontainer}>
        <Button title="+" onPress={() => setResult(Number(firstNum) + Number(secondNum))} />
        <Button title="-" onPress={() => setResult(firstNum - secondNum)} />
      </View>
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
  numberinput: {
    width: 250,
    borderColor: "gray",
    borderWidth: 1
  },
  buttoncontainer: {
    marginTop: 10,
    width: 75,
    flexDirection: "row",
    justifyContent: "space-between"
  }

});
