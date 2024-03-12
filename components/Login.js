import { View, Image, SafeAreaView, Alert } from 'react-native';
import { Button, Text, TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import { useState } from 'react';
import {Users} from "./Users"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const User = async() =>{
        const abc= await AsyncStorage.setItem('name', email);
        setEmail(abc)
        // console.log("name",email);
     }

    const handleLogin = () => {
        const userExists = Users.some(user => user.email === email);
    
        if (userExists) {
          navigation.navigate('Main');
        } else {
          Alert.alert('Invalid Username', 'Please enter a valid username.');
        }
      };

    return(
        <SafeAreaView style={{paddingTop:Platform.OS==='android'?40:0,backgroundColor:"white", flex:1}}>

        
      <View style={styles.main}>
        <Image source={require("./Image/logo.png")} style={{ width: 400, height: 200,  }} />
  
        <Text variant="headlineSmall" style={styles.container}>Login to your Account</Text>
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                label="Enter Email"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput 
                style={styles.input}
                secureTextEntry
                label="Enter Password"
                value={password}
                onChangeText={password => setPassword(password)}
            />
        </View>

        <View style={styles.label}>
            <Button>
                <Text variant="labelMedium" style={{textTransform: 'capitalize'}}>Remember Me</Text>
            </Button>
            <Button>
            <Text variant="labelMedium" style={{color:"#39a0cc", textTransform: 'capitalize'}}>Forget Password?</Text>
            </Button>
        </View>

        <View style={styles.buttonView}>
            <Button style={styles.button}
            onPress={()=>{handleLogin(), User()}}
            >
                <Text style={styles.loginButton} >Login</Text>
            </Button>
            <Button 
            onPress={()=>{navigation.navigate('Register')}}
            >
                <Text style={{textTransform: 'capitalize'}}>Don't have an account? Sign Up.</Text>
            </Button>
        </View>
    </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 30,
    },
    container: {
    //   passwordAlign: 'center',
        textAlign:'center',
        alignItems: 'center'
    }, 
    input:{
      height:55,
      width:280, 
      marginTop:20,
    }, 
    label:{
        flexDirection: 'row',
        marginLeft:45,
        marginRight:45,
        justifyContent: 'space-between'
    },
    buttonView:{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    button:{
        backgroundColor: '#39a0cc',
        width:100,
        borderRadius: 1
    },
    loginButton:{
        // alignItems: "center",
        // width:20,
        color: "white"
    }
  });
  