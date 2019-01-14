import React from 'react';
// eslint-disable-next-line
import { BrowserRouter ,Router, Route, Switch ,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Page from './routes/page';

function RouterConfig({ history }) {
  return (
    //router@4.0使用
    <BrowserRouter>
      <div>
        <header style={{'marginBottom':'10px'}}>header</header>
        <div style={{'border':'solid 1px #ccc'}}>
          <Link to='/'>index </Link>
          <Link to='/page'> page</Link>
          <p>content</p>
          {/*<Router history={history}>*/}
            <Switch>
              <Route path="/" exact component={IndexPage} />
              <Route path="/page" exact component={Page} />
            </Switch>
          {/*</Router>*/}
        </div>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
    /*{/!*<Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/page" exact component={Page} />
        </Switch>
      </Router>*!/}*/
  )
}

export default RouterConfig;
