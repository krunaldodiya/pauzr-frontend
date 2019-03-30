import { Spinner, View } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import BestOffers from '../../components/BestOffers';
import SideDrawer from '../../components/SideDrawer';
import Slider from '../../components/Slider';
import TopBrands from '../../components/TopBrands';
import ChipView from '../../components/UIAssets/ChipView';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getInitialData();
  }

  render() {
    const { loading } = this.props;

    // if (loading.effects.home.getInitialData) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center' }}>
    //       <Spinner size="small" color="#000" />
    //     </View>
    //   );
    // }

    return (
      <SideDrawer {...this.props}>
        <View style={styles.greeting}>
          <Text style={styles.greetingSmall}>Welcome</Text>
          <Text style={styles.greetingBig}>SHIVANSHU</Text>
        </View>
        <Slider {...this.props} />

        <TopBrands {...this.props} />
        <BestOffers {...this.props} />
      </SideDrawer>
    );
  }
}

export default Home;
