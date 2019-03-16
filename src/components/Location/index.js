import { Icon, Input, Text, View } from 'native-base';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import theme from '../../libs/theme';
import styles from './styles';

class Location extends React.Component {
  componentWillMount() {
    this.props.getLocation();
  }

  handleLocationChange = selectedLocation => {
    this.setState({ selectedLocation });

    if (selectedLocation.length > 2) {
      const filteredCities = citiesList.filter(city => {
        return city.name.match(new RegExp(`^${selectedLocation}`, 'gi'));
      });

      this.setState({ cities: filteredCities });
    }
  };

  handleLocationClear = () => {
    const authUser = { ...this.state.authUser, city: null, state: null };

    this.setState({
      selectedLocation: null,
      authUser
    });
  };

  handleLocationSelect = city => {
    const authUser = {
      ...this.state.authUser,
      city: city.name,
      state: city.state
    };

    this.setState({
      cities: [],
      selectedLocation: `${city.name}, ${city.state}`,
      authUser
    });
  };

  render() {
    const { auth, cities, selectedLocation } = this.props;

    const { authUser, errors } = auth;
    const { city, state } = authUser;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Input
            ref={c => (this.location = c)}
            editable={!(city && state)}
            placeholder={
              errors && (errors.errors.city || errors.errors.state)
                ? errors.errors.city[0] || errors.errors.state[0]
                : 'Select a Location'
            }
            placeholderTextColor={errors ? '#e74c3c' : '#000'}
            autoCorrect={false}
            value={selectedLocation}
            onChangeText={keywords => this.handleLocationChange(keywords)}
            style={styles.input(false)}
          />

          {city && (
            <TouchableOpacity
              style={{ paddingRight: 10, justifyContent: 'center' }}
              onPress={() => {
                this.handleLocationClear();
                this.location._root.focus();
              }}
            >
              <Icon type="MaterialIcons" name="cancel" style={{ color: '#3d3d3d', fontSize: 22 }} />
            </TouchableOpacity>
          )}
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          {cities.map(city => (
            <Text
              key={city.id}
              autoCorrect={false}
              style={{
                color: '#000',
                padding: 10,
                fontFamily: theme.fonts.TitilliumWebRegular,
                fontSize: 16
              }}
              onPress={() => this.handleLocationSelect(city)}
            >
              {`${city.name}, ${city.state}`}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Location;
