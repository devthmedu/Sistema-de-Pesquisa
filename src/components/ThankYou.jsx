import React from 'react';
import '../style/ThankYou.css'; // Supondo que você tenha um arquivo CSS separado para ThankYou

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <div className="thankyou-content">
          <h3>Obrigado pela sua resposta!</h3>
          <h6>Você pode fechar esta aba agora.</h6>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
