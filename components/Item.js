import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";

const Item = ({route}) => {
    const image = route.params.img;
    return (
    <View style={styles.container}>
      <View style={styles.primary}>
      <Image source = {{uri: image}} style = {styles.image} />
      </View>
      {/* <Button title='Videos' onPress={() => navigation.navigate('Videos', { name: 'haider' })} /> 
            <Text>Hello</Text> */}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    primary: {
      display: "flex",
      height: 350,
      backgroundColor: "red",
    },
    list: {
      marginTop: 10,
      marginBottom: 10,
      height: "40%",
    },
    secondary: {},
    image: {
      width: "100%",
      height: "100%"
  }
  });

export default Item;