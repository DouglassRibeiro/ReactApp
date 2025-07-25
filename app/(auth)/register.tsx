import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, Link } from "expo-router";


import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CustomTextInput } from "@/components/CustomTextInput"; // 1. Importamos nosso novo componente

export default function RegistroScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleRegistro = () => {
    setError("");
    if (!email || !userName || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    router.push({
      pathname: "/welcome",
      params: { userName: userName },
    });
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Crie sua Conta</ThemedText>

      {/* 2. Substituímos os TextInputs antigos pelos nossos novos componentes animados */}
      <CustomTextInput
        isFocused={isEmailFocused}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
      />

      <CustomTextInput
        isFocused={isUserFocused}
        placeholder="Nome de Usuário"
        value={userName}
        onChangeText={setUserName}
        onFocus={() => setIsUserFocused(true)}
        onBlur={() => setIsUserFocused(false)}
      />

      <CustomTextInput
        isFocused={isPasswordFocused}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}
      />

      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}

      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <ThemedText style={styles.buttonText}>Registrar</ThemedText>
      </TouchableOpacity>

      <Link href="/login" asChild>
        <TouchableOpacity>
          <ThemedText>
            Já tem uma conta? Faça login
          </ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

// 3. O StyleSheet ficou mais simples, sem a necessidade do 'inputFocused'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  button: {
    backgroundColor: "#0a7ea4",
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
  errorText: {
    color: "red",
    textAlign: "center",
  },
});
