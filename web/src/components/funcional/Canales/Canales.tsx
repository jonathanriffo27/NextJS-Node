import { useState } from 'react';
import { 
    faPlus, faAngleRight, faAngleLeft
  } from '@fortawesome/free-solid-svg-icons'; 

import Menu from '../../ui/Menu';
import Header from '../../ui/Header';
import Body from '../../layout/Body';
import InputText from '../../ui/InputText';
import Canal from '../../ui/Canal';
import Button from '../../ui/Button';
import ButtonPage from '../../ui/ButtonPage';
import Modal from '../../ui/Modal';
import Content from '../../layout/Content';
import Row from '../../layout/Row';
import Col from '../../layout/Col';

const Canales = () => {
  const [modalOn, setModalOn] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => setModalOn(!modalOn)
  
  return (
    <div className="main h-screen w-screen overflow-hidden bg-white transition-all duration-300">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Content>
          <Row>
            <span className='text-[32px] font-bold'>Canales</span>
          </Row>
          <Row height='h-[80px]' >
            <InputText label='Buscar' width='439px' type='email' icon='buscar' />
          </Row>
          <Row height='flex-grow gap-[5px]' >
            <Canal text='Corredora de Seguros' />
            <Canal text='tarjeta de Retail' />
            <Canal text='Pagina Web' />
          </Row>
          <Row grid='grid-cols-3'>
              <Col justify='justify-start'>
                <span className='font-semibold'>Mostrando 1 al 3 de 3 canales</span>
              </Col>
              <Col gap='gap-[3px]'>
                <ButtonPage icon={faAngleLeft} color='#959595' /> 
                <ButtonPage text='1'/> 
                <ButtonPage text='2'/> 
                <ButtonPage text='3'/> 
                <ButtonPage icon={faAngleRight} color='#959595' /> 
              </Col>
              <Col justify='justify-end' >
                <Button icon={faPlus} width='40px' onClick={handleClick} />
              </Col>
          </Row>
        </Content>
      </Body>
      {modalOn && <Modal onClick={handleClick} />}
    </div>
  )
}

export default Canales