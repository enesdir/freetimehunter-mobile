import React, { useCallback } from 'react';
import { Alert } from 'react-native';

import Button from '@/components/Button';
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
    <Button buttonSize="semiHeight" warning onPress={() => clearStorage()}>
      {translate('settings.clearStorageButton')}
    </Button>
  );
};

export default ClearStorageButton;
