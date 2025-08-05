import { useState } from 'react'
import AccordionSection from '../components/AccordionSection'
import ContactCard from '../components/ContactCard'
import ContactModal from '../components/ContactModal'
import { Row, Col, Button } from 'react-bootstrap'

function Home() {
  const [showCardModal, setShowCardModal] = useState(false)
  const [showCards, setShowCards] = useState(false)

  const handleOpenCardModal = () => setShowCardModal(true)
  const handleCloseCardModal = () => setShowCardModal(false)
  const toggleCards = () => setShowCards(!showCards)

  const faqAnswers = [
    {
      title: "المسئول 1",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
    },
    {
      title: "المسئول 2", 
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
    },
    {
      title: "المسئول 3",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق."
    }
  ]

  return (
    <div className="w-100">
      <AccordionSection />

      <div className="section-container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">من هو المسئول الاول عن تحديد هوية الطفل المعثور علية ، وكيفية تحقيق ذلك ؟</h4>
          <Button 
            variant="outline-primary" 
            className="toggle-btn"
            onClick={toggleCards}
          >
            ▼
          </Button>
        </div>
        
        <div className={`cards-container ${showCards ? 'show' : 'hide'}`}>
          <Row className="g-4">
            {faqAnswers.map((answer, index) => (
              <Col lg={4} md={6} key={index}>
                <ContactCard
                  title={answer.title}
                  description={answer.description}
                  onLoginClick={handleOpenCardModal}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <ContactModal show={showCardModal} handleClose={handleCloseCardModal} />
    </div>
  )
}

export default Home