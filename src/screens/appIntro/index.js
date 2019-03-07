import React from 'react';
import {Text,Button,View} from 'react-native';
import styles from './styles';
import handler from '../../components/routerHandler';
export default class AppIntro extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <View style={styles.parent}>
            <Text style={{color:'#ffffff'}}>This is the intro screen</Text>
                <Button
                                title='Continue'
                                color='#43c6ac'
                                height='58'
                                onPress={handler('push','Home')}
                            >
                            </Button>
            </View>
        )
    }
}