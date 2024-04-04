import React from 'react'
import { Link } from 'react-router-dom';

function Guidelink () {
  return (
    <div className="guidepage-link">
      <p className='page-title'>퍼블리싱 가이드(컴포넌트)</p>
      <table>
        <colgroup>
          <col width="20%" />
          <col width="*" />
          <col width="30%" />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>경로</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/guide/guide_btn">버튼</Link>
            </td>
            <td>/guide/guide_btn</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_checkbox">체크박스</Link>
            </td>
            <td>/guide/guide_checkbox</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_radiobox">라디오박스</Link>
            </td>
            <td>/guide/guide_radiobox</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_selectbox">셀렉트박스</Link>
            </td>
            <td>/guide/guide_selectbox</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_pagenation">페이지네이션</Link>
            </td>
            <td>/guide/guide_pagenation</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_searchbox">검색바</Link>
            </td>
            <td>/guide/guide_searchbox</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_table">테이블</Link>
            </td>
            <td>/guide/guide_table</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_menubar">메뉴바</Link>
            </td>
            <td>/guide/guide_menubar</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_utilbox">유틸박스</Link>
            </td>
            <td>/guide/guide_utilbox</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_textfield">텍스트필드</Link>
            </td>
            <td>/guide/guide_textrield</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_tabs">탭</Link>
            </td>
            <td>/guide/guide_tabs</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_userinfo-wrap">유저정보박스</Link>
            </td>
            <td>/guide/guide_userinfo-wrap</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_marked">마크</Link>
            </td>
            <td>/guide/guide_marked</td>
            <td>완료</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_dialog">dialog</Link>
            </td>
            <td>/guide/guide_dialog</td>
            <td>완료</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Guidelink