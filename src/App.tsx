import React from 'react';
import './App.css';
import './assets/scss/_index.scss';/*scss파일들 불러옴*/

import { Routes, Route } from 'react-router-dom';

import Pagenation from './components/pagenation';
import Table from './components/table';

import Guide from './guide/guidelink';
import GuideBtn from './guide/guide_btn';
import GuidePagenation from './guide/guide_pagenation';
import GuideTable from './guide/guide_table';
import GuideCheckbox from './guide/guide_checkbox';
import GuideSelectbox from './guide/guide_selectbox';

import Main from './pages/main';
import PageList from './pages/page_list';
import Pagesouter from './pages/pagesouter';

import Login from './pages/login';


function App (){
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/guide/guidelink" element={<Guide/>} />
      <Route path="/guide/guide_btn" element={<GuideBtn/>} />
      <Route path="/guide/guide_pagenation" element={<GuidePagenation/>} />
      <Route path="/guide/guide_table" element={<GuideTable/>} />
      <Route path="/guide/guide_checkbox" element={<GuideCheckbox/>} />
      <Route path="/guide/guide_selectbox" element={<GuideSelectbox/>} />

      <Route path="/components/pagenation" element={<Pagenation/>} />
      <Route path="/components/table" element={<Table/>} />

      <Route path="/pages/page_list" element={<PageList/>} />
      <Route path="/pages/pagesouter" element={<Pagesouter/>} />
      <Route path="/pages/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
