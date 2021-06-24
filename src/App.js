import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ExpenseForm from "./Component/ExpenseForm";
import ExpenseList from './Component/ExpenseList';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="4">
            <ExpenseForm />
          </Col>

          <Col md="8">
            <ExpenseList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
