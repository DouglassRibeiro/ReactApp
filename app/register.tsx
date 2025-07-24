import React, { useState } from "react";
// 1. Adicionei TouchableOpacity à importação
import { StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function RegistroScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(''); 

  // Dentro do arquivo app/register.tsx

  const handleRegistro = () => {
    console.log("1. Botão pressionado. Iniciando a função handleRegistro.");
    console.log("Dados atuais:", { email, userName, password });

    // Verificação de campos vazios
    if (!email || !userName || !password) {
      console.error("ERRO: Um ou mais campos estão vazios."); // Usamos console.error para erros
      setError("Por favor, preencha todos os campos.");
      return;
    }

    console.log("2. Validação de campos vazios passou.");

    // Verificação do formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("ERRO: Formato de e-mail inválido.");
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return;
    }

    console.log("3. Validação de e-mail passou. Tentando navegar...");

    // Navegação
    try {
      router.push({
        pathname: "/welcome",
        params: { userName: userName },
      });
      console.log("4. Navegação executada com sucesso!");
    } catch (error) {
      console.error("ERRO AO NAVEGAR:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Crie sua Conta</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* 2. Substituímos o <Button> por este bloco */}
      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <ThemedText style={styles.buttonText}>Registrar</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 10, // Adicionei um espaçamento entre os elementos
  },
  input: {
    height: 44,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    width: "100%",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  // Adicionei estilos para o nosso novo botão customizado
  button: {
    backgroundColor: "#0a7ea4", // Cor do template
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
