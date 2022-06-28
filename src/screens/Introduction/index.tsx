import { FC } from 'react';
import { useLanguage } from '@/providers/LocalizationProvider';
import NavigationButtons from './NavigationButtons';
import { Banner, Container } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Title, Text } from '@/components/Typography/Text';

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
