import React from 'react';
import Spacer from '@/components/Spacer';
import { useLanguage } from '@/providers/LocalizationProvider';
import { LabelContainer } from './styles';
import SwitchButton from './SwitchButton';
import AppearanceIcon from './AppearanceIcon';
import { Text } from '@/components/Typography/Text';
import { SectionContainer } from '../styles';

const AppearanceSection = (): JSX.Element => {
  const { translate } = useLanguage();
  return (
    <SectionContainer>
      <Text size="md" secondary>
        {translate('settings.appearanceHero')}
      </Text>
      <Text size="md" secondary>
        {translate('settings.appearanceText')}
      </Text>
      <LabelContainer>
        <Text weight="bold" size="md">
          {translate('settings.actualAppearanceText')}
        </Text>
        <Spacer size={20} horizontal />
        <AppearanceIcon size={20} />
      </LabelContainer>
      <Spacer size={16} />
      <Spacer size={32} />
      <SwitchButton />
    </SectionContainer>
  );
};

export default AppearanceSection;
