import './styles.css';

import React from 'react';
import FocusLock from 'react-focus-lock';
import { Portal } from 'react-portal';

export interface IDialogProps {
  logo: string
  title: JSX.Element | string
  isNotification: boolean
  isCentered: boolean
  onClose: () => void
}

const logo = (content: string | null): JSX.Element | null => {
  if (content == null || content.length === 0) {
    return null
  }

  return (
    <div className="dialog-logo" role="dialog-logo">
      {content}
    </div>
  )
}

const Dialog: React.FC<React.PropsWithChildren<IDialogProps>> = (props) => {
  return (
    <Portal>
        <FocusLock>
          <div className="dialog-overlay" />
          <div className={
            'dialog' +
            (props.isNotification ? ' notification' : '') +
            (props.isCentered ? ' centered' : '')} role="dialog">
            <div className="dialog-header">
                <button className="dialog-close-button" role="dialog-close-button" onClick={props.onClose}>&#10005;</button>
            </div>
            {logo(props.logo)}
            <div className="dialog-title" role="dialog-title">
              {props.title}
              </div>
            <div className="dialog-body" role="dialog-body">
              {props.children}
            </div>
          </div>
      </FocusLock>
    </Portal>
  );
}

export default Dialog;
