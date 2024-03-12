import {useEffect, useState} from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions, } from 'react-native';
import { Button, Text, TextInput, Checkbox} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ReduceItemFromCart, RemoveItemFromCart, addItemToCart } from './redux/slices/CartSlice';

export default function Cart() {
  const items = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(()=>{
    setCartItems(items.data)
  }, [items])
  // console.log(items);
  // console.log(wishlistItems);
    return(
      <View>
        <View style={{paddingTop:Platform.OS==='android'?40:0,backgroundColor:"white"}}>
        </View>
        <View style={styles.constainer}>
          <Text style={styles.heading}>Cart Items</Text>
        


        <FlatList data={cartItems} renderItem={({item, index}) =>{
          return(
            <TouchableOpacity activeOpacity={1}
            key={index}
            style={styles.productItem}
            onPress={()=>{
              navigation.navigate("Details", {data: item});
            }}
            >
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.names}>
                  {/* {item.name} */}
                  {item.name.length > 25? item.name.substring(0, 25) + '...' : item.name}
                </Text>
                <Text style={styles.desc}>
                  {/* {item.desc} */}
                {item.description.length > 30? item.description.substring(0, 30) + '...' : item.description}
                </Text>

                {/* price and quantity */}
                <View style={styles.quantity}>

                  {/* price */}
                  <Text style={styles.price}>
                    {"Rs." + item.totalPrice}
                  </Text>

                  {/* quantity */}
                  <TouchableOpacity style={[styles.btn, {marginLeft: 40}]}
                  onPress={()=>{
                    if (item.qty>1){
                      dispatch(ReduceItemFromCart(item));
                    }else{
                      dispatch(RemoveItemFromCart(index));
                    }
                  }}>
                    <Text style={{fontSize: 18, fontWeight:'600'}}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qty}>{item.qty}</Text>
                  <TouchableOpacity style={styles.btn} onPress={()=>{dispatch(addItemToCart(item))}}>
                    <Text style={{fontSize: 18, fontWeight:'600'}}>+</Text>
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
},
quantity:{
  flexDirection: 'row',
  alignItems: "center",
  marginTop:10
},
btn: {
  padding: 5,
  width: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 0.5,
  borderRadius: 10,
  marginLeft: 10
}, qty:{
  marginLeft: 10,
  fontSize: 18
}
});

