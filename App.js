import React, {useState} from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';




export default function App() {



function CalculoCombustivel(){
 const resultado = km / combustivel ;
  alert('O Consumo do seu carro é ' + resultado);
}


  const [km,setKm] = useState('');
const [combustivel, setCombustivel] =useState('');




  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.paragraph}>Consumo de Combustivel</Text>

      <TextInput style={styles.input}
        keyboardType="numeric"
         placeholder="Digite os Km percorridos"
        placeholderTextColor='#fff'
      onChangeText={(km)=>setKm(km)} />

      <TextInput style={styles.input}
       keyboardType="numeric" 
       placeholder="Digite a quantidade de Combustivel"
      placeholderTextColor='#fff'
      
      onChanceText={(combustivel)=>setCombustivel(combustivel)}  />

    <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
        <Text style={styles.txtbtn}>Calcular o Consumo</Text>
    </TouchableOpacity>




    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:60
  },

  btn:{
    alignItems:'center',
    backgroundColor:'#ff0000',
    padding:15,
    borderRadius:10,
    marginTop:50
  },

  txtbtn:{
    fontSize:30,
     color:'#fff'
  },

  input:{
    fontSize:20,
    padding:20,
    backgroundColor:'#a0c225',
    borderRadius: 10,
    margin:15,
    color:'#fff'
  }

});
