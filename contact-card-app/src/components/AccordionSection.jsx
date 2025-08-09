import { Accordion, Button } from 'react-bootstrap'
import { useState } from 'react'
import ContactModal from './ContactModal'

function AccordionSection() {
  const [showFirstAnswer, setShowFirstAnswer] = useState(false)
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)

  const toggleFirstAnswer = () => setShowFirstAnswer(!showFirstAnswer)
  const handleOpenRegistrationModal = () => setShowRegistrationModal(true)
  const handleCloseRegistrationModal = () => setShowRegistrationModal(false)

  return (
    <>
      <div className="section-container">
        <div className="section-title">
          <div className="title-bar"></div>
          <h2 className="main-title">الأسئلة الشائعة</h2>
        </div>
        <p className="text-muted mb-0">بوابة خدمات الشركات</p>
      </div>

      <div className="section-container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold mb-0">ما هو الإطار التشريعي الحاكم لنظام الأسر البديلة ؟</h5>
          <Button 
            variant="outline-primary" 
            className="toggle-btn"
            onClick={toggleFirstAnswer}
          >
            ▼
          </Button>
        </div>
        
        <div className={`answer-container ${showFirstAnswer ? 'show' : 'hide'}`}>
          <p className="text-muted mb-3">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، 
            حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.
          </p>
          <div className="text-center">
            <Button 
              variant="primary" 
              size="sm" 
              className="card-btn"
              onClick={handleOpenRegistrationModal}
            >
              <i className="fas fa-user me-2"></i>
              تسجيل
            </Button>
          </div>
        </div>
      </div>

      <ContactModal show={showRegistrationModal} handleClose={handleCloseRegistrationModal} />
    </>
  )
}

export default AccordionSection
