// // (Hard Coded)
// import React from 'react';
// import { Text, StyleSheet } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// const Theme = () => {
//     // const colorScheme = useColorScheme(); // Not needed if you always want light
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={[styles.container, { backgroundColor: 'white' }]}>
//         <Text style={{ color: 'black' }}>useColorScheme: light</Text>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default Theme;




// // Toggle (Hard Coded!)
// import React from 'react';
// import { Text, StyleSheet } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// const Theme = () => {
//   const isLight = false; // or add a toggle/switch
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView
//         style={[
//           styles.container,
//           { backgroundColor: isLight ? 'white' : 'black' },
//         ]}
//       >
//         <Text style={{ color: isLight ? 'black' : 'white' }}>
//           useColorScheme: {isLight ? 'light' : 'dark'}
//         </Text>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default Theme;




// Toggle 
import React, { useState } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Theme = () => {
  // Toggle state
  const [isLight, setIsLight] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: isLight ? 'white' : 'black' }]}>
        <Text style={{ color: isLight ? 'black' : 'white' }}>
          Theme: {isLight ? 'Light' : 'Dark'}
        </Text>
        <Button
          title={isLight ? "Switch to Dark" : "Switch to Light"}
          onPress={() => setIsLight(!isLight)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Theme;
