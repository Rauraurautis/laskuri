import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Calculator({ navigation }) {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [result, setResult] = useState(0)
  const [data, setData] = useState([]);

  const calculate = (operator) => {
    switch (operator) {
      case "+":
        let plusResult = Number(firstNum) + Number(secondNum)
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
      <Text style={styles.result}>{(result >= 0 || result < 0) ? `Result: ${result}` : ""}</Text>
      <TextInput style={styles.numberinput} keyboardType={"numeric"} onChangeText={text => setFirstNum(text)} />
      <TextInput style={styles.numberinput} keyboardType={"numeric"} onChangeText={text => setSecondNum(text)} />
      <View style={styles.buttoncontainer}>
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
        <Button title="History" onPress={() => navigation.navigate("History", { history: data })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbecff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  numberinput: {
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#fff"
  },
  result: {
    marginTop: 50
  },
  buttoncontainer: {
    marginTop: 10,
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  flatliststyle: {
    height: 100,
    paddingTop: 5
  }

});
