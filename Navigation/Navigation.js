import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash_Screen from '../Components/Splash_Screen/splash_screen';
import MainDrawer from '../screen/home/Main_Home';
import Login from '../Components/Login/LoginScreen';
import MyComponent from '../Components/Signup/SignUpScreen'

const Stack = createNativeStackNavigator()
function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='splash'
                    options={{
                        headerShown: false
                    }}
                    component={Splash_Screen}></Stack.Screen>
                <Stack.Screen name='Signup'
                    options={{
                        headerShown: false
                    }}
                    component={MyComponent}></Stack.Screen>
                    <Stack.Screen name='Login'
                    options={{
                        headerShown: false
                    }}
                    component={Login}></Stack.Screen>
                <Stack.Screen name='drawer'
                    options={{
                        headerShown: false
                    }}
                    component={MainDrawer}></Stack.Screen>
                    
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigator