import { Icon } from 'native-base';
import React from 'react';
import { Animated, Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const { width } = Dimensions.get('window');

class FooterTabs extends React.PureComponent {
  values = [];

  constructor(props) {
    super(props);
    const { tabs } = this.props;
    this.values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));
  }

  onPress = index => {
    const { value, tabs } = this.props;
    const routeName = tabs[index].routeName;
    const tabWidth = width / tabs.length;
    Animated.sequence([
      Animated.parallel(
        this.values.map(v =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
          })
        )
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,

          useNativeDriver: true
        }),
        Animated.spring(this.values[index], {
          toValue: 1,
          useNativeDriver: true
        })
      ])
    ]).start(() => (index !== 1 ? this.props.navigation.replace(routeName) : false));
  };
  componentDidMount() {
    this.onPress(1);
  }

  render() {
    const { navigation } = this.props;
    console.log('navigation at front ' + navigation);
    const { onPress } = this;
    const { tabs, value } = this.props;
    return (
<<<<<<< HEAD
      <View style={styles.container}>
        {tabs.map((tab, key) => {
          const tabWidth = (width - 40) / tabs.length;
          const cursor = tabWidth * key;
          const opacity = value.interpolate({
            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
          });
          const translateY = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0],
            extrapolate: 'clamp'
          });
          const opacity1 = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp'
          });
          return (
            <React.Fragment {...{ key } }>
              <TouchableWithoutFeedback onPress={() => onPress(key)}>
                <Animated.View style={[styles.tab, { opacity }]}>
                  <Icon name={tab.name} color="black" size={25} />
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: 'absolute',
                  top: -24,
                  left: (width / tabs.length) * key,
                  width: width / tabs.length,
                  height: 64,
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: opacity1,
                  transform: [{ translateY }]
                }}
              >
                <View style={styles.activeIcon}>
                  <Icon name={tab.name} color="white" size={25} />
                </View>
              </Animated.View>
            </React.Fragment>
          );
        })}
      </View>
=======
      <Footer style={styles.container}>
        <FooterTab style={styles.footer}>
          <Button style={styles.icon} onPress={() => navigation.replace('Home')}>
            <Text>Home</Text>
          </Button>

          <Button style={styles.icon} onPress={() => navigation.replace('Timer')}>
            <Text>Timer</Text>
          </Button>

          <Button style={styles.icon} onPress={() => navigation.replace('Rewards')}>
            <Text>Rewards</Text>
          </Button>
        </FooterTab>
      </Footer>
>>>>>>> 6d7e9b3aefea79153f60342f26545d16ed0e32a7
    );
  }
}

// export default class FooterTabs extends Component {
//   render() {
//     const { navigation } = this.props;

//     return (
//       <Footer style={styles.container}>
//         <FooterTab style={styles.footer}>
//           <Button style={styles.icon} onPress={() => navigation.replace('EditProfile')}>
//             <Text>Home</Text>
//           </Button>

//           <Button style={styles.icon} onPress={() => navigation.replace('Timer')}>
//             <Text>Timer</Text>
//           </Button>

//           <Button style={styles.icon} onPress={() => navigation.replace('Rewards')}>
//             <Text>Rewards</Text>
//           </Button>
//         </FooterTab>
//       </Footer>
//     );
//   }
// }

export default withNavigation(FooterTabs);
