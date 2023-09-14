import React from 'react'
import { StyledClose, TitleModal } from '../../../utils/Atoms'
import { Container, ContainerModal, Modal } from './atoms'
import FormAddCar from '../FormAddCar'


function AddCar({ toggle, isOpen }) {
  return (

    <Modal $modalDriver $isOpen={isOpen}>
      <Container>
        <StyledClose onClick={toggle}>
          <i className='ph-bold ph-x closemenu'></i>
        </StyledClose>
        <TitleModal>
          Ajouter un véhicule ?
        </TitleModal>
        <ContainerModal>
          <FormAddCar />
        </ContainerModal>
      </Container>
    </Modal>

  )
}

export default AddCar