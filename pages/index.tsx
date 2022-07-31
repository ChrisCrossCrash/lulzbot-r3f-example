import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import Balljoint from '../components/Balljoint'
import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './index.module.scss'

const Home: NextPage = () => {
  return (
    <Container>
      <Row className={styles.samplePrintRow}>
        <Col lg={4} md={6} xs={12} className={styles.infoCol}>
          <h1>Get a Free Sample 3D Print</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            officia excepturi fugit tenetur facilis tempore a rerum, veniam,
            quaerat doloribus quia.
          </p>
          <button>Order Now</button>
        </Col>
        <Col className={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0.2, 0.8], fov: 60 }}>
            <PresentationControls global cursor polar={[-0.45, 0.75]}>
              <Balljoint position={[0, -0.2, 0]} />
            </PresentationControls>
          </Canvas>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
