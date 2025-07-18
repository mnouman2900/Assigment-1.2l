import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
    >
      <Text style={{ marginBottom: 20 }}>Profile Screen</Text>
      <CustomButton
        title={'next Screen'}
        onPressFunc={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ProfileScreen;
