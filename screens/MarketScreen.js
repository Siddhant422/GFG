import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MarketComponent from '../Component/CustomItem'
import { ScrollView } from 'react-native-gesture-handler'
const MarketScreen = () => {
    return (
        <>
        <ScrollView>
            <MarketComponent></MarketComponent>
            <MarketComponent></MarketComponent>
            <MarketComponent></MarketComponent>
            <MarketComponent></MarketComponent>
            <MarketComponent></MarketComponent>
            <MarketComponent></MarketComponent>
        </ScrollView>
        </>
    )
}

export default MarketScreen

const styles = StyleSheet.create({})