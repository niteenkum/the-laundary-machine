import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import {spacing} from '../appResources';

export default class Switch extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    disabled: PropTypes.bool,
    activeText: PropTypes.string,
    inActiveText: PropTypes.string,
    backgroundActive: PropTypes.string,
    backgroundInactive: PropTypes.string,
    value: PropTypes.bool,
    circleActiveColor: PropTypes.string,
    circleInActiveColor: PropTypes.string,
    circleSize: PropTypes.number,
    circleBorderActiveColor: PropTypes.string,
    circleBorderInactiveColor: PropTypes.string,
    activeTextStyle: PropTypes.object,
    inactiveTextStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    barHeight: PropTypes.number,
    circleBorderWidth: PropTypes.number,
    innerCircleStyle: PropTypes.object,
    renderInsideCircle: PropTypes.func,
    changeValueImmediately: PropTypes.bool,
    innerCircleStyle: PropTypes.object,
    outerCircleStyle: PropTypes.object,
    renderActiveText: PropTypes.bool,
    renderInActiveText: PropTypes.bool,
    switchLeftPx: PropTypes.number,
    switchRightPx: PropTypes.number,
    switchWidthMultiplier: PropTypes.number,
    switchBorderRadius: PropTypes.number,
    testID: PropTypes.string,
  };

  static defaultProps = {
    value: false,
    onValueChange: () => null,
    renderInsideCircle: () => null,
    innerCircleStyle: {},
    disabled: false,
    activeText: 'On',
    inActiveText: 'Off',
    backgroundActive: 'green',
    backgroundInactive: 'gray',
    circleActiveColor: 'white',
    circleInActiveColor: 'white',
    circleBorderActiveColor: 'rgb(100, 100, 100)',
    circleBorderInactiveColor: 'rgb(80, 80, 80)',
    circleSize: 20,
    barHeight: null,
    circleBorderWidth: 1,
    changeValueImmediately: true,
    innerCircleStyle: {alignItems: 'center', justifyContent: 'center'},
    outerCircleStyle: {},
    renderActiveText: true,
    renderInActiveText: true,
    switchLeftPx: 2,
    switchRightPx: 2,
    switchWidthMultiplier: 2,
    switchBorderRadius: null,
    testID: null,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value,
      transformSwitch: new Animated.Value(
        props.value
          ? props.circleSize / props.switchLeftPx
          : -props.circleSize / props.switchRightPx,
      ),
      backgroundColor: new Animated.Value(props.value ? 20 : -20),
      circleColor: new Animated.Value(props.value ? 20 : -20),
      circleBorderColor: new Animated.Value(props.value ? 20 : -20),
    };
  }

  componentDidUpdate(prevProps) {
    const {value, disabled} = this.props;
    if (prevProps.value === value) {
      return;
    }
    if (prevProps.disabled && disabled === prevProps.disabled) {
      return;
    }

    this.animateSwitch(value, () => this.setState({value}));
  }

  handleSwitch = () => {
    const {value} = this.state;
    const {
      onValueChange,
      disabled,
      changeValueImmediately,
      value: propValue,
    } = this.props;
    if (disabled) {
      return;
    }
    if (this.props.value === this.state.value) {
      onValueChange(!this.state.value);
      return;
    }

    if (changeValueImmediately) {
      this.animateSwitch(!propValue);
      onValueChange(!propValue);
    } else {
      this.animateSwitch(!value, () =>
        this.setState({value: !value}, () => onValueChange(this.state.value)),
      );
    }
  };

  animateSwitch = (value, cb = () => {}) => {
    Animated.parallel([
      Animated.spring(this.state.transformSwitch, {
        toValue: value
          ? this.props.circleSize / this.props.switchLeftPx
          : -this.props.circleSize / this.props.switchRightPx,
      }),
      Animated.timing(this.state.backgroundColor, {
        toValue: value ? 20 : -20,
        duration: 200,
      }),
      Animated.timing(this.state.circleColor, {
        toValue: value ? 20 : -20,
        duration: 200,
      }),
      Animated.timing(this.state.circleBorderColor, {
        toValue: value ? 20 : -20,
        duration: 200,
      }),
    ]).start(cb);
  };

  render() {
    const {transformSwitch, backgroundColor, circleColor, circleBorderColor} =
      this.state;

    const {
      backgroundActive,
      backgroundInactive,
      circleActiveColor,
      circleInActiveColor,
      activeText,
      inActiveText,
      circleSize,
      containerStyle,
      activeTextStyle,
      inactiveTextStyle,
      barHeight,
      circleInactiveBorderColor,
      circleActiveBorderColor,
      circleBorderWidth,
      innerCircleStyle,
      outerCircleStyle,
      renderActiveText,
      renderInActiveText,
      renderInsideCircle,
      switchWidthMultiplier,
      switchBorderRadius,
      value,
      testID,
    } = this.props;

    const interpolatedColorAnimation = backgroundColor.interpolate({
      inputRange: [-20, 20],
      outputRange: [backgroundInactive, backgroundActive],
    });

    const interpolatedCircleColor = circleColor.interpolate({
      inputRange: [-20, 20],
      outputRange: [circleInActiveColor, circleActiveColor],
    });

    const interpolatedCircleBorderColor = circleBorderColor.interpolate({
      inputRange: [-20, 20],
      outputRange: [circleInactiveBorderColor, circleActiveBorderColor],
    });

    return (
      <TouchableWithoutFeedback onPress={this.handleSwitch} testID={testID}>
        <Animated.View
          style={[
            styles.container,
            containerStyle,
            {
              backgroundColor: interpolatedColorAnimation,
              width: circleSize * switchWidthMultiplier,
              height: barHeight || circleSize,
              borderRadius: switchBorderRadius || circleSize,
            },
          ]}>
          <Animated.View
            style={[
              styles.animatedContainer,
              {
                left: transformSwitch,
                width: circleSize * switchWidthMultiplier,
              },
              outerCircleStyle,
            ]}>
            {value && renderActiveText && (
              <Text style={[styles.text, styles.paddingRight, activeTextStyle]}>
                {activeText}
              </Text>
            )}

            <Animated.View
              style={[
                styles.circle,
                {
                  borderWidth: circleBorderWidth,
                  borderColor: interpolatedCircleBorderColor,
                  backgroundColor: interpolatedCircleColor,
                  width: circleSize,
                  height: circleSize,
                  borderRadius: circleSize / 2,
                },
                innerCircleStyle,
              ]}>
              {renderInsideCircle()}
            </Animated.View>
            {!value && renderInActiveText && (
              <Text
                style={[styles.text, styles.paddingLeft, inactiveTextStyle]}>
                {inActiveText}
              </Text>
            )}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: spacing(20),
    height: spacing(20),
    borderRadius: 30,
    backgroundColor: 'black',
  },
  animatedContainer: {
    flex: 1,
    width: spacing(30),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: spacing(1),
    height: spacing(1),
    borderRadius: spacing(10),
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  paddingRight: {
    paddingRight: 0,
  },
  paddingLeft: {
    paddingLeft: 0,
  },
});
