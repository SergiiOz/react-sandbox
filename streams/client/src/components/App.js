import { Router, Route } from 'react-router-dom';
import styles from './App.module.scss';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamDetails from './streams/StreamDetails';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className={styles.container}>
      {/* for create our history object we change BrowserRouter to Router */}
      <Router history={history}>
        <div>
          <Header />
          <hr />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/details" exact component={StreamDetails} />
        </div>
      </Router>
    </div>
  );
};

export default App;
