import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ItemDetailsScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('../assets/images/img2.png')}
        />
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text style={styles.description}>Description: {item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '85%',
    height: '55%',
    maxWidth: 400,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#326AAD',
  },
  description: {
    fontSize: 17,
    color: '#326AAD',
    fontWeight: '700',
  },
  image: {
    marginLeft: 10,
    height: 200,
    width: 140,
  },
});

export default ItemDetailsScreen;
