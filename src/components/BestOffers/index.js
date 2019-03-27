import { ScrollableTab, Tab, Tabs, Text, View } from 'native-base';
import React from 'react';
import theme from '../../libs/theme';
import styles from './styles';

class BestOffers extends React.Component {
  showData(data) {
    return data.map(item => {
      return (
        <View style={{ margin: 5, padding: 5, borderWidth: 1, borderColor: 'white' }}>
          <Text
            numberOfLines={1}
            style={{
              color: 'white',
              fontFamily: theme.fonts.TitilliumWebRegular,
              fontSize: 14
            }}
          >
            {item.description}
          </Text>
        </View>
      );
    });
  }

  showTabs(data) {
    return data.map(item => {
      return (
        <Tab
          heading={item.name}
          key={item.id}
          style={{ backgroundColor: '#000' }}
          activeTabStyle={{ backgroundColor: '#000' }}
          tabStyle={{ backgroundColor: '#000' }}
        >
          {this.showData(item.coupons)}
        </Tab>
      );
    });
  }

  render() {
    const { home } = this.props;
    const { best_offers } = home;

    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
          }}
        >
          <Text style={[styles.text, { fontWeight: 'bold' }]}>Best Offers</Text>
          <Text style={[styles.text, { color: '#FFA000' }]}>View More</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: '#000' }}>
          <Tabs
            style={{ backgroundColor: '#000', paddingHorizontal: 20 }}
            tabsContainerStyle={{ backgroundColor: '#000' }}
            renderTabBar={() => (
              <ScrollableTab
                style={{ backgroundColor: '#000' }}
                tabsContainerStyle={{ backgroundColor: '#000' }}
              />
            )}
          >
            {this.showTabs(best_offers)}
          </Tabs>
        </View>
      </View>
    );
  }
}

export default BestOffers;
