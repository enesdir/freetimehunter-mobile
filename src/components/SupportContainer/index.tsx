import Spacer from '@/components/Spacer';
import { useLanguage } from '@/providers/LocalizationProvider';
import Container from '@/components/Container';
import { Content, Button, Label } from './styles';
import { Text, Title } from '@/components/Typography/Text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
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
        <Button primary onPress={() => navigate('Onboard', { screen: 'Settings' })}>
          <Label primary>{translate('support.settingButton')} </Label>
        </Button>
      </Content>
      <Spacer size={64} />
    </Container>
  );
};

export default SupportContainer;
