import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Container } from "../Components/Container";
import PhonesContext from "../context/PhonesContext";
import ItemList from "../Components/ItemList";

const { width, height } = Dimensions.get("window");

const ItemScreen = ({ route }) => {
  const { data } = useContext(PhonesContext);
  const id = route.params.id;
  const item = data.find((item) => item.id === id);

  const { mainImg, img1, img2, img3 } = item;

  const ImgArr = [mainImg, img1, img2, img3];

  if (data) {
    return (
      <Container>
        <View style={styles.carousel}>
          <FlatList
            data={ImgArr}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.imgContainer}>
                  <Image style={styles.image} source={{ uri: item }} />
                </View>
              );
            }}
          />
        </View>
        <ItemList item={item} />
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  carousel: {
    height: height / 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  imgContainer: {
    padding: 10,
    flex: 1,
    width: width - 20,
    height: height / 2.2,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  detailesContainer: {
    padding: 10,
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    marginBottom: 10
  },
  iconContainer: {
    display: 'flex',
    flexDirection: "row",
  },
  ItemListContainer: {
    height: (width / 2) - 70
  },
});

export default ItemScreen;
