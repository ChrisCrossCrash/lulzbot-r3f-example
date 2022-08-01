import { Canvas } from '@react-three/fiber'
import { PresentationControls, Bounds } from '@react-three/drei'
import Balljoint from '../components/Balljoint'
import type { NextPage } from 'next'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './index.module.scss'

const Home: NextPage = () => {
  /** The transition breakpoint where the section converts from a col to a row. */
  // const transitionSize: ContainerProps['fluid'] = 'md'

  return (
    <Container fluid={'md'}>
      <Row className={styles.samplePrintRow}>
        <Col className={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0.2, 1.5], fov: 30 }}>
            <Bounds fit observe>
              <PresentationControls global cursor polar={[-0.15, 0.75]}>
                <Balljoint position={[0, -0.2, 0]} />
              </PresentationControls>
            </Bounds>
          </Canvas>
        </Col>
        <Col
          lg={{ span: 4, order: 'first' }}
          md={{ span: 6, order: 'first' }}
          span={12}
          className={styles.infoCol}
        >
          <h1>Get a Free Sample 3D Print</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            officia excepturi fugit tenetur facilis tempore a rerum, veniam,
            quaerat doloribus quia.
          </p>
          <button>Order Now</button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
