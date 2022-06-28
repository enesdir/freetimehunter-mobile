import React from 'react';
import Spacer from '@/components/Spacer';
import { useLanguage } from '@/providers/LocalizationProvider';

import { Text } from '@/components/Typography/Text';
import { SectionContainer } from '../styles';
import ClearStorageButton from './ClearStorageButton';

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
      <Spacer size={64} />
      <ClearStorageButton />
    </SectionContainer>
  );
};

export default ResetSection;
