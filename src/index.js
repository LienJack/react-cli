import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader'
import getRouter from '@/router/index';
import '@/style'

// 初始化
renderWithHotReload(getRouter());
// 模块热更新
if (module.hot) {
  module.hot.accept('@/router/index', () => {
    const getRouter = require('@/router/index').default;
    renderWithHotReload(getRouter())
  })
}

function renderWithHotReload (RootElement) {
  ReactDOM.render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
     document.getElementById('app'))
}
renderWithHotReload(getRouter());
// 模块热更新
if (module.hot) {
  module.hot.accept('@/router/index', () => {
    const getRouter = require('@/router/index').default;
    renderWithHotReload(getRouter())
  })
}


