// src/components/ProfileCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export interface Profile {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface ProfileCardProps {
  profile: Profile;
  onViewProfile: (profile: Profile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onViewProfile }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{profile.name}</Text>
    <Text style={styles.email}>{profile.email}</Text>
    <View style={styles.buttonContainer}>
      <Button title="View Profile" onPress={() => onViewProfile(profile)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  name: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  email: { fontSize: 14, color: '#555', marginBottom: 8 },
  buttonContainer: { alignSelf: 'flex-start' },
});

export default ProfileCard;
