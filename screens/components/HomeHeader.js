import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const HomeHeader = () => {
  return (
    <View style={StyleSheet.container}>
     <View style={{flexDirection: 'row'}}>
     <Text style={styles.textone}>Hey</Text>
     <Image source={require('../../assets/images/wave.png')} style={styles.image}/>
     </View>
      <Text style={styles.texttwo}>Welcome Back!</Text>
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    elevation: 10
  },
  textone: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  texttwo: {
    color: '#326AAD',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  image: {
    height: 25,
    width: 25,
    marginLeft: 4
    //marginTop: 5
  }
})