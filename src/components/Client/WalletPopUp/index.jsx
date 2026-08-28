import React from "react";
import Wallet from "../../../pages/Client/Wallet";
import styled from "styled-components";
import colors from "../../../colors";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    overflow-y: auto;
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    width: 20px;
    height: 20px;
  
    & > span {
        color: ${colors.red};
    }
`;
export default function WalletPopUp({open, setOpen}) {
    if (!open) return;

    return (
        <Background>
            <ModalWrapper>
                <CloseIcon onClick={() => setOpen(false)}>
                    <span>&times;</span>
                </CloseIcon>
                <Wallet isPopUp={true}/>
            </ModalWrapper>
        </Background>
    );
}
