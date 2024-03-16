import React from 'react'

function Table () {

  return (
    <div className="table_wrap">
      <table>
        {/* <colgroup>
          <col width="20%"/>
          <col width="20%"/>
          <col width="20%"/>
          <col width="20%"/>
          <col width="20%"/>
          <col width="20%"/>
          <col width="20%"/>
          <col width="20%"/>
          <col width="20%"/>
        </colgroup> */}
        <thead>
          <tr>
            <th>checkbox</th>
            <th>no selectbox</th>
            <th>name selectbox</th>
            <th>아이디/이메일</th>
            <th>연락처</th>
            <th>기관명</th>
            <th>생년월일</th>
            <th>성별</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>checkbox</td>
            <td>1</td>
            <td>손이나</td>
            <td>sonene@medimind.kr</td>
            <td>010-1234-5678</td>
            <td>메디마인드</td>
            <td>1988-01-01</td>
            <td>여자</td>
            <td>
              <a href="#!" className='btn_tb'>
                <span>확인하기</span>
                <em className='ico arrow_right'></em> 
              </a>
            </td>
          </tr>
          <tr>
            <td>내용1</td>
            <td>내용1</td>
            <td>내용1</td>
            <td>내용1</td>
            <td>내용1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table