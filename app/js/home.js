/**
 * Created by 1ping on 2016/10/18.
 */

import React from 'react';
import {
    StyleSheet,
    Image
    } from 'react-native';
import ScreenUtil from './util/ScreenUtil';

var styles = StyleSheet.create({
    banner: {
        height: ScreenUtil.SH,
        width: ScreenUtil.SW
    }
});


class Home extends React.Component {
    render() {
        return (
            <Image source={require('./../res/image/app_logo_start.png')} style={styles.banner}/>
        );
    }
}
module.exports = Home;