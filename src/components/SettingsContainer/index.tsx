import Spacer from '@/components/Spacer';
import AppearanceSection from '@/components/SettingsContainer/AppearanceSection';
import { useLanguage } from '@/providers/LocalizationProvider';
import Container from '@/components/Container';
import { Content } from './styles';
import { Text, Title } from '@/components/Typography/Text';
import ResetSection from './ResetSection';

const SettingsContainer = (): JSX.Element => {
  const { translate } = useLanguage();

  return (
    <Container>
      <Spacer size={32} />
      <Title>{translate('settings.headerTitle')}</Title>
      <Spacer size={32} />
      <Text primary size="3xl">
        {translate('settings.appearanceTitle')}
      </Text>
      <Spacer size={32} />
      <Content>
        <AppearanceSection />
      </Content>
      <Spacer size={64} />
      <Text>{translate('settings.clearStorageTitle')}</Text>
      <Spacer size={32} />
      <Content>
        <ResetSection />
      </Content>
    </Container>
  );
};

export default SettingsContainer;
