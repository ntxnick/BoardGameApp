import { Button, StyleSheet, Text, View } from 'react-native';
import React from "react";

// navigation
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from '../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
    return(
        <View style={styles.container}>
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