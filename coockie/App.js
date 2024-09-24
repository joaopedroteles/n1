import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const frasesDeSorte = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Gente todo dia arruma os cabelos, por que não o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "O sorriso é a menor distância entre duas pessoas.",
  "Cada segundo é tempo para mudar tudo para sempre.",
  "Viva o agora, o passado já foi e o futuro é incerto.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  "A vida é para quem topa qualquer parada. Não para quem para em qualquer topada.",
  "Inspiração vem dos outros. Motivação vem de dentro de nós.",
  "Não acredite em algo simplesmente porque ouviu. Não acredite em algo simplesmente porque todos falam a respeito.",
  "O amor está mais próximo do que você imagina.",
  "A vida coloca em nossa frente opções.",
  "Você é do tamanho do seu sonho.",
  "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.",
  "O conhecimento é a única virtude e a ignorância é o único vício.",
  "A sorte favorece aqueles que persistem."
];

export default function App() {
  const [biscoitoQuebrado, setBiscoitoQuebrado] = useState(false); 
  const [mensagemDeSorte, setMensagemDeSorte] = useState(""); 
  const quebrarBiscoito = () => {
    const fraseAleatoria = frasesDeSorte[Math.floor(Math.random() * frasesDeSorte.length)];
    setMensagemDeSorte(fraseAleatoria); 
    setBiscoitoQuebrado(true);
  };

  return (
    <View style={estilos.container}>
      <Image
        source={
          biscoitoQuebrado
            ? require('./assets/biscoito_aberto.jpg') 
            : require('./assets/biscoito_fechado.jpg') 
        }
        style={estilos.imagemBiscoito}
      />

      {biscoitoQuebrado && <Text style={estilos.textoSorte}>{mensagemDeSorte}</Text>}

      <Button title="Quebrar o biscoito" onPress={quebrarBiscoito} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagemBiscoito: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  textoSorte: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    fontStyle: 'italic',
    color: '#333',
  },
});