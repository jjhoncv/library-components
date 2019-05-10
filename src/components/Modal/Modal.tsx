import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import {
  ModalOverlay,
  ModalStyled,
  ModalIcon
} from './styled';

import { Icon } from './../Icon';

interface Props {
  children?: React.ReactNode;
  openModal?: boolean;
  closeModal?: Function;
}

export const Modal: React.FC<Props> = ({
  openModal,
  children,
  closeModal
}) => {

  const [ open, setOpen ] = useState(openModal);
  const ref = useRef(null);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const handleClick = (e) => {
    if(e.currentTarget === e.target || ref.current.contains(e.target)) {
      setOpen(false);
      closeModal();
    }
  }

  return(
    <>
      {
        open && (
          <ModalOverlay onClick={(e) => handleClick(e)}>
            <ModalStyled>
              <ModalIcon
                ref={ref}
                onClick={(e) => handleClick(e)}>
                <Icon name="x"/>
              </ModalIcon>
              {children}
            </ModalStyled>
          </ModalOverlay>
        )
      }
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.bool,
  closeModal: PropTypes.func
}
