// src/screens/HomeScreen.tsx
import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import ProfileCard, { Profile } from '../components/ProfileCard';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const profiles: Profile[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main St' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', address: '456 Elm St' },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeNavProp>();

  const onViewProfile = (profile: Profile) => {
    navigation.navigate('Detail', { profile });
  };

  const renderItem: ListRenderItem<Profile> = ({ item }) => (
    <ProfileCard profile={item} onViewProfile={onViewProfile} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
});

export default HomeScreen;
