import React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native"
export default function HistoryScreen({ route }) {

    const { history } = route.params;

    return (
        <View style={styles.historycontainer} >
            <Text>History</Text>
            <FlatList style={styles.flatliststyle} data={history}
                renderItem={({ item }) => <Text>{item.calculation}</Text>}
                keyExtractor={(item, index) => index.toString()} />
        </View >)
}

const styles = StyleSheet.create({
    historycontainer: {
        backgroundColor: '#dbecff',
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        fontSize: 20
    },
    flatliststyle: {
        height: 100,
        paddingTop: 5
    }
})
