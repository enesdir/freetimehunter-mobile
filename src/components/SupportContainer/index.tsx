import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Content } from './styles';

import Button from '@/components/Button';
import { ButtonContainer } from '@/components/ButtonContainer';
import Container from '@/components/Container';
import Spacer from '@/components/Spacer';
import { Text } from '@/components/Typography/Text';
import { Title } from '@/components/Typography/Title';
import { useLanguage } from '@/providers/LocalizationProvider';
import { RootStackParams } from '@/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParams, 'Onboard'>;

const SupportContainer = (): JSX.Element => {
  const { translate } = useLanguage();
  const { navigate } = useNavigation<NavigationProp>();
  return (
    <Container>
      <Spacer size={32} />
      <Title>{translate('support.headerTitle')} </Title>
      <Spacer size={32} />
      <Text primary size="3xl">
        <Text>{translate('support.heroText')} </Text>
      </Text>
      <Spacer size={32} />
      <Content>
        <ButtonContainer>
          <Button
            primary
            buttonSize="full"
            onPress={() => navigate('Onboard', { screen: 'Settings' })}
          >
            {translate('support.settingButton')}
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default SupportContainer;
