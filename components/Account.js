import {useState, useEffect } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import {Text, Avatar, Title, Caption, TouchableRipple,} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Users } from './Users';
import AccountPage from './AccountPage';

export default function Account() {
    const [getName, setGetName] = useState();
    const GetUserName= async() =>{
        const user=await (AsyncStorage.getItem("name"));
        setGetName(user);
    };
    useEffect(()=>{
      GetUserName()
    }, []);
    // console.log("getName",getName);
    const targetEmail = getName;
  const userToDisplay = Users.find(user => user.email === targetEmail);
    return(
      
      <View >
        {userToDisplay ? (
        <AccountPage user={userToDisplay} />
      ) : (
        <Text>User with email {targetEmail} not found</Text>
      )}
        
        

   </View>
    )
}

const styles = StyleSheet.create({
  constainer:{
    backgroundColor: "#FFF",
    height: "100%"
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },

  });
  
