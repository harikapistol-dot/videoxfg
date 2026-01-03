import dialogAvatar from '../../utils/images/dialogAvatar.png';
import acceptCallImg from '../../utils/images/acceptCall.png';
import rejectCallImg from '../../utils/images/rejectCall.png';

const Dialog = ({ dialog, onAccept, onReject }) => {
  if (!dialog) return null;

  if (dialog.type === 'incoming') {
    return (
      <div className="dialog_wrapper">
        <div className="dialog_content">
          <p className="dialog_title">Incoming {dialog.callType} Call</p>
          <div className="dialog_image_container">
            <img src={dialogAvatar} alt="Avatar" />
          </div>
          <div className="dialog_button_container">
            <button className="dialog_accept_call_button" onClick={onAccept}>
              <img
                className="dialog_button_image"
                src={acceptCallImg}
                alt="Accept"
              />
            </button>
            <button className="dialog_reject_call_button" onClick={onReject}>
              <img
                className="dialog_button_image"
                src={rejectCallImg}
                alt="Reject"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (dialog.type === 'calling') {
    return (
      <div className="dialog_wrapper">
        <div className="dialog_content">
          <p className="dialog_title">Calling</p>
          <div className="dialog_image_container">
            <img src={dialogAvatar} alt="Avatar" />
          </div>
          <div className="dialog_button_container">
            <button className="dialog_reject_call_button" onClick={onReject}>
              <img
                className="dialog_button_image"
                src={rejectCallImg}
                alt="Cancel"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (dialog.type === 'info') {
    return (
      <div className="dialog_wrapper">
        <div className="dialog_content">
          <p className="dialog_title">{dialog.title}</p>
          <div className="dialog_image_container">
            <img src={dialogAvatar} alt="Avatar" />
          </div>
          <p className="dialog_description">{dialog.description}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Dialog;
