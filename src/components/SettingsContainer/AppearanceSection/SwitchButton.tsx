import React, { useCallback } from 'react';
import Spacer from '@/components/Spacer';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Pressable } from 'react-native';
import { useAppearance } from '@/providers/AppearanceProvider';
import { useLanguage } from '@/providers/LocalizationProvider';

import { SwitchButtonContainer, SwitchCircleInner } from './styles';
import { Text } from '@/components/Typography/Text';
import AppearanceIcon from './AppearanceIcon';
import { deviceDimensions } from '@/utils/device-dimensions';

const SwitchButton = (): JSX.Element => {
  const { toggleAppearance, appearance } = useAppearance();
  const { translate } = useLanguage();

  const SWITCH_INITIAL_VALUE = deviceDimensions(2);
  const SWITCH_FINAL_VALUE = deviceDimensions(46);

  const switchCircleX = useSharedValue(
    appearance === 'dark' ? SWITCH_FINAL_VALUE : SWITCH_INITIAL_VALUE,
  );

  const switchCircleXStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      left: switchCircleX.value,
    };
  });

  const handleSwitchCircleX = useCallback(() => {
    switchCircleX.value = withTiming(
      appearance === 'light' ? SWITCH_FINAL_VALUE : SWITCH_INITIAL_VALUE,
      {
        duration: 1000,
        easing: Easing.bounce,
      },
    );
    toggleAppearance();
  }, [switchCircleX, appearance, toggleAppearance, SWITCH_INITIAL_VALUE, SWITCH_FINAL_VALUE]);

  return (
    <SwitchButtonContainer>
      <Text size="lg">{translate('settings.switchAppearanceText')}</Text>
      <Spacer size={24} />
      <Pressable
        style={{ justifyContent: 'center', alignContent: 'center' }}
        onPress={() => handleSwitchCircleX()}
      >
        <SwitchCircleInner>
          <Animated.View style={switchCircleXStyle}>
            <AppearanceIcon size={20} />
          </Animated.View>
        </SwitchCircleInner>
      </Pressable>
    </SwitchButtonContainer>
  );
};

export default SwitchButton;
