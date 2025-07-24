import React, { useState } from "react";
// 1. Adicionei TouchableOpacity à importação
import { StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function RegistroScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dentro do arquivo app/register.tsx
  const [isEmailFocused ,setIsEmailFocused] = useState(false);
  const [isUserFocused ,setIsUserFocused] = useState(false);
  const [isPasswordFocused ,setIsPasswordFocused] = useState(false);

  const handleRegistro = () => {
    console.log("1. Botão pressionado. Iniciando a função handleRegistro.");
    console.log("Dados atuais:", { email, userName, password });

    // Verificação de campos vazios
    if (!email || !userName || !password) {
      console.error("ERRO: Um ou mais campos estão vazios.");
      setError("Por favor, preencha todos os campos.");
      return;
    }

    console.log("2. Validação de campos vazios passou.");

    // Verificação do formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("ERRO: Formato de e-mail inválido.");
      setError("Por favor, insira um e-mail válido.");
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
        style={[styles.input, isEmailFocused && styles.inputFocused,]}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
      />

      <TextInput
        style={[styles.input, isUserFocused && styles.inputFocused]}
        placeholder="Nome de Usuário"
        value={userName}
        onChangeText={setUserName}
        onFocus={() => setIsUserFocused(true)}
        onBlur={() => setIsUserFocused(false)}
      />

      <TextInput
        style={[styles.input, isPasswordFocused && styles.inputFocused]}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
      />

      {/* 2. Substituímos o <Button> por este bloco */}
      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <ThemedText style={styles.buttonText}>Registrar</ThemedText>
      </TouchableOpacity>
      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 15, // Adicionei um espaçamento entre os elementos
  },
  input: {
    height: "10%",
    borderColor: "#ffffff9e",
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 15,
    width: "100%",
    color: "#ffffff43",
    fontSize: 16,
    ...Platform.select({
      web: {
        // Estes estilos serão aplicados SOMENTE na web
        outlineStyle: 'none'
      }
    })
  },
  
  // Adicionei estilos para o nosso novo botão customizado
  inputFocused: {
    color: '#ffffffff',
    borderColor: "#ffffffff",
    borderWidth: 2,
  },

  
  button: {
    backgroundColor: "#0a7ea4", // Cor do template
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});
