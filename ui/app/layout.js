import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="login" options={{ title: "Login" }} /> */}
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Signup" }} />
      <Stack.Screen name="employee" options={{ title: "Employee" }} />
      <Stack.Screen name="adddetails" options={{ title: "Add Details" }} />
      <Stack.Screen name="update" options={{ title: "Update" }} />
      <Stack.Screen name="searchresult" options={{ title: "Search" }} />
      
    </Stack>
  );
}
