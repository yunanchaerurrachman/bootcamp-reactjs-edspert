import './kontak.css';
import kontak from '../../assets/kontak.jpg';

const Kontak = () => {
  return (
    <div className="kontak">
      <div className="container-kontak-content">
        <div className="img-content">
          <img src={kontak} alt="kontak" />
        </div>
        <div className="text-content">
          <h1>Kontak</h1>
          <h3>Whatsapp</h3>
          <p>08210008000</p>
          <h3>Telpon</h3>
          <p>021-00090000</p>
          <h3>Website</h3>
          <p>www.edspert.id</p>
        </div>
      </div>
    </div>
  )
}

export default Kontak