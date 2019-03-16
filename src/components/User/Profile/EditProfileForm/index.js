import { Thumbnail } from 'native-base';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { uploadAvatar } from '../../../../services';
import Location from '../../../Location';
import Switch from '../../../Switch';
import styles from './styles';

const citiesList = require('../../../../../assets/js/cities.json');

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);

    const { authUser } = props.auth;
    const { city, state } = authUser;

    this.state = {
      cities: [],
      selectedLocation: city && state ? `${city}, ${state}` : null
    };
  }

  updateData = data => {
    const { auth, handleInput } = this.props;
    const { authUser } = auth;

    handleInput({ authUser: { ...authUser, ...data } });
  };

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
    const { auth, toggleKeyboardAvoidView } = this.props;
    const { authUser, errors } = auth;

    const options = { cropping: true, height: 480, width: 480 };

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => {
              return uploadAvatar(options)
                .then(response => {
                  this.updateData({ avatar: response.remote.secure_url });
                })
                .catch(error => {
                  console.log(error);
                });
            }}
          >
            <Thumbnail
              source={{ uri: authUser.avatar }}
              style={{ height: 90, width: 90, borderRadius: 90 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
          <Switch
            width={250}
            options={['Male', 'Female']}
            selected={authUser.gender}
            onChange={gender => this.updateData({ gender })}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            onFocus={() => toggleKeyboardAvoidView(false)}
            placeholder={errors && errors.errors.name ? errors.errors.name[0] : 'Full Name'}
            placeholderTextColor={errors && errors.errors.name ? '#e74c3c' : '#000'}
            autoCorrect={false}
            value={errors && errors.errors.name ? null : authUser.name}
            onChangeText={name => this.updateData({ name })}
            style={styles.input(errors && errors.errors.name)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Location
            {...this.props}
            cities={cities}
            handleLocationChange={this.handleLocationChange}
            handleLocationClear={this.handleLocationClear}
            handleLocationSelect={this.handleLocationSelect}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            onFocus={() => toggleKeyboardAvoidView(false)}
            placeholder={errors && errors.errors.email ? errors.errors.email[0] : 'Email Address'}
            placeholderTextColor={errors && errors.errors.email ? '#e74c3c' : '#000'}
            autoCorrect={false}
            value={errors && errors.errors.email ? null : authUser.email}
            onChangeText={email => this.updateData({ email })}
            style={styles.input(errors && errors.errors.email)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInputMask
            onFocus={() => toggleKeyboardAvoidView(false)}
            refInput={ref => (this.myDateText = ref)}
            type={'datetime'}
            options={{ format: 'DD-MM-YYYY' }}
            placeholder={errors && errors.errors.dob ? errors.errors.dob[0] : '25-08-1990'}
            placeholderTextColor={errors ? '#e74c3c' : '#000'}
            autoCorrect={false}
            value={authUser.dob}
            onChangeText={dob => this.updateData({ dob })}
            style={styles.input(errors && errors.errors.dob)}
          />
        </View>
      </View>
    );
  }
}

export default EditProfileForm;
