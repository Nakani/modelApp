import { StyleSheet } from 'react-native'
export const Styles = StyleSheet.create({
  containerIcon: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  contentIcon: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    textAlign: 'center',
    color: '#E08C00',
  },
  labelIcon: {
    fontSize: 11,
    textAlign: 'center',
    color: '#E08C00'
  },
  contentDescription: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    padding: 10,
    borderTopColor: '#c3c3c3'

  },
  textDescription: {
    color: '#E08C00',
  },
});
