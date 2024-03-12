import {useState, useEffect } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import {Text, Avatar, Title, Caption, TouchableRipple,} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Users } from './Users';

export default function AccountPage({ user }) {
    const navigation = useNavigation();
    const [getName, setGetName] = useState();
    const GetUserName= async() =>{
        const user=await (AsyncStorage.getItem("name"));
        setGetName(user);
    };
    useEffect(()=>{
      GetUserName()
    }, []);
    return (
        <View >
        <View style={{paddingTop:Platform.OS==='android'?40:0,backgroundColor:"white"}}></View>
        <View style={styles.constainer}>

        <View style={styles.userInfoSection}>
        <View style={{alignItems: 'center', justifyContent: "center", marginTop: 35}}>
          <Avatar.Image style={{justifyContent: "center", textAlign: 'center'}}
            source={{
              uri: "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",
            }}
            size={100}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{user.FirstName+ " "+user.SecondName}</Title>
            <Caption style={styles.caption}>{user.email}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        
        <View style={styles.row}>
          <Icon name="account" color="#00CED1" size={22}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize:17}}>{user.FirstName}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="account" color="#00CED1" size={22}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize:17}}>{user.SecondName}</Text>
        </View>
        
        <View style={styles.row}>
          <Icon name="phone" color="#00CED1" size={22}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize:17}}>{user.PhoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#00CED1" size={22}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize:17}}>{user.email}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#00CED1" size={22}/>
          <Text style={{color:"#777777", marginLeft: 20, fontSize:17}}>Karachi, Pakistan</Text>
        </View>
      </View>


        <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {navigation.navigate("Favorite")}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#00CED1" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {navigation.navigate("Cart")}}>
          <View style={styles.menuItem}>
            <Icon name="cart" color="#00CED1" size={25}/>
            <Text style={styles.menuItemText}>Cart</Text>
          </View>
        </TouchableRipple>
        
      </View>

    </View>
        
        

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
    justifyContent: "center",
    textAlign: 'center',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    justifyContent: "center",
    textAlign: 'center',
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
    marginTop: 0,
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
  
