// A "Chave de Ignição": Esta linha DEVE ser a primeira do arquivo.
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";
// A "Carroceria": O componente que envolve o app.
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          {/* Ocultamos o cabeçalho dos nossos "departamentos" */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false, animation: 'slide_from_right' }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}