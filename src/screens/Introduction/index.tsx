import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationButtons from './NavigationButtons';
import { Banner, Container } from './styles';

import { Text } from '@/components/Typography/Text';
import { Title } from '@/components/Typography/Title';
import { useLanguage } from '@/providers/LocalizationProvider';

const Introduction: FC = () => {
  const { translate } = useLanguage();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Banner />
        <Title>{translate('introduction.title')} </Title>
        <Text secondary weight="regular" size="xl">
          {translate('introduction.heroText')}
        </Text>
        <NavigationButtons />
      </Container>
    </SafeAreaView>
  );
};

export default Introduction;
