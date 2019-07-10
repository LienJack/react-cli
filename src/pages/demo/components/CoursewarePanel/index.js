import React from 'react';
import { inject, observer } from 'mobx-react';
import "./index.scss"
@inject('store')
@inject('Page')
@observer
class CoursewarePanel extends React.Component {
    constructor(props) {
        super(props);
        this.Page = props.Page;
        this.store = props.store;
    }
    render() {
        const { title } = this.store.state;
        return (
           <div>{title}</div>
        )
    }




}
export default CoursewarePanel;
