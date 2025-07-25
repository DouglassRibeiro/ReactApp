import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { ThemedText } from './ThemedText';

export function AnimationTest() {
  // Cria um valor compartilhado para a largura, começando em 100
  const width = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => {
    // Retorna o estilo animado
    return {
      width: width.value,
    };
  });

  const handlePress = () => {
    // Ao pressionar, anima a largura para 200 ou de volta para 100
    width.value = withTiming(width.value === 200 ? 100 : 200, { duration: 500 });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <ThemedText>Toque aqui para testar a animação</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
  },
  box: {
    height: 100,
    backgroundColor: '#0a7ea4',
    borderRadius: 20,
  },
});