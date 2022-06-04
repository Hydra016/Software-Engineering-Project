import React, { useContext, useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from "react-native";
import CarouselItem from "./CarouselItem";

const { width, height } = Dimensions.get("window");
let flatList;

    function infiniteScroll(dataList, mySlide) {
        const numberOfData = dataList.length
        let scrollValue = 0, scrolled = 0
    
        setInterval(function () {
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
    
        }, 6000)
    }

const Carousel = ({ data }) => {
    const mySlide = useRef();
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
            </View>
        )
    }
    console.log('please provide images')
    return null
}

export default Carousel;
