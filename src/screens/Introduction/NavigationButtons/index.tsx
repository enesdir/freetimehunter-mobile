import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';

import Button from '@/components/Button';
import { ButtonContainer } from '@/components/ButtonContainer';
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
    <ButtonContainer>
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
    </ButtonContainer>
  );
};

export default NavigationButtons;
