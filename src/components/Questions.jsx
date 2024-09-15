import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questions = ({ addQuestionData }) => {
  // State variables to store user inputs
  const [answers, setAnswers] = useState({
    profession: "",
    interest: "",
    reference: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    question15: "",
    question16: "",
    question17: "",
    question18: "",
    question19: "",
    question20: "",
    otherProfession: "",
    otherInterest: "",
    otherReference: "",
  });

  const navigate = useNavigate();

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const requiredFields = ['profession', 'interest', 'reference', 'question4', 'question5'];
    for (let field of requiredFields) {
      if (!answers[field]) {
        alert("Todos os campos são necessários!");
        return;
      }
    }

    // If the selected option is "Others", use the value from the corresponding text input
    const finalData = {
      profession: answers.profession === "Others" ? answers.otherProfession : answers.profession,
      interest: answers.interest === "Others" ? answers.otherInterest : answers.interest,
      reference: answers.reference === "Others" ? answers.otherReference : answers.reference,
      question4: answers.question4,
      question5: answers.question5,
      question6: answers.question6,
      question7: answers.question7,
      question8: answers.question8,
      question9: answers.question9,
      question10: answers.question10,
      question11: answers.question11,
      question12: answers.question12,
      question13: answers.question13,
      question14: answers.question14,
      question15: answers.question15,
      question16: answers.question16,
      question17: answers.question17,
      question18: answers.question18,
      question19: answers.question19,
      question20: answers.question20,
    };

    console.log(finalData);
    addQuestionData(finalData);

    navigate('/details');
  };

  // Event handler for changes in the radio buttons
  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  // Event handler for changes in text inputs
  const handleTextChange = (e) => {
    setAnswers({ ...answers, [e.target.id]: e.target.value });
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-8 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body">
              <form onSubmit={submit}>
                <h4>Perguntas Adicionais</h4>

                {/* Question 1 */}
                <div className="form-group m-2">
                  <label htmlFor="profession">
                    <b>1.</b> Qual é a sua profissão?
                  </label>
                  <br />
                  <input type="radio" name="profession" value="Student" onChange={handleChange} /> Estudante
                  <br />
                  <input type="radio" name="profession" value="Software Engineer" onChange={handleChange} /> Engenheiro de Software
                  <br />
                  <input type="radio" name="profession" value="Teacher" onChange={handleChange} /> Professor
                  <br />
                  <input type="radio" name="profession" value="Others" onChange={handleChange} /> Outros:
                  <input type="text" id="otherProfession" className="form-control m-2" value={answers.otherProfession} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 2 */}
                <div className="form-group m-2">
                  <label htmlFor="interest">
                    <b>2.</b> Quais são seus interesses?
                  </label>
                  <br />
                  <input type="radio" name="interest" value="DSA" onChange={handleChange} /> DSA
                  <br />
                  <input type="radio" name="interest" value="Full Stack Development" onChange={handleChange} /> Desenvolvimento Full Stack
                  <br />
                  <input type="radio" name="interest" value="Data Science" onChange={handleChange} /> Ciência de Dados
                  <br />
                  <input type="radio" name="interest" value="Competitive Programming" onChange={handleChange} /> Programação Competitiva
                  <br />
                  <input type="radio" name="interest" value="Others" onChange={handleChange} /> Outros:
                  <input type="text" id="otherInterest" className="form-control m-2" value={answers.otherInterest} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 3 */}
                <div className="form-group m-2">
                  <label htmlFor="reference">
                    <b>3.</b> Onde você ouviu falar sobre nós?
                  </label>
                  <br />
                  <input type="radio" name="reference" value="News Paper" onChange={handleChange} /> Jornal
                  <br />
                  <input type="radio" name="reference" value="LinkedIn" onChange={handleChange} /> LinkedIn
                  <br />
                  <input type="radio" name="reference" value="Instagram" onChange={handleChange} /> Instagram
                  <br />
                  <input type="radio" name="reference" value="Others" onChange={handleChange} /> Outros:
                  <input type="text" id="otherReference" className="form-control m-2" value={answers.otherReference} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 4 */}
                <div className="form-group m-2">
                  <label htmlFor="question4">
                    <b>4.</b> Qual é o seu nível de satisfação com o nosso serviço?
                  </label>
                  <br />
                  <input type="radio" name="question4" value="Very Satisfied" onChange={handleChange} /> Muito Satisfeito
                  <br />
                  <input type="radio" name="question4" value="Satisfied" onChange={handleChange} /> Satisfeito
                  <br />
                  <input type="radio" name="question4" value="Neutral" onChange={handleChange} /> Neutro
                  <br />
                  <input type="radio" name="question4" value="Dissatisfied" onChange={handleChange} /> Insatisfeito
                  <br />
                  <input type="radio" name="question4" value="Very Dissatisfied" onChange={handleChange} /> Muito Insatisfeito
                  <hr />
                </div>

                {/* Question 5 */}
                <div className="form-group m-2">
                  <label htmlFor="question5">
                    <b>5.</b> Com que frequência você utiliza nossos serviços?
                  </label>
                  <br />
                  <input type="radio" name="question5" value="Daily" onChange={handleChange} /> Diário
                  <br />
                  <input type="radio" name="question5" value="Weekly" onChange={handleChange} /> Semanal
                  <br />
                  <input type="radio" name="question5" value="Monthly" onChange={handleChange} /> Mensal
                  <br />
                  <input type="radio" name="question5" value="Occasionally" onChange={handleChange} /> Ocasionalmente
                  <br />
                  <input type="radio" name="question5" value="Never" onChange={handleChange} /> Nunca
                  <hr />
                </div>

                {/* Question 6 */}
                <div className="form-group m-2">
                  <label htmlFor="question6">
                    <b>6.</b> Quais recursos você gostaria de ver no futuro?
                  </label>
                  <br />
                  <input type="checkbox" name="question6" value="New Features" onChange={handleChange} /> Novos Recursos
                  <br />
                  <input type="checkbox" name="question6" value="Improved Performance" onChange={handleChange} /> Melhor Desempenho
                  <br />
                  <input type="checkbox" name="question6" value="Better Support" onChange={handleChange} /> Suporte Melhorado
                  <br />
                  <input type="checkbox" name="question6" value="More Content" onChange={handleChange} /> Mais Conteúdo
                  <hr />
                </div>

                {/* Question 7 */}
                <div className="form-group m-2">
                  <label htmlFor="question7">
                    <b>7.</b> Qual a sua principal motivação para usar nossos serviços?
                  </label>
                  <br />
                  <input type="radio" name="question7" value="Professional Growth" onChange={handleChange} /> Crescimento Profissional
                  <br />
                  <input type="radio" name="question7" value="Learning New Skills" onChange={handleChange} /> Aprender Novas Habilidades
                  <br />
                  <input type="radio" name="question7" value="Networking" onChange={handleChange} /> Networking
                  <br />
                  <input type="radio" name="question7" value="Entertainment" onChange={handleChange} /> Entretenimento
                  <br />
                  <input type="radio" name="question7" value="Other" onChange={handleChange} /> Outro:
                  <input type="text" id="question7Other" className="form-control m-2" value={answers.question7Other} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 8 */}
                <div className="form-group m-2">
                  <label htmlFor="question8">
                    <b>8.</b> Como você avaliaria a qualidade do nosso atendimento ao cliente?
                  </label>
                  <br />
                  <input type="radio" name="question8" value="Excellent" onChange={handleChange} /> Excelente
                  <br />
                  <input type="radio" name="question8" value="Good" onChange={handleChange} /> Bom
                  <br />
                  <input type="radio" name="question8" value="Average" onChange={handleChange} /> Médio
                  <br />
                  <input type="radio" name="question8" value="Poor" onChange={handleChange} /> Ruim
                  <hr />
                </div>

                {/* Question 9 */}
                <div className="form-group m-2">
                  <label htmlFor="question9">
                    <b>9.</b> Você recomendaria nossos serviços a outras pessoas?
                  </label>
                  <br />
                  <input type="radio" name="question9" value="Definitely" onChange={handleChange} /> Definitivamente
                  <br />
                  <input type="radio" name="question9" value="Probably" onChange={handleChange} /> Provavelmente
                  <br />
                  <input type="radio" name="question9" value="Not Sure" onChange={handleChange} /> Não Tenho Certeza
                  <br />
                  <input type="radio" name="question9" value="Probably Not" onChange={handleChange} /> Provavelmente Não
                  <br />
                  <input type="radio" name="question9" value="Definitely Not" onChange={handleChange} /> Definitivamente Não
                  <hr />
                </div>

                {/* Question 10 */}
                <div className="form-group m-2">
                  <label htmlFor="question10">
                    <b>10.</b> Qual é a sua faixa etária?
                  </label>
                  <br />
                  <input type="radio" name="question10" value="Under 18" onChange={handleChange} /> Menos de 18
                  <br />
                  <input type="radio" name="question10" value="18-24" onChange={handleChange} /> 18-24
                  <br />
                  <input type="radio" name="question10" value="25-34" onChange={handleChange} /> 25-34
                  <br />
                  <input type="radio" name="question10" value="35-44" onChange={handleChange} /> 35-44
                  <br />
                  <input type="radio" name="question10" value="45-54" onChange={handleChange} /> 45-54
                  <br />
                  <input type="radio" name="question10" value="55-64" onChange={handleChange} /> 55-64
                  <br />
                  <input type="radio" name="question10" value="65 and over" onChange={handleChange} /> 65 ou mais
                  <hr />
                </div>

                {/* Question 11 */}
                <div className="form-group m-2">
                  <label htmlFor="question11">
                    <b>11.</b> Você prefere realizar atividades online ou presenciais?
                  </label>
                  <br />
                  <input type="radio" name="question11" value="Online" onChange={handleChange} /> Online
                  <br />
                  <input type="radio" name="question11" value="In-Person" onChange={handleChange} /> Presenciais
                  <br />
                  <input type="radio" name="question11" value="Both" onChange={handleChange} /> Ambos
                  <hr />
                </div>

                {/* Question 12 */}
                <div className="form-group m-2">
                  <label htmlFor="question12">
                    <b>12.</b> Qual a sua principal fonte de informação sobre tecnologia?
                  </label>
                  <br />
                  <input type="radio" name="question12" value="Blogs" onChange={handleChange} /> Blogs
                  <br />
                  <input type="radio" name="question12" value="Tech News Websites" onChange={handleChange} /> Sites de Notícias de Tecnologia
                  <br />
                  <input type="radio" name="question12" value="Social Media" onChange={handleChange} /> Mídias Sociais
                  <br />
                  <input type="radio" name="question12" value="Podcasts" onChange={handleChange} /> Podcasts
                  <br />
                  <input type="radio" name="question12" value="Others" onChange={handleChange} /> Outros:
                  <input type="text" id="question12Other" className="form-control m-2" value={answers.question12Other} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 13 */}
                <div className="form-group m-2">
                  <label htmlFor="question13">
                    <b>13.</b> Você usa aplicativos de produtividade? Se sim, quais?
                  </label>
                  <br />
                  <input type="checkbox" name="question13" value="Todo List" onChange={handleChange} /> Lista de Tarefas
                  <br />
                  <input type="checkbox" name="question13" value="Note Taking" onChange={handleChange} /> Anotações
                  <br />
                  <input type="checkbox" name="question13" value="Time Tracking" onChange={handleChange} /> Controle de Tempo
                  <br />
                  <input type="checkbox" name="question13" value="Project Management" onChange={handleChange} /> Gerenciamento de Projetos
                  <br />
                  <input type="checkbox" name="question13" value="Others" onChange={handleChange} /> Outros:
                  <input type="text" id="question13Other" className="form-control m-2" value={answers.question13Other} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 14 */}
                <div className="form-group m-2">
                  <label htmlFor="question14">
                    <b>14.</b> Qual é o seu maior desafio atualmente?
                  </label>
                  <br />
                  <input type="radio" name="question14" value="Time Management" onChange={handleChange} /> Gestão do Tempo
                  <br />
                  <input type="radio" name="question14" value="Work-Life Balance" onChange={handleChange} /> Equilíbrio Trabalho-Vida
                  <br />
                  <input type="radio" name="question14" value="Skill Development" onChange={handleChange} /> Desenvolvimento de Habilidades
                  <br />
                  <input type="radio" name="question14" value="Career Growth" onChange={handleChange} /> Crescimento na Carreira
                  <br />
                  <input type="radio" name="question14" value="Other" onChange={handleChange} /> Outro:
                  <input type="text" id="question14Other" className="form-control m-2" value={answers.question14Other} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 15 */}
                <div className="form-group m-2">
                  <label htmlFor="question15">
                    <b>15.</b> Você já participou de eventos ou conferências relacionadas ao seu campo de atuação?
                  </label>
                  <br />
                  <input type="radio" name="question15" value="Yes" onChange={handleChange} /> Sim
                  <br />
                  <input type="radio" name="question15" value="No" onChange={handleChange} /> Não
                  <br />
                  <input type="radio" name="question15" value="Not Sure" onChange={handleChange} /> Não Tenho Certeza
                  <hr />
                </div>

                {/* Question 16 */}
                <div className="form-group m-2">
                  <label htmlFor="question16">
                    <b>16.</b> Qual a sua abordagem para resolver problemas técnicos complexos?
                  </label>
                  <br />
                  <input type="radio" name="question16" value="Research and Experiment" onChange={handleChange} /> Pesquisa e Experimentação
                  <br />
                  <input type="radio" name="question16" value="Consulting with Experts" onChange={handleChange} /> Consultar Especialistas
                  <br />
                  <input type="radio" name="question16" value="Trial and Error" onChange={handleChange} /> Tentativa e Erro
                  <br />
                  <input type="radio" name="question16" value="Following Documentation" onChange={handleChange} /> Seguir a Documentação
                  <hr />
                </div>

                {/* Question 17 */}
                <div className="form-group m-2">
                  <label htmlFor="question17">
                    <b>17.</b> O que você considera mais importante ao escolher um novo software ou ferramenta?
                  </label>
                  <br />
                  <input type="radio" name="question17" value="Functionality" onChange={handleChange} /> Funcionalidade
                  <br />
                  <input type="radio" name="question17" value="Ease of Use" onChange={handleChange} /> Facilidade de Uso
                  <br />
                  <input type="radio" name="question17" value="Cost" onChange={handleChange} /> Custo
                  <br />
                  <input type="radio" name="question17" value="Customer Support" onChange={handleChange} /> Suporte ao Cliente
                  <br />
                  <input type="radio" name="question17" value="Reviews" onChange={handleChange} /> Avaliações
                  <hr />
                </div>

                {/* Question 18 */}
                <div className="form-group m-2">
                  <label htmlFor="question18">
                    <b>18.</b> Qual é a sua principal meta profissional para o próximo ano?
                  </label>
                  <input type="text" id="question18" className="form-control m-2" value={answers.question18} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 19 */}
                <div className="form-group m-2">
                  <label htmlFor="question19">
                    <b>19.</b> Se você pudesse mudar uma coisa em seu ambiente de trabalho, o que seria?
                  </label>
                  <input type="text" id="question19" className="form-control m-2" value={answers.question19} onChange={handleTextChange} />
                  <hr />
                </div>

                {/* Question 20 */}
                <div className="form-group m-2">
                  <label htmlFor="question20">
                    <b>20.</b> Qual o seu feedback geral sobre nossa empresa?
                  </label>
                  <textarea id="question20" className="form-control m-2" rows="4" value={answers.question20} onChange={handleTextChange} />
                  <hr />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
