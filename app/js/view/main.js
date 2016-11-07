/**
 * Created by 1ping on 2016/10/18.
 */

import React from 'react';
import {
    StyleSheet
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Home from './home';
import Mine from './user/mine';
import TabBar from './tabBar';

const styles = StyleSheet.create({
    /**
     * iOS平台下, react-native-scrollable-tab-view是用ScrollView实现的
     * 当react-native-scrollable-tab-view嵌套react-native-viewpager时, 需要给react-native-scrollable-tab-view的子View设置overflow='hidden',
     * ScrollView的removeClippedSubviews才能起作用, 将不在屏幕可视范围的视图移除掉.
     */
    subView: {
        overflow: 'hidden'
    }
});

//tabbar图片资源
const TAB_BAR_RESOURCES = [
    [require('../../res/image/home.png'), require('../../res/image/home_active.png')],
    [require('../../res/image/home.png'), require('../../res/image/home_active.png')],
    [require('../../res/image/home.png'), require('../../res/image/home_active.png')],
];

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView
                tabBarPosition="bottom"
                locked={true}
                scrollWithoutAnimation={true}
                prerenderingSiblingsNumber={2}
                renderTabBar={() => {
                    /*使用自定义tabbar*/
                    return <TabBar tabBarResources={TAB_BAR_RESOURCES}/>
                }}>
                <Home style={styles.subView} navigator={this.props.navigator}/>
                <Home style={styles.subView} navigator={this.props.navigator}/>
                <Mine style={styles.subView} navigator={this.props.navigator}/>
            </ScrollableTabView>
        );
    }
}

module.exports = Main;