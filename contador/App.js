import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [numeroDePessoas, atualizarNumeroDePessoas] = useState(0);

  const adicionarPessoa = () => {
    atualizarNumeroDePessoas(pessoasAtuais => pessoasAtuais + 1);
  };

  const removerPessoa = () => {
    atualizarNumeroDePessoas(pessoasAtuais => Math.max(pessoasAtuais - 1, 0));
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.textoContador}>
        Pessoas no restaurante: {numeroDePessoas}
      </Text>
      <View style={estilos.botoesContainer}>
        <Button title="Entrada" onPress={adicionarPessoa} />
        <Button title="Saida" onPress={removerPessoa} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textoContador: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});