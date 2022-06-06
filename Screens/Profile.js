import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Container } from "../Components/Container";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Context } from "../context/PhonesContext";
import Footer from "../Components/Footer";
import ProfileDetails from "../Components/ProfileDetails";
import List from "../Components/List";
import TopBar from "../Components/TopBar";
import Modal from "../Components/Modal";

const { height, width } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Modal visible={visible}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15 }}>
            Are you sure you want to sign out?
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={[styles.ModalButtons, { backgroundColor: "#FF6E00" }]}
          >
            <Text style={{ color: "#FFF" }}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ModalButtons}
            onPress={() => setVisible(false)}
          >
            <Text>No</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.backContainer}>
          <View style={styles.imageWrapperFirst}>
            <View style={styles.imageWrapper}>
              <Image
                style={[styles.image, styles.shadow]}
                source={require("../assets/user-1.jpg")}
              />
            </View>
          </View>
        </View>
        <View style={styles.detailesContainer}>
          <View style={styles.info}>
            <Text style={styles.text}>Kurtis Weissnat </Text>
          </View>
          <View style={styles.info}>
            <MaterialIcons style={styles.icon} name="location-on" />
            <Text style={styles.Subtext}>Riga, Latvia </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            marginTop: 50,
          }}
        >
          <Text style={styles.text}>Details</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#a9a9a9",
                fontSize: 12,
                textDecorationLine: "underline",
              }}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ padding: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <ProfileDetails
            image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="Previous Orders"
            icon="shopping-bag"
          />
          <ProfileDetails
            image="https://images.unsplash.com/photo-1594392175511-30eca83d51c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="Returned Items"
            icon="assignment-return"
          />
          <ProfileDetails
            image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="Offers For You"
            icon="receipt"
          />
          <ProfileDetails
            image="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="Complaints"
            icon="thumb-down"
          />
        </ScrollView>
        <View style={{ padding: 20, marginTop: 20 }}>
          <List
            state={state}
            heading="Start Shopping"
            name="pricetags-outline"
          />
        </View>
        <View style={styles.signOutContainer}>
          <TouchableOpacity
            style={styles.signOut}
            onPress={() => setVisible(true)}
          >
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: "#FF6E00",
    height: height / 7,
    // borderBottomEndRadius: 20,
    // borderBottomLeftRadius: 20
  },
  imageWrapperFirst: {
    position: "absolute",
    top: 30,
    left: 115,
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 500,
  },
  imageWrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 500,
  },
  image: {
    borderRadius: 500,
  },
  detailesContainer: {
    marginTop: 70,
    padding: 10,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 15,
    marginRight: 1,
    color: "#AFADA9",
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
  },
  Subtext: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#AFADA9",
  },
  signOutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signOut: {
    borderWidth: 1,
    borderColor: "#ebecf0",
    width: 300,
    height: 50,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ModalButtons: {
    borderWidth: 1,
    borderColor: "#ebecf0",
    borderRadius: 20,
    width: "30%",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});

export default ProfileScreen;
