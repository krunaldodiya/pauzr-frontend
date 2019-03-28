import React from 'react';
import { TextInput, View, ScrollView,Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Location from '../../../Location';
import Switch from '../../../Switch';
import styles from './styles';
import { Form, Item, Input, Label, Icon } from 'native-base';

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
      <ScrollView style={styles.container}>
        <Form>
          <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
            <Item floatingLabel>
              <Label style={{ color: "errors && errors.errors.name ? '#e74c3c' : '#000'" }}>
                {errors && errors.errors.name ? errors.errors.name[0] : 'Full Name'}
              </Label>
              <Input
                onFocus={() => toggleKeyboardAvoidView(false)}
                value={errors && errors.errors.name ? null : authUser.name}
                onChangeText={name => this.updateData({ name })}
                style={styles.input(errors && errors.errors.name)}
              />
            </Item>
          </View>
        </Form>
        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
          <Item floatingLabel>
            <Label style={{ color: errors && errors.errors.name ? '#e74c3c' : '#000' }}>
              {errors && errors.errors.name ? errors.errors.name[0] : 'Email Address'}
            </Label>
            <Input
              onFocus={() => toggleKeyboardAvoidView(false)}
              value={errors && errors.errors.name ? null : authUser.name}
              onChangeText={name => this.updateData({ name })}
              style={styles.input(errors && errors.errors.name)}
            />
          </Item>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="home" />
            <Text style={{ color: '#ccc', fontSize: 13 }}>Home</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="home" />
            <Text style={{ color: '#ccc', fontSize: 13 }}>Home</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="home" />
            <Text style={{ color: '#ccc', fontSize: 13 }}>Home</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
          <Item floatingLabel>
            <Label style={{ color: errors && errors.errors.name ? '#e74c3c' : '#000' }}>
              {errors && errors.errors.name ? errors.errors.name[0] : 'Lorem Ipsum'}
            </Label>
            <Input
              onFocus={() => toggleKeyboardAvoidView(false)}
              value={errors && errors.errors.name ? null : authUser.name}
              onChangeText={name => this.updateData({ name })}
              style={styles.input(errors && errors.errors.name)}
            />
          </Item>
        </View>

        
      </ScrollView>
    );
  }
}

export default EditProfileForm;
