import { Navbar, Container, Nav, Button, Form, InputGroup, Modal } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import { useState } from 'react'

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleCloseLogin = () => setShowLoginModal(false)
  const handleShowLogin = () => setShowLoginModal(true)

  return (
    <>
      <Navbar bg="white" expand="lg" className="shadow-sm border-bottom w-100" dir="rtl">
        <Container fluid>
          {/* Logo and Brand */}
          <div className="d-flex align-items-center">
            <div className="me-3">
                <picture className='w-50'>
              <Image
                src="../../public/imgs/download.png" 
                alt="جمهورية مصر العربية" 
                className="me-2 w-25"
              />
              </picture>
            </div>
            {/* <div className="d-none d-md-block">
              <div className="fw-bold text-primary">جمهورية مصر العربية</div>
              <div className="small text-muted">وزارة التضامن الاجتماعي</div>
            </div> */}
          </div>

          {/* Navigation Links */}
          <Navbar.Collapse className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="fw-bold px-4">الرئيسية</Nav.Link>
              <Nav.Link href="#" className="fw-bold px-4">تصفح الخدمات</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Search, Login and Hamburger */}
          <div className="d-flex align-items-center">
            <div className="search-container me-4">
              <InputGroup className="search-input-group">
                <div className="search-icon-container">
                  <span className="search-icon">🔍</span>
                </div>
                <Form.Control 
                  placeholder="ابحث عن خدمة" 
                  className="search-input"
                />
              </InputGroup>
            </div>
            
            <Button variant="primary" className="me-5 login-btn" onClick={handleShowLogin}>
              <i className="fas fa-user me-2"></i>
              تسجيل دخول
            </Button>
            
            <Button variant="outline-secondary" className="hamburger-btn">
              ☰
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleCloseLogin} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>تسجيل الدخول</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control type="email" placeholder="أدخل بريدك الإلكتروني" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control type="password" placeholder="أدخل كلمة المرور" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="تذكرني" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            إلغاء
          </Button>
          <Button variant="primary">
            تسجيل الدخول
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Header