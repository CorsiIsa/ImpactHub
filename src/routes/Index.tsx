import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './stack.routes';
import DrawerNavigation from './drawer.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
