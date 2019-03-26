import { Spinner, Text, View } from 'native-base';
import React from 'react';
import BestOffers from '../../components/BestOffers';
import SideDrawer from '../../components/SideDrawer';
import Slider from '../../components/Slider';
import TopBrands from '../../components/TopBrands';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getInitialData();
  }

  render() {
    const { home, loading } = this.props;
    const { top_brands, best_offers, banners } = home;

    if (loading.global) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Spinner size="small" color="#000" />
        </View>
      );
    }

    return (
      <SideDrawer {...this.props}>
        <View style={styles.greeting}>
          <Text style={styles.greetingSmall}>Welcome</Text>
          <Text style={styles.greetingBig}>SHIVANSHU</Text>
        </View>

        <Slider {...this.props} data={banners} />

        <View style={{ flex: 1, backgroundColor: '#000000' }}>
          <TopBrands data={top_brands} />

          <BestOffers data={best_offers} />
        </View>
      </SideDrawer>
    );
  }
}

export default Home;
