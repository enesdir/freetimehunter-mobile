import React, { useCallback } from 'react';
import { Alert, Button } from 'react-native';

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
    <>
      <Button onPress={() => clearStorage()} title={translate('settings.clearStorageButton')} />
    </>
  );
};

export default ClearStorageButton;
