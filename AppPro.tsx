import React from 'react';
import type { JSX } from 'react';

import { Text, View, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppPro = function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello, this is AppPro!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});

export default AppPro;
