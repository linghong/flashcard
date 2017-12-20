import React from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';
import Header from './Header';

const Dashboard = () => {
  return (
    <div>
      <StackList />
      <hr />
      <Link to='/stackform'><h4>Create a New Card Stack</h4></Link>
    </div>
  )
}

export default Dashboard;