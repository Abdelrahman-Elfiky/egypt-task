import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

function Footer() {
  return (
    <footer className="footer-dark text-light py-5 mt-5 w-100" dir="rtl">
      <Container fluid>
        <Row>
          {/* Logo and Social Media */}
          <Col lg={3} md={6} className="mb-4">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <Image
                src="../../public/imgs/download-removebg-preview.png" 
                alt="جمهورية مصر العربية" 
                className="me-2 w-25"
              />
              </div>
            </div>
            <div className="d-flex gap-3">
              <span className="bg-secondary p-2 rounded social-icon">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span className="bg-secondary p-2 rounded social-icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span className="bg-secondary p-2 rounded social-icon">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="bg-secondary p-2 rounded social-icon">
                <i className="fab fa-youtube"></i>
              </span>
              <span className="bg-secondary p-2 rounded social-icon">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </div>
          </Col>

          {/* Most Requested Services */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3 text-white footer-heading">الخدمات الاكثر طلبا</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">خدمات الاسر البديلة</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">خدمات الجمعيات</a>
              </li>
            </ul>
          </Col>

          {/* Support and Help */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3 text-white footer-heading">الدعم والمساعدة</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">الاسئلة الشائعة</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">الشكاوي والمقترحات</a>
              </li>
            </ul>
          </Col>

          {/* More */}
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3 text-white footer-heading">المزيد</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">سياسة الخصوصية</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none footer-link">حقوق الطبع والنشر</a>
              </li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3 text-white footer-heading">تواصل معنا</h6>
            <p className="mb-1 text-light">19 ش المراغي - العجوزة - الجيزة</p>
            <p className="mb-0 text-light">الخط الساخن لأبناء مصر: 19628</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer