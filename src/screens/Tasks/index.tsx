import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, useEffect } from 'react';
import { Alert, Button } from 'react-native';

import { Container, Text } from './styles';

import { RootStackParams } from '@/types/navigation';
import { clear } from '@/utils/storage';
type NavigationProp = NativeStackNavigationProp<RootStackParams, 'App'>;

export default function Tasks({ navigation }) {
  const { navigate } = useNavigation<NavigationProp>();
  const clearStorage = () =>
    clear().then(() =>
      Alert.alert('Alert Title', 'My Alert Msg', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]),
    );
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      console.log('do 1');
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  return (
    <Container>
      <Button onPress={() => clearStorage()} title={'remove'} />
      <Text>Account</Text>
    </Container>
  );
}
