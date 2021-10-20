import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { AntDesign , Ionicons } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,Button,TextInput ,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import Form from './component/form';

const App = () => {
  const [list,setList] = useState ([ {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2 ,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: 'Four Item',
  },
  {
    id: 5,
    title: 'Five Item',
  }
])

const addItem = (item) =>{
  setList(
    [
      ...list ,
      item
    ]

  )

}
const deleteItem = (id) =>{
 const l =  list.filter((item)=>{
    return item.id !== id 
  })
  setList(l)

}

  return (
    <View  style={styles.container}>
    <Form addItem = {addItem}/>
   <View>
   <FlatList
   data ={list} 
   renderItem = {({item})=>{
     return(
       <ScrollView>
 <View style = {styles.myView}>
<View style = {styles.mylist}>
<Text style = {styles.mytitle}> {item.title}</Text>
</View>
<View style = {styles.mydelete}>
<TouchableOpacity onPress = {()=>deleteItem(item.id)}>
<AntDesign name="delete" size={24} color="black" />
</TouchableOpacity>
</View>
</View>

  </ScrollView>
     )
   }} 
   keyExtractor = {(item)=>item.id}
   
   />
   </View>
    </View>
  )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding :30 
  },
  mylist : {
   
    margin :8,
    padding : 3  ,
    backgroundColor : "grey" ,
    borderColor : "black" ,
    borderRadius : 5 ,
    width : "80%"
    
  } ,
  mytitle :{
    fontSize : 18 
  },
  myView :{
    flexDirection : "row"
  } ,
  mydelete :{
    marginTop : 8
  }
})



export default App ;
