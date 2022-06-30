import React from 'react';

import { SectionContainer } from '../styles';

import ClearStorageButton from './ClearStorageButton';

import Spacer from '@/components/Spacer';
import { Text } from '@/components/Typography/Text';
import { useLanguage } from '@/providers/LocalizationProvider';

const ResetSection = (): JSX.Element => {
  const { translate } = useLanguage();

  return (
    <SectionContainer>
      <Text size="md" secondary>
        {translate('settings.clearStorageHero')}
      </Text>
      <Text weight="bold" size="md" warning>
        {translate('settings.clearStorageText')}
      </Text>
      <Spacer size={32} />
      <ClearStorageButton />
    </SectionContainer>
  );
};

export default ResetSection;
