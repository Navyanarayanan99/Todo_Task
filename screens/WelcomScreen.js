import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const WelcomScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Plan Your {'\n'}EveryDay {'\n'}Task...
      </Text>
      <Image
        source={require('../assets/images/img3.png')}
        style={styles.image}
      />
    </View>
  );
};

export default WelcomScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    marginTop: 40,
    margin: 30,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    height: 400,
    width: 350,
  },
});
