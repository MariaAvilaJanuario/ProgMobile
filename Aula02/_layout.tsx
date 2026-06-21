import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: {backgroundColor: "#000000"},
    headerTitleAlign: "center",
    headerTintColor: "#ffffff"
  }}>
    <Stack.Screen name="index" options={{title:'Página Principal'}}/>
    <Stack.Screen name="teste" options={{title:'Imagens'}}/>
  </Stack>;
}