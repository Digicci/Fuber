import styled from 'styled-components'
import colors from '../../../colors'


export const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NotificationPanelContainer = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 20px;
  width: 360px;
  max-height: 480px;
  overflow: hidden;
  border-radius: 16px;
  background: ${colors.sixth};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
  z-index: 2000;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    right: -20px;
    width: min(92vw, 360px);
    max-height: 70vh;
  }
`;

export const NotificationPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const NotificationTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
`;

export const NotificationClearButton = styled.button`
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.red};
  }
`;

export const NotificationPanelBody = styled.div`
  overflow-y: auto;
  max-height: 420px;
  padding: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 999px;
  }
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  border-left: 3px solid
    ${({ $read }) => ($read ? "transparent" : "#ffffff")};
  background: ${({ $read }) =>
  $read ? "rgba(255, 255, 255, 0.03)" : "rgba(86, 156, 214, 0.12)"};

  &:hover {
    background: ${({ $read }) =>
  $read ? "rgba(255, 255, 255, 0.05)" : "rgba(86, 156, 214, 0.18)"};
  }
`;

export const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const NotificationItemTitle = styled.strong`
  display: block;
  margin-bottom: 4px;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
`;

export const NotificationMessage = styled.p`
  margin: 0 0 6px;
  color: #ffffff;
  font-size: 0.87rem;
  line-height: 1.4;
  word-break: break-word;
`;

export const NotificationDate = styled.small`
  color: #ffffff;
  font-size: 0.75rem;
`;

export const NotificationDeleteButton = styled.button`
  flex-shrink: 0;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 77, 79, 0.18);
    color: ${colors.red};
  }
`;

export const NotificationEmpty = styled.p`
  padding: 24px 16px;
  text-align: center;
  color: #ffffff;
  font-size: 0.9rem;
  margin: 0;
`;