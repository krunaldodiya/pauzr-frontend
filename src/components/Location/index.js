import { Icon, Text, View } from 'native-base';
import React from 'react';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: '',
      editable: false
    };
  }

  componentWillMount() {
    this.props.getLocations();
  }

  get filteredLocation() {
    const { keywords } = this.state;
    const { locations } = this.props;
    const { list } = locations;

    if (keywords.length > 2) {
      return list.filter(location => {
        return location.city.match(new RegExp(`^${keywords}`, 'gi'));
      });
    }

    return list;
  }

  handleLocationSelect(data) {
    this.setState({ editable: false, keywords: data.city });
  }

  handleLocationClear() {
    this.setState({ editable: true, keywords: '' });
    this.location.focus();
  }

  render() {
    const { keywords, editable } = this.state;
    const { auth, toggleKeyboardAvoidView } = this.props;
    const { errors } = auth;

    return (
      <View style={styles.wrapper(errors && errors.errors.location_id)}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            onFocus={() => toggleKeyboardAvoidView(false)}
            ref={ref => {
              this.location = ref;
            }}
            editable={editable}
            placeholder={
              errors && errors.errors.location_id ? errors.errors.location_id[0] : 'Select a city'
            }
            placeholderTextColor={errors && errors.errors.location_id ? '#e74c3c' : '#000'}
            value={errors && errors.errors.location_id ? null : keywords}
            autoCorrect={false}
            onChangeText={keywords => this.setState({ keywords })}
            style={styles.input(errors && errors.errors.location_id)}
            autoCorrect={false}
          />

          {editable == false && (
            <TouchableOpacity
              style={{ paddingRight: 10, justifyContent: 'center' }}
              onPress={() => {
                this.handleLocationClear();
              }}
            >
              <Icon type="MaterialIcons" name="cancel" style={{ color: '#3d3d3d', fontSize: 22 }} />
            </TouchableOpacity>
          )}
        </View>

        {editable == true && keywords.length > 2 && (
          <ScrollView
            contentContainerStyle={styles.suggestionWrapper}
            keyboardShouldPersistTaps="handled"
          >
            {this.filteredLocation.map(location => (
              <Text
                key={location.id}
                autoCorrect={false}
                style={styles.suggestions}
                onPress={() => this.handleLocationSelect(location)}
              >
                {`${location.city}, ${location.state}`}
              </Text>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default Location;
