import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        // screenOptions aplica a configuração a TODAS as telas da pilha
        screenOptions={{
          animation: 'slide_from_right', // Animação padrão
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#151718' : '#fff',
          },
          headerTintColor: colorScheme === 'dark' ? '#fff' : '#11181C',
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen 
          name="register" 
          options={{ 
            title: 'Registro', 
            // Podemos usar uma animação diferente aqui se quisermos
            // animation: 'fade_from_bottom', 
          }} 
        />
        <Stack.Screen 
          name="welcome"
          options={{ 
            title: 'Bem-Vindo', 
            headerBackVisible: false,
            // Sobrescrevendo a animação padrão para esta tela
            animation: 'fade', 
          }} 
        />

        {/* Nossa nova tela de login também usará a animação padrão */}
        <Stack.Screen name="login" options={{ title: 'Login' }} />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
