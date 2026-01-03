import { useEffect, useRef } from 'react';
import logo from '../../utils/images/project_logo-removebg-preview.png';
import micImg from '../../utils/images/mic.png';
import micOffImg from '../../utils/images/micOff.png';
import cameraImg from '../../utils/images/camera.png';
import cameraOffImg from '../../utils/images/cameraOff.png';
import hangUpImg from '../../utils/images/hangUp.png';
import switchCameraImg from '../../utils/images/switchCameraScreenSharing.png';
import recordingStartImg from '../../utils/images/recordingStart.png';

const VideoCall = ({
  localStream,
  remoteStream,
  inCall,
  callType,
  micActive,
  cameraActive,
  isMuted,
  onToggleMic,
  onToggleCamera,
  onRotateCamera,
  onToggleMute,
  onHangUp
}) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  const isVideoCall = callType === 'personal_code_video';

  return (
    <div className="call_container">
      <div className="videos_container">
        <div className={`videos_placeholder ${inCall && remoteStream ? 'display_none' : ''}`}>
          <img src={logo} alt="Logo" />
        </div>

        <video
          ref={remoteVideoRef}
          className={`remote_video ${!inCall || !remoteStream ? 'display_none' : ''}`}
          autoPlay
          playsInline
        />

        <div className="local_video_container">
          <video
            ref={localVideoRef}
            className="local_video"
            autoPlay
            muted
            playsInline
          />
        </div>

        {inCall && isVideoCall && (
          <div className="call_buttons_container">
            <button className="call_button_small" onClick={onToggleMic}>
              <img
                src={micActive ? micImg : micOffImg}
                alt="Mic"
              />
            </button>
            <button className="call_button_small" onClick={onToggleCamera}>
              <img
                src={cameraActive ? cameraImg : cameraOffImg}
                alt="Camera"
              />
            </button>
            <button className="call_button_large" onClick={onHangUp}>
              <img src={hangUpImg} alt="Hang Up" />
            </button>
            <button className="call_button_small" onClick={onRotateCamera}>
              <img src={switchCameraImg} alt="Rotate Camera" />
            </button>
            <button className="call_button_small" onClick={onToggleMute} style={{opacity: isMuted ? 0.6 : 1}}>
              <img src={recordingStartImg} alt="Mute" />
            </button>
          </div>
        )}

        {inCall && !isVideoCall && (
          <div className="finish_chat_button_container">
            <button className="call_button_large" onClick={onHangUp}>
              <img src={hangUpImg} alt="Hang Up" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCall;
