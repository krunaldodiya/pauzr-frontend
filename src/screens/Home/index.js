import { Text, View } from 'native-base';
import React from 'react';
import BestOffers from '../../components/BestOffers';
import SideDrawer from '../../components/SideDrawer';
import Slider from '../../components/Slider';
import TopBrands from '../../components/TopBrands';
import styles from './styles';

const results = [
  {
    id: 1,
    image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    title: 'Title 1',
    published_at_readable: '24',
    backgroundColor: '#536DFE'
  },
  {
    id: 1,
    image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    title: 'Title 2',
    published_at_readable: '24',
    backgroundColor: '#009688'
  }
];

const top_brands = [
  {
    id: 1,
    image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    title: 'Title 1',
    published_at_readable: '24',
    backgroundColor: '#536DFE'
  },
  {
    id: 1,
    image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    title: 'Title 2',
    published_at_readable: '24',
    backgroundColor: '#009688'
  }
];

const best_offers = [
  {
    id: 1,
    image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    title: 'Title 1',
    published_at_readable: '24',
    backgroundColor: '#536DFE'
  },
  {
    id: 1,
    image_url: 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    title: 'Title 2',
    published_at_readable: '24',
    backgroundColor: '#009688'
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <SideDrawer {...this.props}>
        <View style={styles.greeting}>
          <Text style={styles.greetingSmall}>Welcome</Text>
          <Text style={styles.greetingBig}>SHIVANSHU</Text>
        </View>

        <Slider {...this.props} results={results} />

        <View style={{ flex: 1, backgroundColor: '#000000' }}>
          <TopBrands data={top_brands} />
          <BestOffers data={best_offers} />
        </View>
      </SideDrawer>
    );
  }
}

export default Home;
