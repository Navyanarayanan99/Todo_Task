import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {TodosContext} from './components/TodoContext';
const AddItemScreen = ({navigation}) => {
  const {setTodos} = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addItem = () => {
    if (title.trim() && description.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        {id: Date.now().toString(), title, description},
      ]);
      navigation.goBack();
    } else {
      showSnackbar('Title and Description cannot be empty');
    }
  };

  const showSnackbar = message => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: '#f44336',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/images/img1.png')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={'#fff'}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.descriptionInput}
        placeholder="Description"
        placeholderTextColor={'#fff'}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={{color: '#fff', fontSize: 18}}>Add Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 15,
    color: '#fff',
  },
  descriptionInput: {
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 15,
    color: '#fff',
    textAlignVertical: 'top',
  },
  button: {
    height: 40,
    width: 360,
    backgroundColor: '#326AAD',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddItemScreen;
