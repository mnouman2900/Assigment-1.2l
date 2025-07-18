import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.log('Fetch error:', error);
      });
  }, []);

  const increment = () => {
    setCount(prev => (prev === 15 ? 0 : prev + 1));
  };

  const decrement = () => {
    setCount(prev => (prev === 0 ? 0 : prev - 1));
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { user: item })}
      style={{
        backgroundColor: '#e6e6e6',
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        elevation: 5,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.name}</Text>
      <Text style={{ marginTop: 5 }}>{item.email}</Text>
      <Text style={{ marginTop: 5 }}>{item.company.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      {apiData ? (
        <FlatList
          data={apiData}
          renderItem={renderUser}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      ) : (
        <ActivityIndicator size={'large'} color="#0000ff" />
      )}

      {/* Optional counter UI */}
      {/* 
      <Text style={{ marginBottom: 20, fontSize: 30 }}>{count}</Text>
      <Button title={'Increment'} onPress={increment} />
      <View style={{ margin: 20 }} />
      <Button title="Decrement" onPress={decrement} />
      <CustomButton
        title={'Next Screen'}
        onPressFunc={() => navigation.navigate('ProfileScreen')}
      />
      */}
    </View>
  );
};

export default HomeScreen;
