import style from './ProductCard.module.css'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addToCart } from '../Cart/CartSlice';
import { Link } from 'react-router-dom'
import store from '../../store';

const ProductCard = ({ product }) => {
    const cart = useSelector((state) => store.cart)
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className={style.card}>
            <div className={style.card_image_container} >
                <img className={style.card_image} src={product.images.main.url[0]} alt="ffff" />
            </div>
            <div className={style.card_title}>{product.title_fa}</div>
            <div className={style.card_buttons}>
                <Link className={style.link} to={`/product/${product.id}`}>
                    <button className={style.card_detail_button}>جزئیات</button>
                </Link>
                <button className={style.card_add_button} onClick={() => handleAddToCart(product
                )}>خرید</button>
            </div>
        </div>
    );
}

export default ProductCard;