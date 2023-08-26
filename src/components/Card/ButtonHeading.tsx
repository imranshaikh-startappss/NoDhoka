import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const ButtonHeading = ({ btnText, action }: any) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={action} >
                    <Text style={styles.btnColor} >{btnText}</Text>
               </TouchableOpacity>
                
            </View>

        </>

    )
}
const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        left: 5,


    },
    btnColor: {
        color: "#007fff",
        fontWeight: "700"

    }
})

export default ButtonHeading