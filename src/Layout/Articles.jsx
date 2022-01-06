import React from "react";
import "../styles/Layout/Articles.scss";
import Article from "../components/Article";

import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";

const articles = [
  {
    title: " Receive money in any currency with no fees",
    author: "By Claire Robinson",
    content: `The world is getting smaller and we’re becoming more mobile. So why should you be 
        forced to only receive money in a single …`,
    img: `${Currency}`,
  },
  {
    title: 'Treat yourself without worrying about mone',
    author: 'By Wilson Hutton',
    content: `Our simple budgeting feature allows you to separate out your spending and set 
    realistic limits each month. That means you …`,
    img: `${Restaurant}`,
  }
];

const Articles = () => {
  return (
    <section className="articles">
      <div className="container articles-grid">
        <h1>Latest Articles</h1>

        {articles.map((article) => (
          <Article article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;