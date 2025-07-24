import React, { useEffect } from 'react';
import { TextInput, StyleSheet, Platform, type TextInputProps } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type Props = TextInputProps & {
  isFocused: boolean;
};

export function CustomTextInput({ isFocused, style, ...props }: Props) {
  const progress = useSharedValue(0);

  useEffect(() => {
    // CORREÇÃO 2: Removi 'progress' do array de dependências.
    // O useEffect só precisa ser re-executado quando 'isFocused' mudar.
    progress.value = withTiming(isFocused ? 1 : 0, { duration: 250 });
  }, [isFocused, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#ffffff71', '#ffffffff']
    );

    return {
      borderColor: borderColor,
    };
  });

  return (
    <AnimatedTextInput
      style={[styles.input, animatedStyle, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 2,
    borderRadius: 18,
    paddingHorizontal: 15,
    width: '100%',
    color: '#fff',
    fontSize: 16,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    ...Platform.select({
        web: {
            outlineStyle: 'none',
        } as any, // CORREÇÃO 1: Usamos 'as any' para forçar o TypeScript a aceitar o estilo web.
    }),
  },
});