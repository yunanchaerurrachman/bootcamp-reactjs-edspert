import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './bayar.css';
import pembayaran from '../../assets/pembayaran.jpg';

const Bayar = () => {
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
    return <section className="not-found p-2 min-[320px]:p-4 md:px-0 md:py-0 grid content-center w-full h-full bg-[url('./assets/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed box-border">
      <Helmet>
        <title>Article Not Found!!!</title>
        <meta name="Article Not Found!!!" content="Article Not Found!!!" />
      </Helmet>

      <div className="container-not-found-content py-2 mb-3 min-[360px]:mb-4 text-center">
        <h1 className="text-4xl min-[320px]:text-7xl min-[360px]:text-8xl min-[400px]:text-[7rem] xl:text-9xl text-[#fbd236] mb-4">ARTICLE NOT FOUND!!!</h1>
        <div className="btn-home bg-[#068076] p-4 rounded-xl w-1/2 m-auto">
          <p className="text-xl min-[320px]:text-2xl min-[360px]:text-3xl min-[400px]:text-4xl font-semibold text-[#fbd236] text-center">
            <Link to={`/`}>Home</Link>
          </p>
        </div>
      </div>
    </section>
  }

  return (
    <section className="bayar">
      {loading ? (
        <section className="loading grid items-center h-screen">
          <div className="container-loading-content py-2 mb-3 min-[360px]:mb-4 text-center">
            <h1 className="text-4xl min-[320px]:text-7xl min-[360px]:text-8xl min-[400px]:text-[7rem] xl:text-9xl text-[#fbd236] mb-4">LOADING...</h1>
          </div>
        </section>
      ) : (
        <section className="container-bayar-content">
          <div className="img-content">
            <img src={pembayaran} alt="test" />
          </div>
          <div className="text-content">
            <h1 className="title">Instruksi Pembayaran Program Bootcamp {article.title}</h1>
            <p>Batch  : September 2023</p>
            <p>Mentor  : ch</p>
            <p>Harga  : {article.price}</p>
            <div className="container-menu-pembayaran">
              <h3>ATM</h3>
              <h3>Internet Banking</h3>
              <h3>M-Banking</h3>
            </div>
            <ul>
              <li>
                <p>Masukkan kartu ke mesin ATM.</p>
              </li>
              <li>
                <p>Pilih Bahasa.</p>
              </li>
              <li>
                <p>Masukkan PIN ATM.</p>
              </li>
              <li>
                <p>Pilih menu transaksi lainnya.</p>
              </li>
              <li>
                <p>Pilih menu "Transfer", lalu pilih ke rek.</p>
              </li>
              <li>
                <p>Masukkan nomor rekening yang dituju.</p>
              </li>
              <li>
                <p>Masukkan nominal jumlah uang yang akan di transfer.</p>
              </li>
              <li>
                <p>Layar ATM akan menampilkan data transaksi anda, jika data sudah benar pilih "YA".</p>
              </li>
              <li>
                <p>Selesai, struk akan keluar dari mesin ATM.</p>
              </li>
            </ul>
          </div>
        </section>
      )}
    </section>
  )
}

export default Bayar