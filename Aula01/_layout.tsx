import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: {backgroundColor: "#7a54a5"},
    headerTitleAlign: "center",
    headerTintColor: "#ffffff"
  }}>
    <Stack.Screen name="index" options={{title:'Página Principal'}}/>
    <Stack.Screen name="cubos" options={{title:'Quadrados'}}/>
    <Stack.Screen name="outrosCubos" options={{title:'Mais Quadrados'}}/>
  </Stack>;
}
