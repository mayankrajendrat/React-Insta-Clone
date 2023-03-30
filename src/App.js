import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostContext from './contexts/PostContext'
import AppRouter from './routers/AppRouters';

function App() {
  return (
    <PostContext>
    <div className="App-container">
     <AppRouter />
    </div>
    </PostContext>
  );
}

export default App;
