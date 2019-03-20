import React from 'react';
import { TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Location from '../../../Location';
import Switch from '../../../Switch';
import styles from './styles';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
  }

  updateData = data => {
    const { auth, handleInput } = this.props;
    const { authUser } = auth;

    handleInput({ authUser: { ...authUser, ...data } });
  };

  render() {
    const { auth, toggleKeyboardAvoidView } = this.props;
    const { authUser, errors } = auth;

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
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

        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
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

        <View style={styles.inputWrapper}>
          <Location {...this.props} />
        </View>
      </View>
    );
  }
}

export default EditProfileForm;
