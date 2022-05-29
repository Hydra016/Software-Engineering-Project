import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet, Image } from 'react-native';

const Items = ({ title, price, supplier, maker, img }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{width: "100%", height: "100%"}} source={{uri:img}} />
            </View>
            <View>
                <Text>{title}</Text>
                <Text>{price}</Text>
                <Text>{supplier}</Text>
                <Text>{maker}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      display: "flex",
      flexDirection: "row"
    },
    primary: {
      display: "flex",
      height: "70%",
      backgroundColor: "red",
    },
    list: {
      marginTop: 5,
    },
    secondary: {},
    image: {
        marginRight: 20,
        // borderWidth: 1,
        // borderColor: "black",
        width: 150,
        height: 150
    }
  });
  

export default Items;