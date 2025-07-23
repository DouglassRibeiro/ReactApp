import React, { useState } from "react";
import { StyleSheet, TextInput, Button, Alert } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function RegistroScreen() {
  // Aqui usamos o Hook useState para guardar o que o usuário digita.
  const [email, setEmail] = useState("");
  const [userName, setPassword] = useState("");
  const [password, setSenha] = useState("");

  // Esta função será chamada quando o botão for pressionado.
  const handleRegistro = () => {
    // Por enquanto, vamos apenas mostrar um alerta com as informações.
    Alert.alert(
      "Dados de Registro",
      `Email: ${email}\nNome de Usuário: ${userName}\nSenha: ${password}`
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Crie sua Conta</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail} // A cada letra digitada, atualizamos o 'email'
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={userName}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setSenha} // A cada letra digitada, atualizamos a 'senha'
        secureTextEntry // Esconde o texto da senha
      />

      <Button title="Registrar" onPress={handleRegistro} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: "100%",
    color: "#000", // Adicionei cor para garantir visibilidade no tema claro
    backgroundColor: "#fff", // E fundo branco
  },
});
