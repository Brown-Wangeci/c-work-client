import { Stack } from "expo-router";

const AppLayout = () => {
  return (
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="task-poster" />
        <Stack.Screen name="tasker" />
      </Stack>
  )
}

export default AppLayout