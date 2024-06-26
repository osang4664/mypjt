import React from 'react'
import { Link } from 'react-router-dom';

function PageList () {
  return (
    <div className="guidepage-link">
      <p className='page-title'>퍼블리싱 가이드</p>
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
            <th>완료여부</th>
            <th>완료일</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="../../pages/pagesouter">샘플페이지</Link>
            </td>
            <td>/pages/pagesouter</td>
            <td>완료</td>
            <td>03-10</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to="../../pages/login">로그인</Link>
            </td>
            <td>/login</td>
            <td>완료</td>
            <td>03-10</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to="../../pages/consult2/manage4">consult2_이용자관리3</Link>
            </td>
            <td>/pages/consult2/manage3</td>
            <td>진행중</td>
            <td>03-31</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to="../../pages/consult2/manage4">consult2_이용자관리4</Link>
            </td>
            <td>/pages/consult2/manage4</td>
            <td>완료</td>
            <td>03-31</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to="../../pages/consult2/manage6">consult2_이용자관리6</Link>
            </td>
            <td>/pages/consult2/manage6</td>
            <td>완료</td>
            <td>03-31</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to="../../pages/result/result1">유저데이터 결과확인1</Link>
            </td>
            <td>/pages/result/result1</td>
            <td>진행중</td>
            <td>04-07</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Link to="../../pages/report/report1">기관보고서</Link>
            </td>
            <td>/pages/report/report1</td>
            <td>진행중</td>
            <td>04-07</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PageList