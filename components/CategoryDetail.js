import {useState} from 'react';
import { View, Image, StyleSheet, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, Checkbox} from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Sale, Furniture, Kitchen, Accessories, Outdoor, HomeOffice } from './CategoryList';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './redux/slices/CartSlice';
import { addProduct } from './redux/slices/ProductsSlice';
// import { addProduct } from './redux/slices/ProductsSlice';

export default function CategoryDetail(){
        const navigation = useNavigation();
        const dispatch = useDispatch();
        const route = useRoute();
        const [selectedCategory, setSelectedCategory] = useState(route.params.data.name);

        let itemsToRender = [];
        switch (selectedCategory) {
        case 'Sale':
            itemsToRender = Sale;
            break;
        case 'Furniture':
            itemsToRender = Furniture;
            break;
        case 'Kitchen':
            itemsToRender = Kitchen;
            break;
        case 'HomeOffice':
            itemsToRender = HomeOffice;
            break;
        case 'Outdoor':
            itemsToRender = Outdoor;
            break;
        case 'Accessories':
            itemsToRender = Accessories;
            break;
        default:
            break;
        };

        

        itemsToRender.map(item => {
            item.qty = 1;
            item.totalPrice = item.price;
        });
        dispatch(addProduct(itemsToRender));
        // console.log(itemsToRender)
        return(
        <ScrollView>
            <View style={{flexDirection: 'row', alignItems:'center', flexWrap:'wrap', marginTop:25 , marginLeft:20}}>
            <Text style={{fontSize:20}}>{route.params.data.name}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center', flexWrap:'wrap', margin:10, marginTop: 0}}
            >
                
                {itemsToRender.map((item, index) =>(
                <Pressable key={index} 
                onPress={()=> {navigation.navigate('Details', {data:item})}}
                >

                    <View style={{marginHorizontal:10, marginVertical:10}}>
                    <Image style={{width:150, height:150, resizeMode: "contain"}} 
                        source={{uri:item.image}}
                    />

                    
                    <Text style={{width:150, marginTop:10, textAlign:'center', fontSize:14}}>{item.name}</Text>


                    <View style={{marginTop:5, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:15, fontWeight:'bold', }}>{item.price}</Text>
                        <Text style={{color:'#00CED1', fontWeight:'bold', }}>{item.rating} Rating</Text>
                    </View>


                    <TouchableOpacity
                    onPress={() => {dispatch(addItemToCart(item))}}
                    style={{backgroundColor:"#00CED1", padding:10, borderRadius:20, justifyContent:'center', alignItems:'center', marginTop:10}}>
                        <Text>Add to Cart</Text>
                    </TouchableOpacity>
                    </View>
                </Pressable>
                ))}
            </View>
        </ScrollView>
        )
    }

    const styles = StyleSheet.create({
        main:{
            marginTop: 40,
        },
    });