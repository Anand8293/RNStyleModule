import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { styles } from './styles'

const StyleCollection = () => {
    const otherText = <Text>Second one</Text>
    return(
        <View>
           <Text style={styles.textStyle}>Hi, i have done styling...</Text>
           {otherText}
           {otherText}
           {otherText}
           {otherText}
        </View>
    )
}

export default StyleCollection