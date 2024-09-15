import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Details({ data, questionData }) {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate('/thanks');
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body">
              <h4>Dados Básicos</h4>
              <p><b>Nome:</b> {data.name}</p>
              <p><b>Email:</b> {data.email}</p>
              <p><b>Telefone:</b> {data.contact}</p>

              <h4>Perguntas Adicionais</h4>
              <p><b>Profissão:</b> {questionData.profession}</p>
              <p><b>Interesse:</b> {questionData.interest}</p>
              <p><b>Referência:</b> {questionData.reference}</p>

              <button onClick={handleFinish} className="btn btn-success">
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
