import { Spinner, Text, View, Content } from 'native-base';
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
    const { loading } = this.props;

    if (loading.global) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Spinner size="small" color="#000" />
        </View>
      );
    }

    return (
      <SideDrawer {...this.props}>
        <Content contentContainerStyle={{ flex: 1 }}>
          <Slider {...this.props} />
          <TopBrands {...this.props} />
          <BestOffers {...this.props} />
        </Content>
      </SideDrawer>
    );
  }
}

export default Home;
