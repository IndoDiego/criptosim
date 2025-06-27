
import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  icon: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, icon, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 bg-dark-card border-2 border-brand-secondary rounded-xl shadow-2xl p-4 flex items-center space-x-4 transition-all duration-300 z-50 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-bold text-white">{message}</p>
        <div className="w-full bg-dark-border h-1 rounded-full mt-2 overflow-hidden">
          <div className="bg-brand-secondary h-1 animate-shrink" style={{ animation: 'shrink 3s linear forwards' }}></div>
        </div>
      </div>
    </div>
  );
};

// Add keyframes for the shrink animation to global styles if possible, or here as a style tag.
const Keyframes = () => (
    <style>{`
        @keyframes shrink {
            from { width: 100%; }
            to { width: 0%; }
        }
        .animate-shrink {
            animation-name: shrink;
        }
    `}</style>
);
// This is a bit of a hack for this environment. In a real project, this would be in your main CSS file.
// Let's attach it to the component.
const NotificationWithKeyframes: React.FC<NotificationProps> = (props) => (
    <>
        <Keyframes />
        <Notification {...props} />
    </>
);


export default NotificationWithKeyframes;
