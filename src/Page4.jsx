import React, { useState } from 'react';
import './Components/page4.css';

const Page4 = () => {
 
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quidem delectus aliquam quibusdam saepe repellat excepturi deleniti ullam modi sapiente reprehenderit eveniet quis consequatur omnis consectetur repudiandae mollitia magni impedit!"
     
    },
    {
      question: "Can I change my plan later?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, totam repudiandae? Nulla in dicta nihil doloribus, voluptatum, sapiente hic maxime impedit nemo labore at optio rem veniam delectus, doloremque tempore?"
    },
    {
      question: "What is your cancellation policy?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum, illo deserunt saepe eveniet sit consequuntur fuga pariatur aperiam eligendi aliquam molestias odio magni totam dolores eos assumenda facilis tempora!"
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident harum, ratione aspernatur, incidunt delectus rem mollitia accusantium deserunt tempore dolor quo esse laudantium? Reprehenderit facilis ea vitae sapiente perspiciatis eum."
    },
    {
      question: "How does billing work?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptatem laudantium distinctio harum aperiam quos voluptatibus assumenda, delectus enim perferendis quo! Vitae eveniet voluptatem tempore quidem quam nisi laudantium enim!"
    }
  ];


  const [openIndex, setOpenIndex] = useState(null);


  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="page4-container">
      <div className="page4-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about the product and billing.</p>
      </div>
      <div className="page4-questions">
        {faqData.map((faq, index) => (
          <div key={index} className="page4-question">
            <h2 className="page4-question-title" onClick={() => toggleAnswer(index)}>{faq.question}</h2>
            {openIndex === index && <p className="page4-answer">{faq.answer}</p>} 
          </div>
        ))}
      </div>
      <div className="page4-image-container">
        <img src="/images/Content.png" alt="FAQ Content" className="page4-image" />
      </div>
    </div>
  );
};

export default Page4;
