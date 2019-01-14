import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history'
import './index.css';

// 1. Initialize
const app = dva({
  history:createHistory()  // 去掉#号
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');