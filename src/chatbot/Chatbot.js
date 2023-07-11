import React, { useState } from 'react';
import styled from 'styled-components';


const FoodRecommendationChatbot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [age, setAge] = useState(0);
  const [recommendation, setRecommendation] = useState('');

  const handleUserMessage = () => {
    const newMessage = {
      role: 'user',
      content: input,
    };
    setChat((prevChat) => [...prevChat, newMessage]);
    setInput('');
  };

  const handleBotMessage = (message) => {
    const newMessage = {
      role: 'bot',
      content: message,
    };
    setChat((prevChat) => [...prevChat, newMessage]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStep = (selectedStep) => {
    let stepMessage = '';

    if (selectedStep === 1) {
      stepMessage = 'At the Party';
    } else if (selectedStep === 2) {
      stepMessage = 'During the date';
    } else if (selectedStep === 3) {
      stepMessage = ' Alone';
    }

    handleBotMessage(stepMessage);
    setStep(selectedStep);
    setRecommendation('');
  };

  const handleAgeSubmit = (event) => {
    event.preventDefault();
    const selectedAge = parseInt(age);
    let foodRecommendation = '';

    if (selectedAge <= 10 || selectedAge > 90) {
      return alert('check ur age');
    }
    if (selectedAge >= 20 && selectedAge <= 30) {
      // api 를 통해서 랜덤 음식 추천.
      foodRecommendation = 'hamburger';
    } else if (selectedAge >= 31 && selectedAge <= 40) {
      foodRecommendation = 'beef';
    } else {
      foodRecommendation = 'anything u want';
    }

    const recommendationMessage = `Our Recommendation is ${foodRecommendation}.`;
    handleBotMessage(recommendationMessage);
    setRecommendation(foodRecommendation);
  };

  const handleRestart = () => {
    setChat([]);
    setInput('');
    setStep(0);
    setAge(0);
    setRecommendation('');
    handleBotMessage('Fit dishes Recommend !');
  };

  return (
    <ChatbotContainer>
      <ChatbotButton onClick={openModal}>Fits the Situation</ChatbotButton>
      {isModalOpen && (
        <ChatbotModalOverlay onClick={closeModal}>
          <ChatbotModalContent onClick={(e) => e.stopPropagation()}>
            <ChatbotContent>
              <div className="chatbot-chatbox">
                {chat.map((message, index) => (
                  <ChatbotMessage key={index} role={message.role}>
                    {message.content}
                  </ChatbotMessage>
                ))}
              </div>

              {step === 0 && (
                <div className="chatbot-content">
                  <h3>Questions for recommended dishes!!! </h3>
                  <p>In what situation is the food?</p>
                  <ChatbotButton onClick={() => handleStep(1)}>
                    1.At the party
                  </ChatbotButton>
                  <ChatbotButton onClick={() => handleStep(2)}>
                    2.During the date
                  </ChatbotButton>
                  <ChatbotButton onClick={() => handleStep(3)}>
                    3. Alone
                  </ChatbotButton>
                </div>
              )}

              {step !== 0 && recommendation === '' && (
                <div className="chatbot-content">
                  <ChatbotForm onSubmit={handleAgeSubmit}>
                    <label>
                      tell your age:
                      <ChatbotInput
                        type="number"
                        min="1"
                        max="100"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                      />
                    </label>
                    <ChatbotButton type="submit">Ok</ChatbotButton>
                  </ChatbotForm>
                </div>
              )}

              {recommendation !== '' && (
                <div className="chatbot-content">
                  {/* <p>추천하는 음식은 {recommendation}입니다.</p> */}
                  <ChatbotRestartButton onClick={handleRestart}>
                    Reset the recommand.
                  </ChatbotRestartButton>
                </div>
              )}
            </ChatbotContent>
          </ChatbotModalContent>
        </ChatbotModalOverlay>
      )}
    </ChatbotContainer>
  );
};

export default FoodRecommendationChatbot;
    const ChatbotContainer = styled.div`
      position: fixed;
      bottom: 20px;
      right: 20px;
    `;
    
    const ChatbotButton = styled.button`
      padding: 8px 16px;
      border-radius: 5px;
      background-color: #2196f3;
      color: white;
      border: none;
      cursor: pointer;
      margin : 4px;
    `;
    
    const ChatbotModalOverlay = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    const ChatbotModalContent = styled.div`
      background-color: #fff;
      border-radius: 5px;
      padding: 16px;
    `;
    
    const ChatbotContent = styled.div`
      text-align: center;
    `;
    
    const ChatbotInput = styled.input`
      margin: 5px;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
    `;
    
    const ChatbotForm = styled.form`
      margin-top: 10px;
    `;
    
    const ChatbotMessage = styled.div`
      margin-bottom: 10px;
      padding: 8px;
      border-radius: 5px;
      color: #fff;
      background-color: ${(props) =>
        props.role === 'bot' ? '#2196f3' : '#4caf50'};
      align-self: ${(props) => (props.role === 'bot' ? 'flex-start' : 'flex-end')};
    `;
    
    const ChatbotRestartButton = styled.button`
      margin-top: 10px;
      padding: 8px 12px;
      border-radius: 5px;
      background-color: #f44336;
      color: white;
      border: none;
      cursor: pointer;
    `;
