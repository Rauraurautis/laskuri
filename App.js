import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, FlatList } from 'react-native';


export default function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [result, setResult] = useState(0)
  const [data, setData] = useState([]);

  const calculate = (operator) => {
    switch (operator) {
      case "+":
        let plusResult = Number(firstNum) + Number(secondNum)
        console.log(plusResult)
        setResult(plusResult)
        setData(data.concat({ calculation: `${firstNum} ${operator} ${secondNum} = ${plusResult}` }))
        break;
      case "-":
        let minusResult = Number(firstNum) - Number(secondNum)
        setResult(minusResult)
        setData(data.concat({ calculation: `${firstNum} ${operator} ${secondNum} = ${minusResult}` }))
        break;
    }
  }


  return (

    <View style={styles.container}>
      <Text style={styles.result}>{result ? `Result: ${result}` : ""}</Text>
      <TextInput style={styles.numberinput} keyboardType={"numeric"} onChangeText={text => setFirstNum(text)} />
      <TextInput style={styles.numberinput} keyboardType={"numeric"} onChangeText={text => setSecondNum(text)} />
      <View style={styles.buttoncontainer}>
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
      </View>
      <Text>History</Text>
      <FlatList style={styles.flatliststyle} data={data}
        renderItem={({ item }) => <Text>{item.calculation}</Text>}
        keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  numberinput: {
    width: 250,
    borderColor: "gray",
    borderWidth: 1
  },
  result: {
    marginTop: 50
  },
  buttoncontainer: {
    marginTop: 10,
    width: 75,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  flatliststyle: {
    height: 100,
    paddingTop: 5
  }

});
