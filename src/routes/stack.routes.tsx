import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import FormEndereco from '../screens/FormEndereco'
import { RootStackParamsList } from '../types/navigation'

const StackNavigator = createNativeStackNavigator<RootStackParamsList>()

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='FormEndereco' component={FormEndereco} options={{ headerShown: false }} />
      <StackNavigator.Screen name='Home' component={Home} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}