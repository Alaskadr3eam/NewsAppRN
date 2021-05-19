import React from 'react'
import style from '../Style'
import {Text, Image, ActivityIndicator, View, FlatList, TouchableOpacity, Divider, StyleSheet, Dimensions} from 'react-native'
import axios from 'axios'
import { createStackNavigator, StackNavigator } from '@react-navigation/stack'
import moment from 'moment'
import DetailResult from './DetailResult'

const apiKey = 'edf76b7a835048afb18d643bc0a466d1';
const { width, height } = Dimensions.get('window')

const Item = ({item, time, onPress}) => {
  console.log(item)
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardView}>
          <Text style={styles.title}> {item.title}</Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.author}>{item.author} </Text> 
            <Text style={{margin: 5, fontStyle: 'italic', color: '#b2bec3', fontSize: 10}}> {time} </Text>
          </View>
          <Image style={styles.image} source={item.urlToImage ? {uri: item.urlToImage } : null}/>
          <Text style={styles.description}>{item.description}</Text>
      </View>
      </TouchableOpacity>
  )
}

export default class ListResult extends React.Component {

    static navigationOptions = ({params}) => {

      return {
        title: `Subject / ${this.props.route.params.subject}`
      }
    }

    constructor (props) {
        super(props)
        this.state = {
            subject: this.props.route.params.subject,
            report: null,
        }
        setTimeout(() => {
          this.fetchNews()
        }, 1000)
    }

    fetchNews() {
        console.log(this.props)
        axios.get(`https://newsapi.org/v2/everything?q=${this.state.subject}&from=2021-04-18&sortBy=publishedAt&apiKey=${apiKey}`)
        .then((response) => {
          console.log(response.data)
            this.setState({report: response.data})
        })
    }

    renderItem = ({ item }) => {
      const color = 'black';
      const time = moment(item.publishedAt || moment.now()).fromNow();
    
      return (
        <Item
          item={item}
          time={time}
          onPress={() => this.props.navigation.navigate('Detail')/*alert(item.author)*/}
        />
      );
    };

    render() {

        if (this.state.report === null) {
            return (
                <View style={[style.horizontalIndicator, style.containerIndicator]}>
                <ActivityIndicator
                size="large"
                 />
                 </View>
            )
        } else {
            return (
                <FlatList
                data={this.state.report.articles}
                keyExtractor={(item) => item.url}
                renderItem={this.renderItem}
                />
            ) 
        }
    }
}

const styles = StyleSheet.create({
  cardView: {
      backgroundColor: 'white',
      margin: width * 0.03,
      borderRadius: width * 0.05,
      shadowColor: '#000',
      shadowOffset: { width:0.5, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 3
  },
  title: {
      marginHorizontal: width * 0.05,
      marginVertical: width * 0.03,
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold'

  },
  description: {
      marginVertical: width * 0.05,
      marginHorizontal: width * 0.02,
      color: 'gray',
      fontSize: 18
  },
  image: {
      height: height / 6,
      marginLeft: width * 0.05,
      marginRight: width * 0.05,
      marginVertical: height * 0.02
  },
  author: {
      marginBottom: width * 0.0,
      marginHorizontal: width * 0.05,
      fontSize: 15,
      color: 'gray'

  }

})