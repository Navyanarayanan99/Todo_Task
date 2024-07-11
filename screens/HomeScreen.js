import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import HomeHeader from './components/HomeHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {TodosContext} from './components/TodoContext';

const HomeScreen = ({navigation}) => {
  const {todos, setTodos} = useContext(TodosContext);
  const [searchText, setSearchText] = useState('');

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemList}
      onPress={() => navigation.navigate('ItemDetails', {item})}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/to-do-list.png')}
          style={{height: 60, width: 60, resizeMode: 'cover'}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={styles.item}>{item.title}</Text>
          <Text style={styles.itemDesc}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Find your task..."
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />
      </View>
      {todos.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.centertext}>Add Your</Text>
          <Text style={styles.centertextTow}>Digital Feature</Text>
        </View>
      ) : (
        <FlatList
          data={filteredTodos}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItem')}>
        <Icon name="add-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  searchBar: {
    flex: 1,
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 40,
    color: '#fff',
    paddingHorizontal: 20,
    marginRight: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 12,
  },
  flatListContainer: {
    flexGrow: 1,
    marginTop: 16,
  },
  item: {
    fontSize: 18,
    color: '#000',
    marginTop: 5,
  },
  itemDesc: {
    fontSize: 15,
    color: '#000',
    marginTop: 8,
  },
  itemList: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 10,
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#326AAD',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  centertext: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 70,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centertextTow: {
    color: '#326AAD',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
