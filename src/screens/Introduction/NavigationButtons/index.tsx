import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '@/types/navigation';
import { FC } from 'react';
import { Button, Container, Label } from './styles';
import { useSettings } from '@/providers/SettingsProvider';
import { useLanguage } from '@/providers/LocalizationProvider';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Onboard'>;

const NavigationButtons: FC = () => {
  const { navigate } = useNavigation<NavigationProp>();
  const { setDisableOnboard } = useSettings();
  const { translate } = useLanguage();

  const handleApp = () => {
    setDisableOnboard();
    navigate('App', { screen: 'Tasks' });
  };

  return (
    <Container>
      <Button onPress={() => navigate('Onboard', { screen: 'Support' })}>
        <Label>{translate('introduction.supportButton')}</Label>
      </Button>
      <Button primary onPress={handleApp}>
        <Label primary>{translate('introduction.enterButton')}</Label>
      </Button>
    </Container>
  );
};

export default NavigationButtons;
