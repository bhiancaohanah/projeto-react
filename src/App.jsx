import React from "react";
import './styles/App.css';
import { Navbar } from "./components/Navbar/Navbar"
import { Article } from "./components/Article/Article"

import article1 from "./assets/images/article-1.png"
import article2 from "./assets/images/article-2.png"
import article3 from "./assets/images/article-3.png"


export class App extends React.Component {
  render () {
    return (
      <>
      <Navbar />

      <section id="articles">
      <Article 
      title="Designing Dashboards"
      provider="NASA" 
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article1}
      />

      <Article 
      title="Vibrant Portraits of 2020" 
      provider="SpaceNews" 
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article2}
      />

      <Article 
      title="36 Days of Malayalam type" 
      provider="Spaceflight Now" 
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article3}
      />

      <Article 
      title="Designing Dashboards" 
      provider="NASA" 
      description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      thumbnail={article1}
      />
      </section>
      </>  
    );
  }
}