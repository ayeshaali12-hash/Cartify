import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { Button, Text, TextInput, Checkbox} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RemoveItemFromWishlist } from './redux/slices/WishlistSlice';
// import { ReduceItemFromCart } from './redux/slices/CartSlice';
// import { ReduceItemFromWishlist } from './redux/slices/WishlistSlice';

export default function Favorite() {
  const items = useSelector((state) => state.wishlist);
  const [wishlistItems, setWishlistItems] = useState(items);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(()=>{
    setWishlistItems(items.data)
  }, [items])


  // console.log(wishlistItems);
    return(
      <View>
        <View style={{paddingTop:Platform.OS==='android'?40:0,backgroundColor:"white"}}>
        </View>
        <View style={styles.constainer}>
          <Text style={styles.heading}>Wishlist</Text>
        


        <FlatList data={wishlistItems} renderItem={({item, index}) =>{
          return(
            <TouchableOpacity activeOpacity={1}
            style={styles.productItem}
            onPress={()=>{
              navigation.navigate("Details", {data: item});
            }}
            >
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.names}>
                  {item.name.length > 25? item.name.substring(0, 25) + '...' : item.name}
                </Text>
                <Text style={styles.desc}>
                {item.description.length > 30? item.description.substring(0, 30) + '...' : item.description}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.price}>
                    {"Rs " + item.price}
                  </Text>
                  <TouchableOpacity onPress={()=>{dispatch(RemoveItemFromWishlist())}}>
                    <Icon name="delete" size={30} color="grey" ></Icon>
                  </TouchableOpacity>
                  
                </View>
                
              </View>
            </TouchableOpacity>
          )
        }}>

        </FlatList>
        </View>
      </View>
      
    )
}

const styles = StyleSheet.create({
    constainer:{
        backgroundColor: "#FFF",
        height: "100%"
    },
    heading:{
      padding:10, 
      paddingLeft:20, 
      fontSize:24, 
      fontWeight:"bold"
    }, 
    productItem:{
      width: Dimensions.get('window').width,
      height: 100,
      marginTop: 10,
      paddingLeft: 10,
      backgroundColor: '#fff', 
      alignItems: 'center',
      flexDirection:'row',
    },
    itemImage:{
      width: 100,
      height: 100
    },
    names:{
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 20,
    },
    desc:{
      marginLeft: 20,
    },
    price:{
      color: 'green',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 20,
      marginTop: 5,
    }
  });
  
