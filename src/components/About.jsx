import React from 'react';
import '../style/About.css'; // Supondo que você tenha um arquivo CSS separado para About

const About = () => {
  return (
    <div className="about-container qform">
      <div className="about-content">
        <h1 className="about-title">Sobre Nós</h1>
        <p className="about-description">
          Este é um exemplo de site de pesquisa desenvolvido com ReactJS. Nosso objetivo é fornecer uma plataforma intuitiva e eficiente para coletar e analisar feedbacks.
        </p>
        <p className="about-description">
          Utilizamos as melhores práticas de desenvolvimento para garantir que a experiência do usuário seja a melhor possível. Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato conosco!
        </p>
        <a href="/" className="btn btn-primary">Voltar à Página Inicial</a>
      </div>
    </div>
  );
};

export default About;
