import React from 'react'
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Button title='Videos' onPress={() => navigation.navigate('Videos', { name: 'haider' })} /> 
            <Text>Hello</Text>
        </View>
    )
}

export default Home;