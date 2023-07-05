'use client'

import type { AccordionType }  from "../page"

export const Accordion = ({flush= true, eventKey, eventName, children, headerTitle}: AccordionType) => {

  return (
    <div
      className={`accordion ${flush ? 'accordion-flush' : ''}`}
      id={`accordionFlushExample${eventKey}`}
    >
          <h2 className="accordion-header" id={`flush-heading${eventName}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${eventName}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${eventName}`}
                >
                  {headerTitle}
                </button>
              </h2>
              <div
                id={`flush-collapse${eventName}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${eventName}`}
                data-bs-parent={`accordionFlushExample${eventKey}`}
              >
                <div className="accordion-body">
                  {children}
                </div>
              </div>
    </div>
  )
}
