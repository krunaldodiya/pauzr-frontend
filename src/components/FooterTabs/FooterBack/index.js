import * as shape from 'd3-shape';
import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import FooterTabs from '../../FooterTabs';
import FormView from '../../User/FormView';
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get('window');
const height = 64;

const tabs = [
  {
    name: 'home',
    routeName: 'Home'
  },
  {
    name: 'pause',
    routeName: null
  },
  {
    name: 'list',
    routeName: 'Rewards'
  }
];
const tabWidth = width / tabs.length;
const backgroundColor = '#ffffff';

const getPath = () => {
  const left = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([{ x: 0, y: 0 }, { x: width, y: 0 }]);
  const tab = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
    { x: width, y: 0 },
    { x: width + 1, y: 0 },
    { x: width + 10, y: 10 },
    { x: width + 15, y: height },
    { x: width + tabWidth - 15, y: height },
    { x: width + tabWidth - 10, y: 10 },
    { x: width + tabWidth - 5, y: 0 },
    { x: width + tabWidth, y: 0 }
  ]);
  const right = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 }
  ]);
  return `${left} ${tab} ${right}`;
};
const d = getPath();

export default class FooterBack extends React.PureComponent {
  value = new Animated.Value(0);

  render() {
    const { navigation } = this.props;
    const { value } = this;
    const translateX = value.interpolate({
      inputRange: [0, width],
      outputRange: [-width, 0]
    });
    return (
      <>
        <View
          {...{ height, width }}
          style={{
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: 0,
            height: 64,
            backgroundColor: 'transparent',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            elevation:2,
            zIndex:2,
          
          }}
        >
          <View style={{position:"absolute",top:0,justifyContent:"center",alignItems:"center",width:"100%",opacity:0}}>
            <FormView />
          </View>
          <AnimatedSvg
            width={width * 2}
            {...{ height }}
            style={[{ transform: [{ translateX }] }, { position: 'absolute', bottom: 0 }]}
          >
            <Path fill={backgroundColor} {...{ d }} />
          </AnimatedSvg>
          <View>
            <FooterTabs {...{ tabs, value }} {...navigation} style={{ elevation: 5, zIndex: 5 }} />
          </View>
        </View>
      </>
    );
  }
}
