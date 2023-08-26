import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import { Card } from 'react-native-paper'


const ShadowCard = (props: any) => {
    const { headings, image, button1, button2 } = props

    return (

        <View style={styles.container}>
            <Card style={styles.mainContainer}>
                <View style={styles.headingContainer}>
                    {headings}
                    <View style={styles.buttonContainer}>
                        {button1}
                        {button2}
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View>{image}</View>
                </View>

            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        top: 10,

    },
    mainContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        width: '98%',
        height: 200,

    },
    headingContainer: {
        display: 'flex',
        // flexWrap: 'nowrap',
        width: '70%',

    },
    imageContainer: {
        width: '10%',
        height: '50%',
        left: "70%",
        bottom: "59%"

    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        top: 30,
    }

})

export default ShadowCard