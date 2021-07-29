[【React深入】setState的执行机制](https://juejin.cn/post/6844903781813993486)  
[你真的理解setState吗？](https://juejin.cn/post/6844903636749778958)

### 异步任务更新setstate测试


#### promise实践

```javascript
export default class Index extends Component {
    state = {
        num: 1
    }

    count = () => {
        new Promise((resolve, reject) => {
            //异步
            this.setState({
                num: this.state.num + 1
            })
            console.log('promise - ', this.state.num)
            resolve();

        }).then(() => {//同步
            this.setState({
                num: this.state.num + 1
            })
            console.log('then - ', this.state.num)
        })

        setTimeout(() => {//同步
            this.setState({
                num: this.state.num + 1
            })
            console.log('setTimeout - ', this.state.num)
        }, 1000);
    }

    render() {
        return (
            <div onClick={this.count}>click me!  number: {this.state.num}</div>
        )
    }
}


```