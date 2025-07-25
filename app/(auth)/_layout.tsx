import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack} from "expo-router";
import { Platform } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        animation: "fade",
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#151718" : "#fff",
        },
        headerTintColor: colorScheme === "dark" ? "#fff" : "#11181C",
        headerBackTitleVisible: false,
        ...Platform.select({
          ios: {
            headerBackTitleVisible: false,
          },
        }),
      }}
    >
      <Stack.Screen name="register" options={{ title: "Registro" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="welcome" options={{ title: "Bem-Vindo", headerShown: false, }} />
    </Stack>
  );
}
