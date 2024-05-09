import React, {useEffect} from 'react';
import {View, Text, Button, Pressable, StyleSheet, Alert, Modal, TouchableOpacity, TextInput} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MarkdownTextInput} from '@expensify/react-native-live-markdown';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

const fill = {flex: 1};

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsStack')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
      {/* change to TextInput and bug will disappear */}
      <MarkdownTextInput
        style={{backgroundColor: 'red', width: 200, height: 50}}
        value="rrrrr"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator(); // <-- change to createStackNavigator to see a difference

function App() {
  return (
    <GestureHandlerRootView style={fill}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="DetailsStack"
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
