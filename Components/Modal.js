import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Modal, Button, Dimensions, Animated } from 'react-native';

const { height, width } = Dimensions.get("window");

const SignOutModal = ({ visible, children }) => {
    const [ showModal, setShowModal ] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current

    useEffect(() => {
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if(visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start()
        } else {
            setTimeout(() => setShowModal(false), 200)
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    }

    console.log(showModal)
    console.log(visible)
    return (
        <Modal 
        transparent
        visible={showModal}
        >
            <View style={styles.signOut}>
        <Animated.View style={[styles.modalContainer,{ transform: [{ scale: scaleValue }]}]}>
            {children}
        </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    signOut: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: '80%',
        height: 100,
        backgroundColor: '#FFF',
        padding: 20,
        elevation: 20,
        borderRadius: 20
    },
})

export default SignOutModal;