import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";

// navigation
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from '../../App';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack'

//global styles
import { globalStyles } from '../styles/global';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailsProps) => {

    const {productId} = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.paragraph}>Details!</Text>
            <Button 
            title='Go to Home'
            onPress={() =>navigation.navigate("Home") } />
        </View>
        
    )
}

export default Details
