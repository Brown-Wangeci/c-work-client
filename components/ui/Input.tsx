import { StyleSheet, Text, TextInput, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters'
import React from 'react'
import { colors } from '@/theme'

type InputProps = {
    placeholder: string
    value: string
    type: 'email-address' | 'numeric' | 'default'
    isPassword?: boolean
    onChangeText: (key: string, value: string) => void
}

const Input = ({ placeholder, value, type, isPassword , onChangeText}: InputProps) => {
  let key: string;

  switch (placeholder) {
    case 'Full Name':
      key = 'full_name'
      break;
    case 'Email Address':
      key = 'email'
      break;
    case 'Phone Number':
      key = 'phone_number'
      break;
    case 'Password':
      key = 'password'
      break;
    case 'Confirm Password':
      key = 'confirm_password'
      break;
    default:
      key = 'identifier'
    break;
  }

  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        placeholderTextColor={colors.text.light}
        onChangeText={(value) => onChangeText(key, value)}
        secureTextEntry={isPassword}
        keyboardType={type}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    color: colors.text.bright,
    fontFamily: 'poppins-regular',
    fontSize: moderateScale(14, 0.2),
    width: '100%',
    height: hp('6.4%'),
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.component.stroke,
    backgroundColor: colors.component.input,
    paddingHorizontal: wp('5%'),
    // paddingVertical: hp('20%'),
  }
})

