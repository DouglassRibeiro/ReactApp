// No topo do arquivo, adicione a importação do Link
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Link href="../(auth)/register" style={styles.link}>
        <ThemedText type="link">Criar Conta</ThemedText>
      </Link>
      <Link href="../(auth)/login" style={styles.link}>
        <ThemedText type="link">Fazer Login</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // Adicione este novo estilo para o link
  link: {
    marginTop: 20,
    paddingVertical: 10,
  },
});
