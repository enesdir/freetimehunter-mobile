import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationButtons from './NavigationButtons';
import { Banner } from './styles';

import Container from '@/components/Container';
import Spacer from '@/components/Spacer';
import { Text } from '@/components/Typography/Text';
import { Title } from '@/components/Typography/Title';
import { useLanguage } from '@/providers/LocalizationProvider';

const Introduction: FC = () => {
  const { translate } = useLanguage();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Spacer size={72} />
        <Banner />
        <Spacer size={32} />
        <Title>{translate('introduction.title')} </Title>
        <Text secondary weight="regular" size="xl">
          {translate('introduction.heroText')}
        </Text>
        <Spacer size={72} />
        <NavigationButtons />
      </Container>
    </SafeAreaView>
  );
};

export default Introduction;
