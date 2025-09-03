import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { useState } from 'react';
import Butao from './Butao';
/*Arquiterura de um ap de administração de poker*/
export default function App() {

  const [jogadores, setJogadores] = useState([]);//lista de jogadores
  const [nome, setNome] = useState('');//nome do jogador

  const adicionarJogador = () => {
    if (!nome) return;//se o nome estiver vazio, não faz nada
    const novoJogador = { id: Date.now().toString(), nome, fichas:20, apostaAtual:0, };//cria um novo jogador com id unico
    setJogadores([...jogadores, novoJogador]);//adiciona o novo jogador na lista
    setNome('');//limpa o campo de nome
  };



  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Mesa de poker</Text>

      <TextInput
      placeholder='Nome do jogador'
      onChangeText={setNome}      
      style={{borderWidth:1, borderColor:'#ccc', padding:10, marginVertical:10}}
      />
      <Button title='Adicionar jogador' onPress={adicionarJogador} />
      <Butao nome={'Teste'}></Butao>

      <FlatList
      data={jogadores}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={{padding:10, borderBottomWidth:1, borderColor:'#ccc', marginVertical:5}}>
          <Text style={{fontSize:18}}>{item.nome}</Text>
          <Text>Fichas: {item.fichas}</Text>
          <Text>Aposta Atual: {item.apostaAtual}</Text>
        </View>
      )}
      />

      <StatusBar style="auto" />

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
