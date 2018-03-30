import React from 'react'
import { Spin } from 'antd'

export default function asyncComponent(importComponent) {
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                component: null
            };
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component: component
            });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> :  <div style={{width: '100%', textAlign: 'center', marginTop: '20%'}}><Spin size="default" tip="拼命加载中..."/></div>;
        }
    }

    return AsyncComponent;
}