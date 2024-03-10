import React from 'react';
import './App.css';
import './assets/scss/_index.scss';/*scss파일들 불러옴*/

import { Routes, Route } from 'react-router-dom';

import Pagenation from './components/pagenation';

import Guide from './guide/guidelink';
import Btn from './guide/btn';
import GuidePagenation from './guide/guidepagenation';

import Main from './pages/main';
import PageList from './pages/page_list';
import Pagesouter from './pages/pagesouter';

import Login from './pages/login';


function App (){
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/guide/guidelink" element={<Guide/>} />
      <Route path="/guide/btn" element={<Btn/>} />
      <Route path="/guide/guidepagenation" element={<GuidePagenation/>} />

      <Route path="/components/pagenation" element={<Pagenation/>} />

      <Route path="/pages/page_list" element={<PageList/>} />
      <Route path="/pages/pagesouter" element={<Pagesouter/>} />
      <Route path="/pages/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
