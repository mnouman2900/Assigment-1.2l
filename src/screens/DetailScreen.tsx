import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { profile } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{profile.name}</Text>
      <Text>Email: {profile.email}</Text>
      <Text>Phone: {profile.phone}</Text>
      <Text>Address: {profile.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
});

export default DetailScreen;
