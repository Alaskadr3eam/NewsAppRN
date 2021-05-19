import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import style from '../Style'

export default class About extends React.Component {
    render() {
        return (
            <SafeAreaView>
            <View style={style.view}>
            <Text style={style.title}> A propos de moi</Text>
            <Text>
                Lorem ipsum ....
            </Text>
            </View>
            </SafeAreaView>
        )
    }
}
