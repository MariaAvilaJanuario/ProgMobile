import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: {backgroundColor: "#000000ff"},
    headerTitleAlign: "center",
    headerTintColor: "#ffffffff"
}}>
  <Stack.Screen name="index" options={{title:'Página Principal'}}/>
</Stack>;
}
