/**
 * Created by mac on 2019/6/5.
 */
import {action, computed, observable} from "mobx";
/**
 * @description client for this demo
 */
class DemoStore {
    @observable userInfoMap = new Map(); //user map
    @observable state = {
        title: "hellow demo",//共享窗口ID的变化
    }
    constructor() {
    }
    @action
    changeTitle = (title) => {
        this.state.title = title;
    }

    @computed get getLessionTime() {
    }

}

export default new DemoStore();
