import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem consectetur delectus vitae eos magnam, nesciunt temporibus blanditiis perferendis quaerat numquam, aperiam animi. Quisquam error voluptatibus corrupti, fugit reiciendis magni!",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Ania Kwiatkowska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit nulla assumenda non obcaecati reprehenderit, voluptate eius neque quam aperiam, ducimus hic velit porro nisi veritatis dicta dolor nam itaque?",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Jan Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi quibusdam nulla ipsam recusandae nihil odio iste eius, repellat, provident mollitia magni aliquid. Officia debitis et harum a cumque minima!",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
