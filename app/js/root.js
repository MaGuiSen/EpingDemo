/**
 * Created by lipeiwei on 16/9/30.
 */

import React from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  StatusBar,
  BackAndroid,
  Platform
} from 'react-native';
import Toast from './util/toast';
import Start from './start';

let lastClickTime = 0;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigator: {
    flex: 1,
    backgroundColor: 'white'
  },
  errorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red',
    fontSize: 16
  }

});

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.onBackAndroid = this.onBackAndroid.bind(this);
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentDidMount (){
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  render() {
    let defaultName = 'start',defaultComponent = Start;
    //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor="white"
            barStyle="light-content"/>
        <Navigator
            style={styles.navigator}
            initialRoute={{name:defaultName,component:defaultComponent,params:{}}}
            configureScene = {this.configureScene}
            renderScene={this.renderScene}/>
      </View>
    );
  }

  renderScene(route,navigator){
    if(route.component) {
      let Component = route.component;
      //这里将数据往下传
      return <Component {...route.params} navigator={navigator}/>
    }
  }

  configureScene(){
    //跳转的动画
    return Navigator.SceneConfigs.FloatFromRight;
  }

  onBackAndroid() {
    const routers = this.navigator.getCurrentRoutes();
    if (routers.length > 2) { //2是为了除去 启动页面
      this.navigator.pop();
      return true;
    }
    let now = new Date().getTime();
    if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
      return false;//控制权交给原生
    }
    lastClickTime = now;
    Toast.show('再按一次退出应用');
    return true;
  }
}

module.exports = Root;




