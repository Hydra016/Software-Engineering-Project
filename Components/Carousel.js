import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from "react-native";
import CarouselItem from "./CarouselItem";
import PhonesContext from "../context/PhonesContext";

const { width, height } = Dimensions.get("window");
let flatList;

    function infiniteScroll(dataList, mySlide) {
        const numberOfData = dataList.length
        let scrollValue = 0, scrolled = 0
    
       
            scrolled++
            if (scrolled < numberOfData)
                scrollValue = scrollValue + width
    
            else {
                scrollValue = 0
                scrolled = 0
            }
            if (mySlide.current) {
                mySlide.current.scrollToOffset({
                    animated: true,
                    offset: scrollValue,
                });
            }
    
        
    }

const Carousel = () => {
    const mySlide = useRef();
    const { data } = useContext(PhonesContext);
    console.log(data)
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width)
    const [ dataList, setDataList ] = useState(data)

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList, mySlide)
    })

    if (data && data.length) {
        return (
            <View>
                <FlatList
                ref={mySlide}
                data={data}
                keyExtractor= {(item) => item.id}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem = {({item}) => {
                    return (
                        <CarouselItem item={item} />
                    )
                }}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i-1, i, i+1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View 
                                key={i}
                                style={{opacity, height: 10, width: 10, background: "#595959", margin: 8, borderRadius: 5}}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }
    console.log('please provide images')
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flexDirection: "row",
        justifyContent: "center",
    }
})

export default Carousel;
