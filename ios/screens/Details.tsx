import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";

// navigation
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from '../../App';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route}: DetailsProps) => {

    const {productId} = route.params

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return(
        <View style={styles.container}>
            <Text>Details!</Text>
            <Button 
            title='Go to Home'
            onPress={() =>navigation.navigate("Home") } />
        </View>
        
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    padding: 80
  },});