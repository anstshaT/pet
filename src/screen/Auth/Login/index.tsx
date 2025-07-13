import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function LoginPage() {
  return (
    <View style={[styles.mainWrapper]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Раді тебе вітати!</Text>
        <Text style={styles.welcomeText}>
          Кожен пухнастик заслуговує на дбайливих господарів.Ми допоможемо тобі
          знайти друга.
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
            placeholderTextColor={'#838383'}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={'Password'}
            style={styles.input}
            placeholderTextColor={'#838383'}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginBtnContainer}>
        <Text style={styles.loginText}>Увійти</Text>
      </TouchableOpacity>
    </View>
  );
}
