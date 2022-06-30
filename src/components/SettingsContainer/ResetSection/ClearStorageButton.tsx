import React, { useCallback } from 'react';
import { Alert } from 'react-native';

import Button from '@/components/Button';
import { ButtonContainer } from '@/components/ButtonContainer';
import { useLanguage } from '@/providers/LocalizationProvider';
import { clear } from '@/utils/storage';

const ClearStorageButton = (): JSX.Element => {
  const { translate } = useLanguage();
  const clearStorage = () =>
    clear().then(() =>
      Alert.alert(
        translate('alertDialog.clearStorageTitle'),
        translate('alertDialog.clearStorageBody'),
        [
          {
            text: translate('alertDialog.clearStorageButton'),
            onPress: () => console.log('OK Pressed'),
          },
        ],
      ),
    );

  return (
    <ButtonContainer>
      <Button buttonSize="full" warning onPress={() => clearStorage()}>
        {translate('settings.clearStorageButton')}
      </Button>
    </ButtonContainer>
  );
};

export default ClearStorageButton;
