import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './checkout.css';

const Checkout = () => {
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
        <h1>ARTICLE NOT FOUND!!!</h1>
        <div className="btn-home">
          <p>
            <Link to={`/`}>Home</Link>
          </p>
        </div>
      </div>
    </section>
  }

  return (
    <section className="checkout">
      {loading ? (
        <section className="loading">
          <div className="container-loading-content">
            <h1>LOADING...</h1>
          </div>
        </section>
      ) : (
        <section className="container-checkout-content">
          <div className="container-metode-pembayaran">
            <h2>Pilih metode pembayaran</h2>
            <div className="bank-transfer">
              <h3>Bank Transfer (verifikasi manual)</h3>
              <p>Pembayaran melalui Bank Transfer Mandiri atau BCA. Pembayaran ini memerlukan verifikasi pembayaran manual melalui Whatsapp</p>
              <div className="radio-btn">
                <input type="radio" id="tf-mandiri" name="tf-mandiri" value="tf-mandiri" />
                <label htmlFor="tf-mandiri">Bank Transfer ke Rek Bank Mandiri</label>
              </div>
              <div className="radio-btn">
                <input type="radio" id="tf-bca" name="tf-bca" value="tf-bca" />
                <label htmlFor="tf-bca">Bank Transfer ke Rek Bank BCA</label>
              </div>
            </div>
            <div className="virtual-account">
              <h3>Virtual Account (verifikasi otomatis)</h3>
              <p>Pembayaran melalui virtual account berbagai bank. Metode pembayaran ini akan diverifikasi secara otomatis</p>
              <div className="radio-btn">
                <input type="radio" id="va-mandiri" name="va-mandiri" value="va-mandiri" />
                <label htmlFor="va-mandiri">Virtual Account Mandiri</label>
              </div>
              <div className="radio-btn">
                <input type="radio" id="va-bca" name="va-bca" value="va-bca" />
                <label htmlFor="va-bca">Virtual Account BCA</label>
              </div>
            </div>
          </div>
          <div className="container-ringkasan-pesanan">
            <h2>Ringkasan Pesanan</h2>
            <h2>Program Bootcamp {article.title}</h2>
            <p>Batch  : September 2023</p>
            <p>Mentor  : ch</p>
            <h3>Metode Pembayaran</h3>
            <p>Virtual Account (verifikaksi otomatis) BCA</p>
            <h3>Total pembayaran {article.price}</h3>
            <p>Dengan menekan tombol Bayar kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali <span>syarat dan ketentuan</span> yang berlaku</p>
            <Link to={`/program/checkout/bayar/${article.id}`}>Bayar</Link>
          </div>
        </section>
      )}
    </section>
  )
}

export default Checkout