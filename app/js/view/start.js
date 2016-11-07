/**
 * Created by 1ping on 2016/10/18.
 */

import React from 'react';
import {
    StyleSheet,
    Image
    } from 'react-native';
import Main from './main';
import ScreenUtil from './../util/ScreenUtil';

var styles = StyleSheet.create({
    banner: {
        height: ScreenUtil.SH,
        width: ScreenUtil.SW
    }
});


class Start extends React.Component {
    render() {
        console.log(this);
        return (
            <Image source={require('./../../res/image/app_logo_start.png')} style={styles.banner}/>
        );
    }

    componentDidMount(){
        var self = this;
        this.timer = setTimeout(
            () => {
                const { navigator} = self.props;
                console.log(self);
                if(navigator){
                    navigator.push({
                        name:'Main',
                        component:Main,
                        params:{}
                    })
                }
            },
            500
        );
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
}
module.exports = Start;