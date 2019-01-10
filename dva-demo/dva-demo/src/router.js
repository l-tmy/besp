import React from 'react';
import { BrowserRouter ,Router, Route, Switch ,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Page from './routes/page';

function RouterConfig({ history }) {
  return (
    //router@4.0使用
    <BrowserRouter>
      <div>
        <header>header</header>
        <div>
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
