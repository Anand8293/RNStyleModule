import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { styles } from './styles'
import ListItem from './ListItem'

export default function ListViews(props){
    const otherText = <Text>Second one</Text>
    return(
        <View style={styles.container}>
           <ListItem name="Amit Mehta" age = {23} />
           <ListItem name="Rahul Mehta" age = {32} />
           <ListItem name="Sumit Mehta" age = {27} />
           <ListItem name="Rajan Mehta" age = {35} />
        </View>
    )
}