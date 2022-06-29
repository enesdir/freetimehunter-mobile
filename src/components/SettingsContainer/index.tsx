import ResetSection from './ResetSection';
import { Content } from './styles';

import Container from '@/components/Container';
import AppearanceSection from '@/components/SettingsContainer/AppearanceSection';
import Spacer from '@/components/Spacer';
import { Text, Title } from '@/components/Typography/Text';
import { useLanguage } from '@/providers/LocalizationProvider';

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
