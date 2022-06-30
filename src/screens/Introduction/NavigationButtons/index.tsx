import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';

import { Container } from './styles';

import Button from '@/components/Button';
import { useLanguage } from '@/providers/LocalizationProvider';
import { useSettings } from '@/providers/SettingsProvider';
import { RootStackParams } from '@/types/navigation';

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
      <Button
        secondary
        buttonSize="semiWidth"
        onPress={() => navigate('Onboard', { screen: 'Support' })}
      >
        {translate('introduction.supportButton')}
      </Button>
      <Button primary buttonSize="semiWidth" onPress={handleApp}>
        {translate('introduction.enterButton')}
      </Button>
    </Container>
  );
};

export default NavigationButtons;
