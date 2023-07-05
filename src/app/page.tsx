'use client';

import { Accordion } from './components/accordion';
import styled from './page.module.css';
import 'bootstrap/dist/js/bootstrap';
import { ReactNode } from'react'

// 型は親で定義してexportする（使い回す場合は別ファイル管理）
export type AccordionType = {
  flush?: boolean
  headerTitle: string
  eventKey: string
  eventName: string
  children: ReactNode
}

export default function Home() {
  // 子コンポーネントに渡すpropsを定義する
  const accordionParams: AccordionType[] = [
    {
      flush: true,
      headerTitle: "アコーディオン１",
      eventKey: "0",
      eventName: "One",
      children: "テキストテキスト１"
    },
    {
      flush: true,
      headerTitle: "アコーディオン２",
      eventKey: "1",
      eventName: "Two",
      children: "テキストテキスト２"
    },
  ]

  // AccordionのHeaderとbodyを削除して配列をmapでまわして短く定義
  return (
    <main className={styled.main}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
          <h2 className="pt-3 pb-2 mb-3 border-bottom">コンポーネント化したアコーディオン</h2>
          {
            accordionParams.map((e) => (
              <>
              <Accordion
                key={e.eventKey}
                eventKey={e.eventKey}
                eventName={e.eventName}
                flush={e.flush}
                headerTitle={e.headerTitle}
                >
                  {e.children}
                </Accordion>
              </>
            ))
          }

            <h2 className="pt-3 pb-2 mb-3 border-bottom">コンポーネント化しないアコーディオン</h2>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample3"
            >
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  アコーディオン１
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample3"
              >
                <div className="accordion-body">
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
