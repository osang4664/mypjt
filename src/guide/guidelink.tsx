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
              <Link to="/guide/guidepagenation">페이지네이션</Link>
            </td>
            <td>/guide/guide_pagenation</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>
              <Link to="/guide/guide_table">테이블</Link>
            </td>
            <td>/guide/guide_table</td>
            <td>진행중</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Guidelink