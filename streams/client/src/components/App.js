import { BrowserRouter, Route } from 'react-router-dom';
import styles from './App.module.scss';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamDetails from './streams/StreamDetails';
import Header from './Header';

const App = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div>
          <Header />
          <hr />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/details" exact component={StreamDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
