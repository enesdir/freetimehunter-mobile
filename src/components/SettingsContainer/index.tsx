import ResetSection from './ResetSection';
import { Content } from './styles';

import Container from '@/components/Container';
import AppearanceSection from '@/components/SettingsContainer/AppearanceSection';
import Spacer from '@/components/Spacer';
import { Text } from '@/components/Typography/Text';
import { Title } from '@/components/Typography/Title';
import { useLanguage } from '@/providers/LocalizationProvider';

const SettingsContainer = (): JSX.Element => {
  const { translate } = useLanguage();

  return (
    <Container>
      <Title>{translate('settings.headerTitle')}</Title>
      <Spacer size={4} />
      <Text primary size="2xl" weight="bold">
        {translate('settings.appearanceTitle')}
      </Text>
      <Spacer size={4} />
      <Content>
        <AppearanceSection />
      </Content>
      <Spacer size={4} />
      <Text primary weight="bold" size="2xl">
        {translate('settings.clearStorageTitle')}
      </Text>
      <Spacer size={4} />
      <Content>
        <ResetSection />
      </Content>
    </Container>
  );
};

export default SettingsContainer;
