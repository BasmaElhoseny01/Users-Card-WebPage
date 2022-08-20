import './App.css';

import Header from './Components/Header';
import Edit from'./Components/EditUser';
import UserTag from './Components/User';
import Footer from './Components/Footer';


import users from '../src/data'

function App() {
  return (
    <div className='APP'>
      <Header/>
      <Edit  Count={users.length}/>
      <div className="Users">
        {
          users.map((user) => {
            return (<UserTag name={user.name} gender={user.gender} ID={user.id} street={user.address.street} city={user.address.city} user_name={user.username} email={user.email} website={user.website} company={user.company.name} telephone={user.phone}></UserTag>)
          }
          )
        }
      </div>
      <Footer/>
    </div>

  );
}

export default App;
