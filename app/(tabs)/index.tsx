import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AnimationTest } from '@/components/AnimationTest';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Tela Principal</ThemedText>
      {/* AQUI ESTAVA O ERRO */}
      <ThemedText>Aqui começaremos nosso app!</ThemedText>
      
      <AnimationTest />

      <Link href="/(auth)/register" style={styles.link}>
        <ThemedText type="link">Criar Conta</ThemedText>
      </Link>
      <Link href="/(auth)/login" style={styles.link}>
        <ThemedText type="link">Fazer Login</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  link: {
    paddingVertical: 5,
  },
});