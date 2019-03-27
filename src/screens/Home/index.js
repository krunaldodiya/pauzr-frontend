import { Spinner, View } from 'native-base';
import React from 'react';
import BestOffers from '../../components/BestOffers';
import SideDrawer from '../../components/SideDrawer';
import Slider from '../../components/Slider';
import TopBrands from '../../components/TopBrands';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getInitialData();
  }

  render() {
    const { loading } = this.props;

    if (loading.global) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Spinner size="small" color="#000" />
        </View>
      );
    }

    return (
      <SideDrawer>
        <Slider {...this.props} />
        <TopBrands {...this.props} />
        <BestOffers {...this.props} />
      </SideDrawer>
    );
  }
}

export default Home;
