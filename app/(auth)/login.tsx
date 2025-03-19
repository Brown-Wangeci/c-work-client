import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform , TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { colors } from '@/theme';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';

const Login = () => {

  const router = useRouter();

  const [ loginData, setLoginData ] = React.useState({
    email: '',
    password: '',
  });



  const onChangeText = (key: string, value: string) => {
    setLoginData({...loginData, [key]: value });
  }

  const onLogin = () => {
    console.log(loginData);
    if (loginData.email === 'Poster') {
      router.push('/task-poster');
    }else{
      router.push('/tasker');
    }
  };

  const onLoginWithGoogle = () => {
    // Implement Google Sign Up
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subTitle}>Log in to Proceed</Text>

          <View style={styles.inputContainer}>
            <Input placeholder="Email Address" value={loginData.email} type="email-address" onChangeText={onChangeText} />
            <Input placeholder="Password" value={loginData.password} type="default" isPassword onChangeText={onChangeText} />
          </View>

          <Button title="LOGIN" type='primary' onPress={onLogin} />
          <Text style={styles.optionText}>Or Sign In with</Text>
          <TouchableOpacity style={styles.googleIconContainer} onPress={onLoginWithGoogle}>
            <FontAwesome6 name="google" size={36} color={colors.text.bright} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('5%'), // Adds padding to prevent content cutoff
  },
  content: {
    width: wp('80%'), // Slightly increased width for better responsiveness
    alignItems: 'center',
  },
  title: {
    color: colors.text.bright,
    fontSize: moderateScale(24, 0.2),
    fontFamily: 'poppins-bold',
    textAlign: 'center',
    marginBottom: hp('1%'), 
  },
  subTitle: {
    color: colors.text.light,
    fontSize: moderateScale(16, 0.2),
    fontFamily: 'poppins-regular',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginVertical: hp('4%'),
    gap: hp('2.5%'), // Ensures spacing adapts to screen size
  },
  optionText: {
    marginVertical: hp('2%'),
    color: colors.text.bright,
    fontSize: moderateScale(16, 0.2),
    fontFamily: 'poppins-medium',
    textAlign: 'center',
  },
  googleIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
