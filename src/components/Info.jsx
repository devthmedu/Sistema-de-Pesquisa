import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Info.css'; // Adicione o arquivo CSS se houver

const Info = ({ addBasicData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      setError('Todos os campos são necessários!');
    } else {
      setError('');
      addBasicData(name, email, contact);
      navigate('/questions');
    }
  };

  return (
    <div className="container-fluid info-container">
      <div className="col-md-6 m-auto">
        <div className="mt-4">
          <div className="card info-card">
            <div className="card-body">
              <h4 className="card-title text-center">Dados Básicos</h4>
              <form onSubmit={submit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Nome:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="contact">Telefone:</label>
                  <input
                    type="text"
                    id="contact"
                    className="form-control"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Digite seu telefone"
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-success w-100">
                  Próximo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
