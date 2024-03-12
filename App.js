import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login';
import Register from './components/Register';
import Home from "./components/Home";
import Cart from './components/Cart';
import Account from './components/Account';
import Favorite from './components/Favorite';
import Discover from './components/Discover';
import Details from './components/Details';
import {store} from '../new/components/redux/store'
import { Provider } from 'react-redux';
import {MaterialCommunityIcons} from "@expo/vector-icons"
// import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import CategoryDetail from "./components/CategoryDetail";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

function AfterLogin(){
  return(
    <Tab.Navigator initialRouteName='Home'>
      
      <Tab.Screen name="Account" component={Account} options={{headerShown: false, 
      tabBarIcon:() => (
        <MaterialCommunityIcons name="account" color={'grey'} size={26} />
        )}}/>
      
      <Tab.Screen name="Discover" component={Discover} options={{headerShown: false, 
      tabBarIcon: () => (
            <MaterialCommunityIcons name="home-search" color={'grey'} size={26} />
          )}}/>
      
      <Tab.Screen name="Home" component={Home} options={{headerShown: false, 
        tabBarIcon:() => (
          <MaterialCommunityIcons name="home" color={'grey'} size={26} />
          )}}/>
      
      <Tab.Screen name='Favorite' component={Favorite} options={{headerShown: false, tabBarLabel: 'Wishlist',
        tabBarIcon:() => (
          <MaterialCommunityIcons name="heart" color={'grey'} size={26} />
          )}}/>
      
      <Tab.Screen name="Cart" component={Cart} options={{headerShown: false, 
        tabBarIcon:() => (
          <MaterialCommunityIcons name="cart" color={'grey'} size={26} />
          )}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
          <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{headerShown: false}}/>
          <Stack.Screen name="Main" 
            component={AfterLogin} 
            options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



