import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './program.css';
import gambar from '../../assets/program.jpg';

const Program = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch('https://63b7a42f4f17e3a931d89449.mockapi.io/api/v1/product');
      const response = await request.json();
      setArticles(response);
      setLoading(false);
    }

    getArticles();
  }, []);
  return (
    <section className="program" id="program">
      <div className="title">
        <h1>PROGRAM</h1>
      </div>

      {loading ? (
        <section className="loading">
          <div className="container-loading-content">
            <h1>LOADING...</h1>
          </div>
        </section>
      ) : (
        <div className="container-program-content">
          <div className="img-content">
            <img src={gambar} alt="test" />
          </div>
          <div className="text-content">
            {articles.map(function (article) {
              return <h2 key={article.id}>
                <Link to={`/program/${article.id}`}>Program Bootcamp {article.title} Rp. {article.price}</Link>
              </h2>
            })}
          </div>
        </div>
      )}

    </section>
  )
}

export default Program