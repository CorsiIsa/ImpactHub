import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import { RootStackParamsList } from '../types/navigation'
import TabNavigation from './tabs.routes'
import SobreNos from '../screens/SobreNos'
import Insight from '../screens/Insight'

const DrawerNavigator = createDrawerNavigator<RootStackParamsList>()

export default function DrawerNavigation() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name='Home' component={TabNavigation} options={{
        drawerIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
      }} />
      <DrawerNavigator.Screen name='SobreNos' component={SobreNos} options={{
        drawerIcon: ({ color, size }) => <Feather name='user' size={size} color={color} />
      }} />
      <DrawerNavigator.Screen name='Insight' component={Insight} options={{
        drawerIcon: ({ color, size }) => <Feather name='user' size={size} color={color} />
      }} />
    </DrawerNavigator.Navigator>
  )
}