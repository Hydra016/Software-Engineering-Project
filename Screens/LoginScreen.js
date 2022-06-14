import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation, route }) => {
    const hideBottomTab = () => {
        navigation.setOptions({
            tabBarVisible: false
        })
    }
    
    useEffect(() => {
        hideBottomTab();
    })
    // const { route } = useNavigation()
    // console.log(`route state: ${route}`)
    


    // if(route.state === undefined) {
    //     navigation.setOptions({
    //         tabBarVisible: false
    //     })
    // }

    return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})