import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import { useTheme } from 'styled-components';

import { Text } from '../Typography/Text';

import { FAQData } from './data';
import { styles } from './styles';

import { useLanguage } from '@/providers/LocalizationProvider';
import { parseLang } from '@/utils/localization/actions';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function Accordion() {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();
  const theme = useTheme();
  const { locale } = useLanguage();
  const data = FAQData[parseLang(locale.locale)];
  return (
    <Transitioning.View ref={ref} transition={transition} style={styles.container}>
      {data.map(({ title, body }, index) => {
        return (
          <TouchableOpacity
            key={title}
            onPress={() => {
              ref.current.animateNextTransition();
              setCurrentIndex(index === currentIndex ? null : index);
            }}
            style={styles.cardContainer}
            activeOpacity={0.6}
          >
            <View style={styles.card}>
              <View style={styles.headingContainer}>
                <Text size="xl" weight="bold">
                  {title}
                </Text>
                <Ionicons
                  name={index === currentIndex ? 'chevron-up-outline' : 'chevron-down-outline'}
                  size={18}
                  color={theme.colors.text}
                />
              </View>
              {index === currentIndex && (
                <View style={styles.subCategoriesList}>
                  <Text size="md">{body}</Text>
                </View>
              )}
            </View>
            <View>
              <View style={styles.divider} />
            </View>
          </TouchableOpacity>
        );
      })}
    </Transitioning.View>
  );
}
