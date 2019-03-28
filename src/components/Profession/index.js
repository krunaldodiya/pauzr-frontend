import React from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import theme from '../../libs/theme';

class Profession extends React.Component {
  render() {
    const { auth, home, handleInput } = this.props;
    const { authUser, errors } = auth;
    const { professions } = home;

    const selectedProfessionIndex = professions.findIndex(profession => {
      return profession.id == authUser.profession_id;
    });

    return (
      <SearchableDropdown
        onItemSelect={profession =>
          handleInput({ authUser: { ...authUser, profession_id: profession.id } })
        }
        containerStyle={{
          alignSelf: 'center',
          borderColor: errors ? '#e74c3c' : 'gray',
          width: 250,
          fontFamily: theme.fonts.TitilliumWebRegular,
          fontSize: 14
        }}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#ddd',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5
        }}
        itemTextStyle={{ color: '#000' }}
        itemsContainerStyle={{ maxHeight: 140 }}
        items={professions}
        defaultIndex={selectedProfessionIndex}
        placeholder={
          errors && errors.errors.profession ? errors.errors.profession[0] : 'Profession'
        }
        resetValue={false}
        underlineColorAndroid="transparent"
      />
    );
  }
}

export default Profession;
