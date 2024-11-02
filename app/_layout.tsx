import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Navigator } from 'expo-router';
import Header from '@/components/Header';
import Slot = Navigator.Slot;

const RootLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: insets.top, marginBottom: insets.bottom }}>
      <View style={styles.contentApp}>
        <Header />
        <View style={styles.contentScreens}>
          <Slot />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentApp: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  contentScreens: {
    flex: 1,
  },
});

export default RootLayout;
