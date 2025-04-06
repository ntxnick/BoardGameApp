import { Button, StyleSheet, Text, View } from 'react-native';
import React from "react";

// navigation
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from '../../App';

//global styles
import { globalStyles } from '../styles/global';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
    return(
        <View style={globalStyles.container}>
            {/* <text>Home!</text> */}
            <Button
            title='Go to Details'
            onPress={() => navigation.navigate("Details", {
                productId: "86"
            })}
            />
        </View>
    )
}

export default Home
