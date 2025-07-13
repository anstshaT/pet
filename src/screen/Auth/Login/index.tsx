import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import { useState } from 'react';

interface InputValue {
  email: string;
  password: string;
  errorEmail: null | string;
  errorPassword: null | string;
}

export default function LoginPage() {
  const [inputValues, setInputValues] = useState<InputValue>({
    email: '',
    password: '',
    errorEmail: null,
    errorPassword: null,
  });

  const handleChangeText = (
    key: 'email' | 'password' | 'errorEmail' | 'errorPassword',
    value: string | null,
  ) => {
    setInputValues(prevState => ({ ...prevState, [key]: value }));
  };

  const checkEmail = () => {
    const emailValidator = new RegExp(
      '^([a-z0-9._%-]+@[a-z0-9.-]+.[a-z]{2,6})*$',
    );
    if (!emailValidator.test(inputValues.email)) {
      handleChangeText('errorEmail', 'Not valid email');
    } else {
      handleChangeText('errorEmail', null);
    }
  };

  const checkPassword = text => {
    if (text.length < 8) {
      handleChangeText('errorPassword', 'Password must be more than 8 symbols');
    } else {
      handleChangeText('errorPassword', null);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.mainWrapper]}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({ android: 20, ios: 90 })}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Раді тебе вітати!</Text>
            <Text style={styles.welcomeText}>
              Кожен пухнастик заслуговує на дбайливих господарів.Ми допоможемо
              тобі знайти друга.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.authText}>Вхід</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registrationBtn}>
              <Text style={styles.authText}>Реєстрація</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={'Email'}
                style={styles.input}
                onBlur={() => {
                  checkEmail();
                }}
                placeholderTextColor={'#838383'}
                value={inputValues.email}
                onChangeText={text => handleChangeText('email', text)}
              />
            </View>
            {inputValues.errorEmail && <Text>{inputValues.errorEmail}</Text>}

            <View style={styles.inputContainer}>
              <TextInput
                placeholder={'Password'}
                style={styles.input}
                placeholderTextColor={'#838383'}
                value={inputValues.password}
                onChangeText={text => {
                  handleChangeText('password', text);
                  checkPassword(text);
                }}
                secureTextEntry
              />
            </View>
            {inputValues.errorPassword && (
              <Text>{inputValues.errorPassword}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.loginBtnContainer}>
            <Text style={styles.loginText}>Увійти</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
