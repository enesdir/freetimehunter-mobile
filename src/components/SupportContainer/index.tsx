import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Accordion from '../Accordion';

import { Content } from './styles';

//import App from '@/components/AccordionList';
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
      <Title>{translate('support.headerTitle')} </Title>
      <Spacer size={4} />
      <Text primary size="3xl">
        <Text style={{ textAlign: 'center' }}>{translate('support.heroText')} </Text>
      </Text>
      <Content>
        <Accordion />
      </Content>
      <Spacer size={70} />
      <Content>
        <ButtonContainer>
          <Button
            secondary
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
