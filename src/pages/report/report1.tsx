import React from 'react'
import Aside from '../../components/aside'
import Searchbox from '../../components/searchbox';
import MenuBtn from '../../components/menubtn'

function Report1 () {

  return (
    <div className="wrap">
      <Aside />
      <div className='contbody'>
        <div className="page-title with-btn">
          <MenuBtn/>
          기관보고서
          <a href="#!" className='btn'>
            <i className='ico arrow_left'></i>
            뒤로가기
          </a>
        </div>
        <div className="body-inner">
          <div className="report_wrap">
            <Searchbox />
            <div className="box_outer mt20">
              <p className="box_title">분석결과</p>
              <div className="info_box">
                <i className="ico smile ico-size-50"></i>
                <p>검색된 기관이 없어요.</p>
              </div>
            </div>
            <div className="box_outer mt20">
              <div className="box_title_wrap">
                <p>분석결과</p>
                <div className="btn_wrap">
                  <button className='btn type-line hover'>결과지 다운로드(pdf)</button>
                  <button className='btn type-line hover'>데이터 다운로드(excel)</button>
                </div>
              </div>
              <div className="info_box">
                <i className="ico smile ico-size-50"></i>
                <p>검색된 기관이 없어요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report1