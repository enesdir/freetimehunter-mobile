import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  container: {
    flex: 1,
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  subCategoriesList: {
    marginTop: 2,
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
  },
});
