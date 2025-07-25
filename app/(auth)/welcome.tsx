import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function WelcomeScreen() {
  // Este Hook nos dá acesso aos parâmetros passados na navegação
  const params = useLocalSearchParams();
  const { userName } = params;

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Bem-vindo(a), {userName}!</ThemedText>
      <ThemedText>Seu registro foi concluído com sucesso.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});