import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const citações = [
  {
    texto: "A imaginação é mais importante que o conhecimento.",
    autor: "Albert Einstein",
    imagem: require('./assets/einstein.png'),
  },
  {
    texto: "Seu trabalho vai preencher uma grande parte da sua vida, e a única maneira de estar verdadeiramente satisfeito é fazer o que você acredita ser um ótimo trabalho.",
    autor: "Steve Jobs",
    imagem: require('./assets/stevejobs.png'),
  },
  {
    texto: "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    autor: "Oprah",
    imagem: require('./assets/oprah.png'),
  },
  {
    texto: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.",
    autor: "Darwin",
    imagem: require('./assets/darwin.png'),
  },
];

export default function App() {
  const [citaçãoAtual, setCitaçãoAtual] = useState(citações[0]);
  const mostrarANovaCitação = () => {const indiceAleatorio = Math.floor(Math.random() * citações.length);
  setCitaçãoAtual(citações[indiceAleatorio]);
  };
  return (
    <View style={estilos.container}>
      <Image source={citaçãoAtual.imagem} style={estilos.imagemAutor} />
      <Text style={estilos.textoCitação}>"{citaçãoAtual.texto}"</Text>
      <Text style={estilos.textoAutor}>- {citaçãoAtual.autor}</Text>
      <Button title="clique aqui para sua nova quot" onPress={mostrarANovaCitação} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagemAutor: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },
  textoCitação: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  textoAutor: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666', 
  },
});