import React from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions, TouchableOpacity } from "react-native";
import { Container } from "../Components/Container";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
        <View style={styles.container}>
          <View>
          <View style={styles.imgContainer}>
          <Image style={styles.img} source={require("../assets/user-1.jpg")} />
          </View>
          <View style={{marginTop: 50}}>
          <View style={styles.textContainer}>
          <Ionicons style={styles.icon} name='person-outline' />
          <Text style={styles.text}>Kurtis Weissnat</Text>
          </View>  
          <View style={styles.textContainer}>
          <Ionicons style={styles.icon} name='location-outline' />
          <Text style={styles.text}>Riga, Latvia</Text>
          </View>       
          <View style={styles.textContainer}>
          <Ionicons style={styles.icon} name='mail-outline' />
          <Text style={styles.text}>Kurtis.Weissnat@gmail.com</Text>
          </View> 
          <View style={styles.textContainer}>
          <Ionicons style={styles.icon} name='phone-portrait' />
          <Text style={styles.text}>+371-12345678</Text>
          </View> 
          </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
            <Text style={{color:'#000'}}>Settings</Text>
            <MaterialIcons style={styles.buttonIcon} name='settings' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={{color:'#000'}}>Logout</Text>
            <MaterialIcons style={styles.buttonIcon} name='logout' />
            </TouchableOpacity>
          </View>
        </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    justifyContent: "space-between",
    height: height - 100
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center'
  }, 
  img: {
    width: 150,
    height: 150,
    borderRadius: 500,
    elevation: 10
  },
  text: {
    fontSize: 20,
    color: '#fff'
  },
  icon: {
    fontSize: 20,
    marginRight: 5,
    color: '#fff'
  },
  textContainer: {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: "space-between"
  },
  button: {
    width: width / 3,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  buttonIcon: {
    fontSize: 20,
    color: '#000'
  }
});

export default ProfileScreen;
