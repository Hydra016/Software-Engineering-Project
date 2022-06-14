import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react';
import SplashAnimation from '../Components/SplashAnimation';

const { height, width } = Dimensions.get("window");

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF'}}>E-Mobile Store</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Phone Heaven for Phone Lovers</Text>
      </View>
      <SplashAnimation />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF6E00',
        height: height,
        alignItems: 'center',
        // justifyContent: "center"
    },
    innerContainer: {
      alignItems: 'center',
      justifyContent: "center",
      marginTop: 100
    }
})