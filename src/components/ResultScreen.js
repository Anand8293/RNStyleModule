import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground
} from 'react-native';
import { styles } from './styles';

const image = { uri: "https://images.unsplash.com/photo-1501769214405-5e5ee5125a02?ixlib=rb-1.2.1&auto=format&fit=crop&w=398&q=80" };
export default ResultScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topview}>
                <Text style={styles.rehead}>Total Per Person</Text>
                <Text style={styles.retitle}>56.32</Text>
            </View>
            <View style={styles.bottom}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.bottomView}>
                        <Text style={styles.rebottomhead}>Split between 2 people, with 10% tip</Text>
                    </View>
                    <View style={styles.calc}>
                        <Button color='#64a571' title="ReCalculate" />
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}