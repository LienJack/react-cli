import React from 'react';
import {observer, Provider} from 'mobx-react';
import CoursewarePanel from "./components/CoursewarePanel"
import store from "./store"
@observer
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.store = store
    }
    btnClick = () =>{
        this.store.changeTitle("点我")
    }
    render() {
        let {title} =  this.store.state
        return (
            <Provider store={this.store} Page={this}>
               <div>
                   <span>1111</span>
                   <CoursewarePanel/>
                   <div> {title}</div>
                   <button onClick={this.btnClick}>点我</button>
               </div>
            </Provider>
        );
    }
}

export default Demo;
