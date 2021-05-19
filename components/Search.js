import React from 'react'
import { SafeAreaView, TextInput, Button } from 'react-native'
import style from '../Style'
import { createStackNavigator } from '@react-navigation/stack'
import ListResult from '../components/ListResult'
import DetailResult from './DetailResult'

class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      subject: ''
    }
  }

  setSubject (subject) {
    this.setState({subject})
  }

  submit() {
    if (this.state.subject !== '') {
      console.log(this.state.subject)
    this.props.navigation.navigate('Result', {subject: this.state.subject})
    }
  }
    render() {
        return (
    <SafeAreaView>
    
      <TextInput
        underlineColorAndroid='transparent'
        style={style.input}
        onChangeText={(text) => this.setSubject(text)}
        onSubmitEditing={() => navigate('Result',  { text: this.state.subject} )}
        value={this.state.subject}
        placeholder= "Choose subject"
        keyboardType="default"
      />
      <Button 
      style={style.button}
      color='tomato'
      
      onPress={() => this.submit()}
      title="Search article"
      />
      
    </SafeAreaView>
        )
    }
}

const Stack = createStackNavigator();
const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
}

export default function App() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen 
      navigationOptions
        name="Search" 
        component={Search}
        />
        <Stack.Screen 
      navigationOptions
        name="Result" 
        component={ListResult}
      /> 
      <Stack.Screen
      navigationOptions
      name="DetailResult"
      component={DetailResult}
      />
    </Stack.Navigator>
  )
}
