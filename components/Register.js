import * as React from 'react';
import { View, Image, SafeAreaView, } from 'react-native';
import { Button, Text, TextInput, Checkbox} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import { useState } from 'react';

export default function Register({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <SafeAreaView style={{paddingTop:Platform.OS==='android'?40:0,backgroundColor:"white", flex:1}}>
        <View style={styles.mainn}>
            <Image source={require("./Image/logo.png")} style={{ width: 400, height: 200,  }} />
  
            <Text variant="headlineSmall" style={styles.container}>Register to your Account</Text>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    label="Enter Name"
                    value={name}
                    onChangeText={name => setName(name)}
                />
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
                <Button >
                    <Text variant="labelMedium" style={{textTransform: 'capitalize'}}>Remember Me</Text>
                </Button>
            </View>

            <View style={styles.buttonView}>
                <Button style={styles.button} onPress={()=>navigation.navigate("Main")}>
                    <Text style={styles.loginButton} >Sign Up</Text>
                </Button>
                <Button onPress={()=>navigation.goBack()}>
                    <Text style={{textTransform: 'capitalize'}}>Already have an account? Sign In.</Text>
                </Button>
            </View>

        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainn:{
        marginTop: 20,
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
  