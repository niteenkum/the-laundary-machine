import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './colors';
import {scales, spacing, svgHeight} from './others';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container2: {
    flex: 0.3,
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  dots: {
    marginBottom: spacing(50),
    width: scales(12),
    height: scales(12),
    borderRadius: scales(6),
  },
  header: {
    flex: 1,
    paddingHorizontal: spacing(20),
    paddingTop: spacing(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon2: {
    margin: spacing(10),
    width: svgHeight(55),
    height: svgHeight(55),
    padding: spacing(14),
    borderRadius: scales(30),
    backgroundColor: colors.card,
    elevation: 5,
  },
  icon3: {
    marginLeft: spacing(30),
    backgroundColor: colors.green,
    padding: spacing(15),
    borderRadius: spacing(25),
  },
  card2: {
    position: 'absolute',
    top: -spacing(45),
    margin: spacing(10),
    backgroundColor: colors.transWhite,
  },
  card3: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: spacing(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.ligthGray2,
    alignItems: 'flex-end',
  },
  card4: {
    position: 'absolute',
    width: '94%',
    top: '20%',
    alignSelf: 'center',
    elevation: 2,
  },
  card5: {
    margin: spacing(5),
    padding: 0,
    elevation: 1,
    shadowOpacity: 0.2,
  },
  card6: {
    width: '100%',
    shadowOpacity: 0,
    backgroundColor: colors.ligthGray2,
    marginBottom: spacing(10),
    padding: spacing(10),
  },
  line: {
    width: '95%',
    height: 1,
    marginVertical: spacing(4),
    backgroundColor: colors.ligthGray,
    alignSelf: 'center',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: colors.card2,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: colors.card2,
  },
  notibox: {
    flexDirection: 'row',
    padding: spacing(15),
    alignItems: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },
  notiInner: {
    backgroundColor: colors.primary,
    padding: spacing(5),
    borderRadius: spacing(30),
    overflow: 'hidden',
  },
});
export default styles;
