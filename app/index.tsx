import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/theme'
import TextLogo from '@/components/common/textLogo'
import Button from '@/components/ui/Button'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters'
import { Link, useRouter, Stack } from 'expo-router'

const OnBoardingScreen = () => {
  const router = useRouter();

  const onNavigateToSignUp = () => {
    router.push('/sign-up')
  }


  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }} 
      />
      <TextLogo/>
      <View style={styles.innerContainer}>
        <View style={styles.buttonContainer}>
          <Button title="GET STARTED" onPress={onNavigateToSignUp} type="primary"/>
        </View>
        <Link style={styles.loginMessage} href="/login">
            Already have an account? <Text style={styles.login}>Login</Text>
        </Link>
      </View>
    </View>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    position: 'absolute',
    gap: hp('3%'),
    bottom: hp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: wp('80%'),
  },
  loginMessage: {
    color: colors.text.light,
    fontFamily: 'poppins-regular',
    fontSize: moderateScale(16, 0.2),
  },
  login: {
    fontFamily: 'poppins-bold',
    color: colors.text.bright,
    fontSize: moderateScale(16, 0.2),
  },
})