import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TaskPosterLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="task/[id]/index" /> 
    </Stack>
  )
}

export default TaskPosterLayout

const styles = StyleSheet.create({})