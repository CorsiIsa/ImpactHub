import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import FormEndereco from '../screens/FormEndereco'
import { RootStackParamsList } from '../types/navigation'
import DrawerNavigation from './drawer.routes'
import TabNavigation from './tabs.routes'

const StackNavigator = createNativeStackNavigator<RootStackParamsList>()

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='FormEndereco' component={FormEndereco} options={{ headerShown: false }} />
      <StackNavigator.Screen name='Home' component={DrawerNavigation} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}