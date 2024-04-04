import React, { useRef } from "react";

function GuideDialog () {
  // dialog 참조 ref
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogRef1 = useRef<HTMLDialogElement>(null);

  // modal 오픈 함수
  const showModal = () => {
    dialogRef.current?.showModal();
  };
  const showModalDelete = () => {
    dialogRef1.current?.showModal();
  };

  // Modal 닫기 함수
  const closeModal = () => {
    dialogRef.current?.close();
    dialogRef1.current?.close();
  };

  return (
    <div className='guide-container'>
      <div className="guide-inner">
        <h2>가이드페이지</h2>

        <div className='guide-item'>
          <p className='guide-title'>1. 기본타입 dialog
            <p className='guide-sub'>기본타입 dialog입니다.</p>
          </p>
          <div className='flex'>
            <button className='btn type-bg' onClick={showModal}>dialog 호출1</button>
            <button className='btn type-line' onClick={showModalDelete}>dialog 호출2</button>
          </div>
        </div>

        {/* dialog */}
        <dialog ref={dialogRef} className="dialog">
          <div className="dilog-title">
            <span>기본 타이틀</span>
          </div>

          <div className="dilog-body">
            <p>기본 컨텐츠가 표시됩니다</p>
          </div>

          <div className="dilog-bottom">
            <button onClick={closeModal} className="btn type-line">확인</button>
          </div>
        </dialog>

        <dialog ref={dialogRef1} className="dialog">
          <div className="dilog-body">
            <p>삭제하시겠습니까?</p>
          </div>

          <div className="dilog-bottom">
            <button onClick={closeModal} className="btn type-line">취소</button>
            <button onClick={closeModal} className="btn type-line">확인</button>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default GuideDialog