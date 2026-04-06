import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export const Portal = ({ children, containerId = 'modal-root' }: PortalProps) => {
  const getContainer = () => {
    let element = document.getElementById(containerId);

    if (!element) {
      element = document.createElement('div');
      element.id = containerId;
      document.body.appendChild(element);
    }

    return element;
  };

  const container = getContainer();

  return createPortal(children, container);
};
