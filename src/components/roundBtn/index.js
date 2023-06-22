import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {colors, scales, spacing} from '../../appResources';

const RoundBtn = props => {
  const btnStyle = props.type ? styles[props.type] : styles.container;
  return (
    <TouchableOpacity
      disabled={props.disabled || props.loading}
      onLongPress={props.onLongPress}
      onPress={props.onPress}
      style={[btnStyle, props.style]}>
      {props.loading ? (
        <ActivityIndicator size="small" />
      ) : props.title ? (
        <Text style={[props.titleStyle ? props.titleStyle : {}]}>
          {props.title}
        </Text>
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

export default RoundBtn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scales(45),
    paddingHorizontal: spacing(40),
    borderRadius: scales(10),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BTN: {
    alignSelf: 'center',
    backgroundColor: colors.title,
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  BORDER: {
    alignSelf: 'center',
    borderColor: colors.gray,
    borderWidth: 1,
    paddingHorizontal: spacing(16),
    paddingVertical: spacing(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing(5),
  },
  LEFT: {
    height: scales(35),
    // width: scales(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
