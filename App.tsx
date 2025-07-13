import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Раді тебе вітати!</Text>
        <Text>
          Кожен пухнастик заслоговує на дбайливих господарів. Ми допоможемо
          знайти тобі друга
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Вхід</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Регістрація</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <View>
            <TextInput />
          </View>
          <View>
            <TextInput />
          </View>
        </View>
        <TouchableOpacity>
          <Text>Увійти</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;
