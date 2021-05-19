import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import styleCustom from '../Style'

export default class About extends React.Component {
    render() {
        return (
            <SafeAreaView>
            
            <Text style={styleCustom.title}> A propos de moi</Text>
            <Text style={styleCustom.text}>
                Bonjour à tous,
                Je suis Clément, développeur iOS Swift, UIKit, SwiftUI.
                Grâce à ce test je découvre le monde de React-Native, qui est vraiment différent de celui du développement natif iOS.

                Aux plaisir.
            </Text>
           
            </SafeAreaView>
        )
    }
}
