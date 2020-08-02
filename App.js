import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Home from './src/pages/Home';

export default function App() {
  useEffect(async () => {
    try {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        alert('Há uma nova atualização disponível! Não se preocupe, estamos instalando-a para você.')
        await Updates.fetchUpdateAsync();
        // ... notify user of update ...
        await Updates.reloadAsync();
      }
    } catch (e) {
      alert('Ocorreu um erro na verificação de atualizações! Por favor, reporte o erro para o desenvolvedor.');
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f09ae9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
