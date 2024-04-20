import React from 'react';
import './App.css';
import './assets/scss/_index.scss';/*scss파일들 불러옴*/

import { Routes, Route } from 'react-router-dom';

import Pagenation from './components/pagenation';
import Searchbox from './components/searchbox';
import Table from './components/table';
import MenuBtn from './components/menubtn';

import Guide from './guide/guidelink';
import GuideBtn from './guide/guide_btn';
import GuidePagenation from './guide/guide_pagenation';
import GuideTable from './guide/guide_table';
import GuideCheckbox from './guide/guide_checkbox';
import GuideRadiobox from './guide/guide_radiobox';
import GuideSelectbox from './guide/guide_selectbox';
import GuideSearchbox from './guide/guide_searchbox';
import GuideMenubar from './guide/guide_menubar';
import GuideUtilbox from './guide/guide_utilbox';
import GuideTextfield from './guide/guide_textfield';
import GuideTabs from './guide/guide_tabs';
import GuideUserinfoWrap from './guide/guide_userinfo-wrap';
import GuideMarked from './guide/guide_marked';
import GuideDialog from './guide/guide_dialog';

import Main from './pages/main';
import PageList from './pages/page_list';
import Pagesouter from './pages/pagesouter';

import Login from './pages/login';
import Manage3 from './pages/consult2/manage3';
import Manage4 from './pages/consult2/manage4';
import Manage6 from './pages/consult2/manage6';
import Result1 from './pages/result/result1';
import Report1 from './pages/report/report1';


function App (){
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/guide/guidelink" element={<Guide/>} />
      <Route path="/guide/guide_btn" element={<GuideBtn/>} />
      <Route path="/guide/guide_pagenation" element={<GuidePagenation/>} />
      <Route path="/guide/guide_table" element={<GuideTable/>} />
      <Route path="/guide/guide_checkbox" element={<GuideCheckbox/>} />
      <Route path="/guide/guide_radiobox" element={<GuideRadiobox/>} />
      <Route path="/guide/guide_selectbox" element={<GuideSelectbox/>} />
      <Route path="/guide/guide_searchbox" element={<GuideSearchbox/>} />
      <Route path="/guide/guide_menubar" element={<GuideMenubar/>} />
      <Route path="/guide/guide_utilbox" element={<GuideUtilbox/>} />
      <Route path="/guide/guide_textfield" element={<GuideTextfield/>} />
      <Route path="/guide/guide_tabs" element={<GuideTabs/>} />
      <Route path="/guide/guide_userinfo-wrap" element={<GuideUserinfoWrap/>} />
      <Route path="/guide/guide_marked" element={<GuideMarked/>} />
      <Route path="/guide/guide_dialog" element={<GuideDialog/>} />

      <Route path="/components/pagenation" element={<Pagenation/>} />
      <Route path="/components/searchbox" element={<Searchbox/>} />
      <Route path="/components/table" element={<Table/>} />
      <Route path="/components/menubtn" element={<MenuBtn/>} />

      <Route path="/pages/page_list" element={<PageList/>} />
      <Route path="/pages/pagesouter" element={<Pagesouter/>} />
      <Route path="/pages/login" element={<Login/>} />
      <Route path="/pages/consult2/manage3" element={<Manage3/>} />
      <Route path="/pages/consult2/manage4" element={<Manage4/>} />
      <Route path="/pages/consult2/manage6" element={<Manage6/>} />
      <Route path="/pages/result/result1" element={<Result1/>} />
      <Route path="/pages/report/report1" element={<Report1/>} />
    </Routes>
  );
}

export default App;
