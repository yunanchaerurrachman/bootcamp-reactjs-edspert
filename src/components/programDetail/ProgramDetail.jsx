import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './programDetail.css';
import programDetailImg from '../../assets/program-detail.jpg';

const ProgramDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(function () {
    async function getArticle() {
      const request = await fetch(
        `https://63b7a42f4f17e3a931d89449.mockapi.io/api/v1/product/${params.id}`
      );

      if (!request.ok) {
        setLoading(false);
        return setNotFound(true);
      }

      const response = await request.json();
      setArticle(response);
      setLoading(false);
    }
    getArticle();
  }, [params]);

  if (notFound) {
    return <section className="not-found">

      <div className="container-not-found-content">
        <h1 className="text-xl">ARTICLE NOT FOUND!!!</h1>
        <div className="btn-home">
          <p>
            <Link to={`/`}>Home</Link>
          </p>
        </div>
      </div>
    </section>
  }

  return (
    <section className="program-detail">
      {loading ? (
        <section className="loading">
          <div className="container-loading-content">
            <h1>LOADING...</h1>
          </div>
        </section>
      ) : (
        <section className="container-program-detail-content">
          <div className="img-content">
            <img src={programDetailImg} alt="test" />
          </div>
          <div className="text-content">
            <h1 className="title">Program Bootcamp {article.title}</h1>
            <div className="description-content">
              <h2>Materi</h2>
              <h3>Pengolahan Programing</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, in doloribus? Tempore harum magnam consequuntur beatae neque est provident aut atque ad perspiciatis, ipsa et?</p>
              <h3>Materi Bootcamp {article.title} 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, in doloribus? Tempore harum magnam consequuntur beatae neque est provident aut atque ad perspiciatis, ipsa et?</p>
              <h3>Materi Bootcamp {article.title} 2</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, in doloribus? Tempore harum magnam consequuntur beatae neque est provident aut atque ad perspiciatis, ipsa et?</p>
              <h3>Materi Bootcamp {article.title} 3</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, in doloribus? Tempore harum magnam consequuntur beatae neque est provident aut atque ad perspiciatis, ipsa et?</p>
              <h3>Materi Bootcamp {article.title} 4</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, in doloribus? Tempore harum magnam consequuntur beatae neque est provident aut atque ad perspiciatis, ipsa et?</p>
            </div>
            <div className="fasilitas-content">
              <h2>Fasilitas</h2>
              <h3>E-Sertifikat</h3>
              <h3>Portofolio</h3>
              <h3>Job Connector</h3>
              <h3>Career Development</h3>
            </div>
            <Link to={`/program/checkout/${article.id}`}>CHECKOUT Rp. {article.price}</Link>
          </div>
        </section>
      )}
    </section>
  )
}

export default ProgramDetail