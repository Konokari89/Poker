import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

export default function Butao({nome}){

  const [contar,setContar ] = useState(0);
    return(
        <Shadow distance={3} startColor='#242424ff' endColor='#5c5c5c85' paintInside={true}>
              <View style={styles.container_row}>
              
                <Text style={{color: '#fff'}}>{nome} {contar}</Text>
                <TouchableOpacity onPress={() => setContar(contar + 1)}>
                  <Image style={styles.btnAdicionar} source={require("./assets/8922789.png")}></Image>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setContar(contar -1)}>
                  <Image style={styles.btnSubtrair} source={require("./assets/10238606.png")}></Image>
                </TouchableOpacity>
                
              </View>
              </Shadow>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 17,
    borderRadius: 10,
    
    },
  btnAdicionar: {
    width: 20,
    height: 20,
    marginLeft: 50,
    marginRight: 30
  },
  btnSubtrair: {
    width: 20,
    height: 20,
  },
 


});