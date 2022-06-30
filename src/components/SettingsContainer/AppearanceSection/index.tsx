import React from 'react';

import { SectionContainer } from '../styles';

import AppearanceIcon from './AppearanceIcon';
import { LabelContainer } from './styles';
import SwitchButton from './SwitchButton';

import Spacer from '@/components/Spacer';
import { Text } from '@/components/Typography/Text';
import { useLanguage } from '@/providers/LocalizationProvider';

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
        <Spacer size={8} horizontal />
        <AppearanceIcon size={20} />
      </LabelContainer>
      <Spacer size={8} />
      <SwitchButton />
    </SectionContainer>
  );
};

export default AppearanceSection;
