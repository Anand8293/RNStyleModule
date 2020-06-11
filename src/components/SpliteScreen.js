import React, { useState } from 'react';
import {
      View,
    Text,
    Button,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { styles } from './styles';

const image = { uri: "https://images.unsplash.com/photo-1501769214405-5e5ee5125a02?ixlib=rb-1.2.1&auto=format&fit=crop&w=398&q=80" };
export default SpliteScreen = ({navigation, route}) => {
    const [amount, setAmount] = useState(0)
    const [member, setMember] = useState(1)
    const [percentage, setPercentage] = useState(1)
  
    return (
        <View style={styles.container}>
            <View style={styles.topview}>
                <Text style={styles.head}>Enter Bill Total</Text>
                <Text style={styles.title}>e.g 123.56</Text>
                <Text style={styles.head}>Hello Mr {route?.params.username}</Text>

            </View>
            <View style={styles.bottom}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.bottomView}>
                        <Text style={styles.bottomhead}>Select tip %</Text>
                        <View style={styles.fixToText}>
                            <Text style={styles.pertext}>0%</Text>
                            <Text style={[styles.pertext, styles.selected]}>10%</Text>
                            <Text style={styles.pertext}>20 %</Text>
                        </View>
                        <Text style={styles.bottomhead}>Enter Bill Total</Text>
                        <View style={styles.fixToText}>
                            <Text style={styles.totaltext}>2</Text>
                            <View style={styles.fixToTextbtn}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.customBtnText}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.customBtnText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.calc}>
                        <Button color='#64a571' title="Calculate" />
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}