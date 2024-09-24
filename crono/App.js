import React, { useState, useRef } from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [tempo, setTempo] = useState(0);
  const [estaRodando, setEstaRodando] = useState(false);
  
  const referenciaCronometro = useRef(null);

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60000);
    const segundos = Math.floor((tempo % 60000) / 1000);
    const milissegundos = Math.floor((tempo % 1000) / 10);
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}:${milissegundos < 10 ? '0' : ''}${milissegundos}`;
  };

  const iniciarCronometro = () => {
    if (!estaRodando) {
      setEstaRodando(true);
      const tempoInicial = Date.now() - tempo; 
      referenciaCronometro.current = setInterval(() => {
        setTempo(Date.now() - tempoInicial);
      }, 10); 
    }
  };

  const pausarCronometro = () => {
    if (estaRodando) {
      clearInterval(referenciaCronometro.current);
      setEstaRodando(false);
    }
  };

  const reiniciarCronometro = () => {
    clearInterval(referenciaCronometro.current);
    setEstaRodando(false);
    setTempo(0);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.textoCronometro}>{formatarTempo(tempo)}</Text>
      
      <View style={estilos.botoesContainer}>
        <Button title={estaRodando ? "pausar" : "iniciar"} onPress={estaRodando ? pausarCronometro : iniciarCronometro} />
        <Button title="reiniciar" onPress={reiniciarCronometro} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCronometro: {
    fontSize: 48,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});