// types.ts or at top of App.tsx
import { Profile } from './src/components/ProfileCard';

export type RootStackParamList = {
  Home: undefined;
  Profile: { profile: Profile }; // route param expected by DetailScreen
};
