import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

const ToggleSwitch = ({ title }) => {
    const [ checked, setChecked ] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 15 }}>{title}</Text>
            <Switch
            value={checked}
            onValueChange={() => setChecked(!checked)}
            thumbColor={ checked ? '#FF6E00' : '#AFADA9' }
            trackColor={{ true: '#FF6E00', false: '#AFADA9' }}
            col
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default ToggleSwitch