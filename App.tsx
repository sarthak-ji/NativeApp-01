import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={{ uri: 'https://imgs.search.brave.com/STFeWJK_wAGy0HAgxila_KETa-euBJNX1KQ1DV2qtxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9wb3Bjb3Ju/L2hpL2Zhbl9pbWFn/ZXMvYXJ0aXN0LzI1/L3NoYWhydWtoLWto/YW4tcGhvdG9zLWlt/YWdlcy0xODEzLmpw/Zw' }}
          style={{ width: 64, height: 64 }}
        />
        <Text style={{color: 'white'}} >App</Text>
        <Text style={{color: 'white'}} >App</Text>
        <Text style={{color: 'white'}} >App</Text>
        <Text style={{color: 'white'}} >App</Text>
        <Text style={{color: 'white'}} >App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
