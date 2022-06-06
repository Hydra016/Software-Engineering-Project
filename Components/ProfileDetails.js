import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const ProfileDetails = ({ image, title, icon }) => {
    return (
        <TouchableOpacity style={styles.others}>
        <View style={styles.imgContainer}>
            <ImageBackground 
            style={styles.image} 
            source={{ uri:image }} >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            </View>
            </ImageBackground>
        </View>
        <View style={styles.detailesContainer}>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>{title}</Text>
            <MaterialIcons style={{ fontSize: 17 }} name={icon}/>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    others: {
        width: width / 1.5,
        height: height / 3,
        borderWidth: 1,
        borderColor: '#ebecf0',
        marginRight: 10,
        borderRadius: 20
      },
      imgContainer: {
        
      },
      image: {
          width: width/1.5,
          height: height/ 4.5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: 'hidden',
          resizeMode: 'contain'
      },
      detailesContainer: {
        padding: 10, 
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
      }
})

export default ProfileDetails;