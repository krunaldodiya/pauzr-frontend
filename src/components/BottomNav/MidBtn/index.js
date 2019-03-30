import React from 'react';
import { Animated, TouchableOpacity, Vibration, View } from 'react-native';

export default class MidBtn extends React.Component {
  constructor(props) {
    super(props);

    this.activation = new Animated.Value(0);
    this.state = {
      totalCount: false,
      active: false
    };
  }

  actionPressed = route => {
    this.togglePressed();

    const { actionVibration, navigationDelay } = this.props;

    actionVibration && Vibration.vibrate();

    if (route.routeName) {
      setTimeout(
        () =>
          this.props.navigation.navigate({
            routeName: route.routeName
          }),
        DEFAULT_NAVIGATION_DELAY
      );
    }

    route.onPress && route.onPress();
  };

  togglePressed = () => {
    const {
      routes,
      toggleVibration,

      animateIcon
    } = this.props;

    if (this.state.active) {
      this.setState({ active: false });

      Animated.parallel([
        animateIcon &&
          Animated.timing(this.activation, {
            toValue: 0,
            duration: DEFAULT_TOGGLE_ANIMATION_DURATION
          }),
        Animated.stagger(
          DEFAULT_ACTION_STAGING_DURATION,
          routes.map((v, i) =>
            Animated.timing(this[`actionActivation_${routes.length - 1 - i}`], {
              toValue: 0,
              duration: DEFAULT_ACTION_ANIMATION_DURATION
            })
          )
        )
      ]).start();
    } else {
      this.setState({ active: true });

      Animated.parallel([
        animateIcon &&
          Animated.timing(this.activation, {
            toValue: 1,
            duration: DEFAULT_TOGGLE_ANIMATION_DURATION
          }),
        Animated.stagger(
          DEFAULT_ACTION_STAGING_DURATION,
          routes.map((v, i) =>
            Animated.timing(this[`actionActivation_${i}`], {
              toValue: 1,
              duration: DEFAULT_ACTION_ANIMATION_DURATION
            })
          )
        )
      ]).start();
    }

    toggleVibration && Vibration.vibrate();
  };

  renderActions = () => {
    const { routes } = this.props;

    const STEP = DEFAULT_EXPANDING_ANGLE / routes.length;

    return routes.map((route, i) => {
      const offset = (STEP * (i + 1)) / DEFAULT_EXPANDING_ANGLE - 0.5;
      const angle = -90 + DEFAULT_EXPANDING_ANGLE * offset - STEP / 2;
      const radius = 80;

      const x = radius * Math.cos((-angle * Math.PI) / 180);
      const y = radius * Math.sin((-angle * Math.PI) / 180);

      const activationScale = this[`actionActivation_${i}`].interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1]
      });

      const activationPositionX = this[`actionActivation_${i}`].interpolate({
        inputRange: [0, 1],
        outputRange: [0, x]
      });

      const activationPositionY = this[`actionActivation_${i}`].interpolate({
        inputRange: [0, 1],
        outputRange: [0, y]
      });

      const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

      return (
        <Animated.View
          key={`actionActivation_${i}`}
          style={[
            Styles.actionContainer,
            {
              marginLeft: -actionSize / 2,
              left: activationPositionX,
              bottom: activationPositionY,
              transform: [{ scale: activationScale }],
              elevation: -1,
              zIndex: -1
            }
          ]}
        >
          <AnimatedTouchable
            style={[
              Styles.actionContent,
              {
                width: actionSize,
                height: actionSize,
                borderRadius: actionSize / 2,
                backgroundColor: route.color,

                elevation: -1,
                zIndex: -1
              }
            ]}
            onPress={() => this.actionPressed(route)}
          >
            {route.icon}
          </AnimatedTouchable>
        </Animated.View>
      );
    });
  };
  
  makeActivations = routes => {
    routes.forEach((v, i) => (this[`actionActivation_${i}`] = new Animated.Value(0)));
    this.setState({ totalCount: true });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.routes !== this.props.routes) {
      this.makeActivations(nextProps.routes);
    }
  }

  componentDidMount() {
    this.makeActivations(this.props.routes);
  }

  render() {
    const { icon } = this.props;

    const activationRotate = this.activation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '135deg']
    });

    const activationScale = this.activation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.25, 1]
    });

    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    return (
      <View pointerEvents="box-none" style={Styles.container}>
        {this.state.totalCount && <View style={Styles.actionsWrapper}>{this.renderActions()}</View>}
        <AnimatedTouchable onPress={this.togglePressed} activeOpacity={1}>
          <Animated.View
            style={[
              Styles.toggleButton,
              {
                transform: [{ rotate: activationRotate }, { scale: activationScale }],
                width: toggleBtnSize,
                height: toggleBtnSize,
                borderRadius: toggleBtnSize / 2,
                backgroundColor: 'teal'
              }
            ]}
          >
            {icon}
          </Animated.View>
        </AnimatedTouchable>
      </View>
    );
  }
}

const toggleBtnSize = 75;
const actionSize = 55;
const DEFAULT_TOGGLE_ANIMATION_DURATION = 300;
const DEFAULT_ACTION_STAGING_DURATION = 100;
const DEFAULT_ACTION_ANIMATION_DURATION = 200;
const DEFAULT_NAVIGATION_DELAY = 500;
const DEFAULT_EXPANDING_ANGLE = 155;

const Styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"red",
    height:100,
  },
  toggleButton: {
    elevation: 10,
    zIndex: 10,

    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleIcon: {
    fontSize: 30,
    color: 'white'
  },
  actionsWrapper: {
    position: 'absolute',
    bottom: 0
  },
  actionContainer: {
    position: 'absolute'
  },
  actionContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};
