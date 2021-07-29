import React, { Component } from 'react'

export default class Index extends Component {
    state = {
        num: 1
    }

    // count = () => {

    //     new Promise((resolve, reject) => {
    //         this.setState({
    //             num: this.state.num + 1
    //         })
    //         console.log('promise - ', this.state.num)
    //         resolve();

    //     }).then(() => {//同步
    //         this.setState({
    //             num: this.state.num + 1
    //         })
    //         console.log('then - ', this.state.num)
    //     })

    //     setTimeout(() => {//同步
    //         this.setState({
    //             num: this.state.num + 1
    //         })
    //         console.log('setTimeout - ', this.state.num)
    //     }, 1000);
    // }

    async componentDidMount() {
        await this.temp();
        await this.changeNum();
        await this.changeNum2();
    }

    temp = () => {
        this.setState({
            num: this.state.num + 1
        })
        console.log('temp:', this.state.num)
    }

    changeNum = () => {

        this.setState({
            num: this.state.num + 1
        })
        console.log('changeNum第一次：', this.state.num)

        this.setState({
            num: this.state.num + 1
        })
        console.log('changeNum第二次：', this.state.num)

    }

    changeNum2 = () => {

        this.setState({
            num: this.state.num + 1
        })
        console.log('changeNum2第一次：', this.state.num)

        this.setState({
            num: this.state.num + 1
        })
        console.log('changeNum2第二次：', this.state.num)
    }

    render() {
        return (
            <div >click me!  number: {this.state.num}</div>
        )
    }
}
