import React from 'react';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { useNavigationState } from '@react-navigation/native';

const BackButton = () => {
  const router = useRouter();
  const routes = useNavigationState((state) => state.routes);

  if (routes.length === 1) {
    return null;
  }

  return (
    <Pressable onPress={router.back}>
      <Ionicons name="chevron-back" size={24} color="black" />
    </Pressable>
  );
};

export default BackButton;
