import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import { styles } from './styles'

export default function ListItem({name, age}){
    const otherText = <Text>Second one</Text>
    return(
        <View style={styles.textContainer}>
           <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>{name} ->     </Text>
           <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>{age}</Text>
        </View>
    )
}

