import './ProductDetail.scss'
import { Link } from 'react-router-dom'

export const ProductDetail = ({data}) => {
  return (
    <div className='product-detail'>
      <div className="detail-left">
        <div className='card detail-card'>
          <img src={data.imgPathDetail} alt="" />
          <h3>{data.title}</h3>
        </div>
        <div className="detail-description">
          <h2>Descrição</h2>
          <p>{data.title}</p>
          <hr />
        </div>
      </div>
      <div className="detail-right">
        <div className="detail-title">
          <h1>Informações sobre o produto</h1>
          <hr />
        </div>
        <div className='detail-product-info'>
          <h1>{data.price}</h1>
          <p>
            Cor:{" "}
            {data.colors.length === 1
              ? data.colors.map((color, index) => (
                <span key={index}>{color}</span>
              ))
              : data.colors.map((color, index) => index + 1 === data.colors.length ? (
                <span key={index}>{color}</span>
              ) : (
                <span key={index}>{color}, </span>
              ))
            }
          </p>
          </div>
          <div className="detail-product-color">
            {data.colors.map((color) => (
                <div style={{
                  width: "64px",
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: color,
                  cursor: 'pointer',
                }}
                ></div>
              ))
            }
          </div>
          <div className="detail-size">
            <h1>Tamanho:</h1>
            {data.sizes.map((size) => (
              <span className='detail-card-size'>{size}</span>
            ))}
          </div>
          <div className="button-link">
            <Link to={`/pay/${data.id}`}>Finalizar Compra</Link>
          </div>
      </div>
    </div>
  )
}
