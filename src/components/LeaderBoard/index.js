import { Body, Button, Left, List, ListItem, Segment, Text, Thumbnail, View } from 'native-base';
import React from 'react';
import { FlatList, Image } from 'react-native';
import theme from '../../libs/theme';

class LeaderBoard extends React.Component {
  showData(data) {
    const { item } = data;

    return (
      <List style={{ backgroundColor: 'lightcyan' }}>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              {item.name}
            </Text>
            <Text
              note
              style={{
                marginTop: 5,
                fontSize: 12,
                color: 'green',
                fontFamily: theme.fonts.TitilliumWebSemiBold
              }}
            >
              subtitle
            </Text>
          </Body>
        </ListItem>
      </List>
    );
  }

  render() {
    const users = [
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Movies',
        header: true
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Interstellar',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Dark Knight',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Pop',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Pulp Fiction',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Burning Train',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Music',
        header: true
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Adams',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Nirvana',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Amrit Maan',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Oye Hoye',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Eminem',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Places',
        header: true
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Jordan',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Punjab',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Ludhiana',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Jamshedpur',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'India',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'People',
        header: true
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Jazzy',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Appie',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Baby',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Sunil',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Arrow',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'Things',
        header: true
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'table',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'chair',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'fan',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'cup',
        header: false
      },
      {
        image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        name: 'cube',
        header: false
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#333',
            height: 150,
            padding: 20
          }}
        >
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 18,
                color: 'cyan'
              }}
            >
              Rank
            </Text>
            <Text style={{ color: 'white', marginTop: 10, textAlign: 'center' }}>#7</Text>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              borderWidth: 5,
              borderColor: 'yellow',
              borderRadius: 100
            }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1GJKVZGaI2IQ6VU6Na6pCw6OfxDX5z7kCuxTCDULA2Pwukvv8w'
            }}
          />

          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 18,
                color: 'cyan'
              }}
            >
              Points
            </Text>
            <Text style={{ color: 'white', marginTop: 10, textAlign: 'center' }}>1250</Text>
          </View>
        </View>

        <Segment style={{ backgroundColor: '#333', paddingTop: 20, paddingBottom: 30 }}>
          <Button style={{}} first>
            <Text>Daily</Text>
          </Button>

          <Button style={{}} second active>
            <Text>Weekly</Text>
          </Button>

          <Button style={{}} last>
            <Text>Monthly</Text>
          </Button>
        </Segment>

        <View style={{ flex: 1 }}>
          <FlatList data={users} renderItem={data => this.showData(data)} />
        </View>
      </View>
    );
  }
}

export default LeaderBoard;
