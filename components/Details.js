import { View, Image, StyleSheet, SafeAreaView, Platform, Pressable,TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { addItemToWishlist } from './redux/slices/WishlistSlice';
import { addItemToCart } from './redux/slices/CartSlice';


export default function Details() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    return(
        <SafeAreaView style={{paddingTop:Platform.OS==='android'?40:0,backgroundColor:"white", flex:1}}>
        <ScrollView>
            <Image source={{uri:route.params.data.image}} style={styles.image}/>
            <Text style={styles.text}>{route.params.data.name}</Text>
            <Text style={styles.desc}>{route.params.data.description}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={[styles.price, {color:"#000"}]}>{"Price:"}</Text>
                <Text style={styles.price}>{" Rs."+route.params.data.price}</Text>
            </View>
            <TouchableOpacity style={styles.wishlist}
            onPress={() => {dispatch(addItemToWishlist(route.params.data))}}
            >
                <Image source={require("./Image/wishlists.png")} style={styles.fav}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} 
            onPress={() => {dispatch(addItemToCart(route.params.data))}}>
                    <Text>Add to Cart</Text>
            </TouchableOpacity>
            
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
    flex: 1, 
    backgroundColor: "#fff"
    },
    image:{
        width:"100%",
        height: 330, 
        resizeMode: 'center'
    }, 
    text:{
        fontSize:22, 
        color: "#000", 
        fontWeight: "600",
        marginLeft:20, 
        marginTop:20 
    }, 
    desc:{
        fontSize:15, 
        color: "#000", 
        marginLeft:20,
        marginRight:20,
        textAlign: 'justify',
        padding: 10,
        // paddingBottom:10
    }, 
    price:{
        color: '#00AED1',
        marginLeft:20, 
        marginTop:10,
        fontSize:20,
        fontWeight:'800' 
    }, 
    button:{
        backgroundColor:"#00CED1", 
        padding:10, 
        borderRadius:20, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:10, 
        width:300, 
        alignSelf:'center'
    }, 
    wishlist:{
        position: 'absolute',
        right:20, 
        top:280, 
        backgroundColor:"#E2DFDF", 
        justifyContent: 'center',
        alignItems:'center', 
        width:40, 
        height:40,
        borderRadius:25
    }, 
    fav:{
        width:35, 
        height:35
    }
  });
  
