/**
 * Created by mac on 2019/6/5.
 */
import {action, computed, observable} from "mobx";
/**
 * @description client for this demo
 */
class Store {
    @observable state = {
        title: "demo2",//共享窗口ID的变化
    }
    constructor() {
    }
    @action
    setOpenClassroomTime = (title) => {
        this.state.title = title;
    }

}

export default new Store();
