import Lottie from 'lottie-react';
import animationData from '../Components/Assets/welcome.json';

const Contact = () => {
  return (
    <div>
      <div className="contact-header">
        <h4>Got Questions?</h4>
        <h1>Get In Touch!</h1>
        </div>
      <div className="contact-container">
        <div></div>
        <div><Lottie animationData={animationData} /></div>
      </div>
    </div>
  );
}

export default Contact;
