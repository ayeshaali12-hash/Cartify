import * as React from 'react';
import { View, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, Checkbox} from 'react-native-paper';
import { trending } from './Categories';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProduct } from './redux/slices/ProductsSlice';
import { addItemToCart } from './redux/slices/CartSlice';

export default function Trending() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  trending.map(item => {
    item.qty = 1;
    item.totalPrice = item.price;
  });
  dispatch(addProduct(trending));
    return(
      <View>
        <View style={{flexDirection: 'row', alignItems:'center', flexWrap:'wrap', margin:10}}
        >
            {trending.map((item, index) =>(
              <Pressable key={index} onPress={()=> {navigation.navigate('Details', {data:item})}}>
                {/* trending image */}
                <View style={{marginHorizontal:10, marginVertical:25}}>
                  <Image style={{width:150, height:150, resizeMode: "contain"}} 
                    source={{uri:item.image}}
                  />

                  {/* trending name */}
                  <Text style={{width:150, marginTop:10, textAlign:'center', fontSize:14}}>{item.name}</Text>

                  {/* price and rating */}
                  <View style={{marginTop:5, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:15, fontWeight:'bold', }}>{item.price}</Text>
                    <Text style={{color:'#00CED1', fontWeight:'bold', }}>{item.rating} Rating</Text>
                  </View>

                  {/* add to cart button */}
                  <TouchableOpacity style={{backgroundColor:"#00CED1", padding:10, borderRadius:20, justifyContent:'center', alignItems:'center', marginTop:10}}
                  onPress={() => {dispatch(addItemToCart(item))}}
                  >
                    <Text>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </Pressable>
            ))}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop: 40,
    },
  });
  
