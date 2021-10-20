import React,{useState} from 'react' ;
import  {StyleSheet,Button,TextInput,View,TouchableOpacity} from 'react-native' ;
import { Ionicons } from '@expo/vector-icons'; 

 const Form = ( {addItem } ) => {
const [val,setVal] = useState(null) ;

const id = Math.floor(Math.random() * 100) ;

const task = {
    id ,
    title : val
}




    return (
       
      <View style = {styles.viewInputButton} >
      <TextInput 
       onChangeText = {(vl)=>setVal(vl)}
        style={styles.myinput} 
        value = {val}
        placeholder ="Saisir Votre Tache "  />
        <TouchableOpacity  onPress = { () =>{
            addItem(task)
            setVal("")
          }}>
        <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      
    </View>
  );
    
}
const styles = StyleSheet.create({
  
    viewInputButton :{
      flexDirection : 'row' ,
      justifyContent :"space-around" ,
      alignItems :"center"
    } ,
    myinput:{
     borderColor:"black" ,
     borderWidth : 2 ,
     padding :7 ,
     borderRadius : 8,
     width:"80%"
    }
  });


export default Form ;