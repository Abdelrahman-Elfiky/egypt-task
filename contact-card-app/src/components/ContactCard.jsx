import { Card, Button } from 'react-bootstrap'

function ContactCard({ title, description, onLoginClick }) {
  return (
    <Card className="text-end shadow-sm border-0 bg-light h-100">
      <Card.Body className="p-4">
        <div className="d-flex align-items-center mb-3">
          <Card.Title className="mb-0 fw-bold">{title}</Card.Title>
        </div>
        <Card.Text className="text-muted mb-4">
          {description}
        </Card.Text>
        <div className="text-center">
          <Button 
            variant="primary" 
            size="sm" 
            className="card-btn"
            onClick={onLoginClick}
          >
            <i className="fas fa-user me-2"></i>
            تسجيل
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ContactCard
