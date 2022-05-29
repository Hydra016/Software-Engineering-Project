import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import PhonesContext from "../context/PhonesContext";

const List = () => {
    const { data } = useContext(PhonesContext);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri:item.mainImg}} />
                <View style={styles.details}>
                <Text>{item.title}</Text>
                <Text>{item.memory}</Text>
                <Text>{item.storage}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    return (
            <ScrollView>
            <Text>Hotest Deals</Text>
            <FlatList 
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={renderItem}
            />
           <View style={styles.extra}>
           </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        padding: 20,
        backgroundColor: '#ffffff',
        elevation: 2,
        borderRadius: 10 
    },  
    img: {
        width: 70,
        height: 70
    },
    extra: {
        height: 65
    },
    details: {
        width:130
    }
})

export default List;
