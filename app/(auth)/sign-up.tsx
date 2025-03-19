import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform , TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '@/theme';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';

const SignUp = () => {

  const router = useRouter();

  const [ signUpData, setSignUpData ] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
  });

  const onChangeText = (key: string, value: string) => {
    setSignUpData({...signUpData, [key]: value });
  }

  const onSignUp = () => {
    console.log(signUpData);
    if (signUpData.email === 'Poster') {
      router.push('/task-poster');
    }else{
      router.push('/tasker');
    }
  }

  const onSignUpWithGoogle = () => {
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
          <Text style={styles.title}>Join C-WORK</Text>
          <Text style={styles.subTitle}>Fill in your details to get started</Text>

          <View style={styles.inputContainer}>
            <Input placeholder="Full Name" value={signUpData.full_name} type="default" onChangeText={onChangeText} />
            <Input placeholder="Email Address" value={signUpData.email} type="email-address" onChangeText={onChangeText} />
            <Input placeholder="Phone Number" value={signUpData.phone_number} type="default" onChangeText={onChangeText} />
            <Input placeholder="Password" value={signUpData.password} type="default" isPassword onChangeText={onChangeText} />
            <Input placeholder="Confirm Password" value={signUpData.confirm_password} type="default" isPassword onChangeText={onChangeText} />
          </View>

          <Button title="CREATE ACCOUNT" type='primary' onPress={onSignUp} />
          <Text style={styles.optionText}>Or Sign Up with</Text>
          <TouchableOpacity style={styles.googleIconContainer} onPress={onSignUpWithGoogle}>
            <FontAwesome6 name="google" size={36} color={colors.text.bright} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('5%'),
  },
  content: {
    width: wp('80%'),
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
