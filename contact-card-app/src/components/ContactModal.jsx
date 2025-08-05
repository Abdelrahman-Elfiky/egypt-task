import { Modal, Button, Form } from 'react-bootstrap'

function ContactModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>إرسال استفسار</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>الاسم الكامل</Form.Label>
            <Form.Control type="text" placeholder="أدخل اسمك الكامل" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>البريد الإلكتروني</Form.Label>
            <Form.Control type="email" placeholder="أدخل بريدك الإلكتروني" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>رقم الهاتف</Form.Label>
            <Form.Control type="tel" placeholder="أدخل رقم هاتفك" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>الاستفسار</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="اكتب استفسارك هنا..." />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          إلغاء
        </Button>
        <Button variant="primary">
          إرسال الاستفسار
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ContactModal