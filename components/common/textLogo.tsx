import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/theme'
import { moderateScale } from 'react-native-size-matters'


const TextLogo = () => {
  return (
      <Text style={[styles.logo ]}>C-WORK</Text>
  )
}

export default TextLogo

const styles = StyleSheet.create({
    logo: {
        color: colors.text.bright,
        fontSize: moderateScale(40),
        fontFamily: 'poppins-bold',
    },
})