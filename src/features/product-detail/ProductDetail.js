import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './products-detail.module.css'
import { useSelector,useDispatch } from "react-redux";
import store from '../../store';
import { addToCart } from '../Cart/CartSlice';

const ProductDetail = () => {
    const{id} = useParams();
    const navigate = useNavigate();
    const[product,setProduct] = useState();
    const cart = useSelector((state) => store.cart)
    const dispatch = useDispatch();
    const handleAddToCart = (product)=> {
        dispatch(addToCart(product))
    }
    useEffect(()=>{
        axios.get(`https://api.digikala.com/v1/product/${id}/`).then(res =>{
            setProduct(res.data.data.product);
        })
    },[])

    return ( 
        <div className={styles.container}>
            {
                product &&
                <div className={styles.detail_card}>
                    <button className={styles.back_btn} onClick={() => navigate(-1)}>بازگشت</button>
                    <div className={styles.info_details}>
                        <div className={styles.card_details}>
                            <div className={styles.product_title}>{product.title_fa}</div>
                            <div className={styles.product_category}>{product.category.title_fa}</div>
                            <div className={styles.product_brand}>
                                <div className={styles.product_brand_title}>{product.brand.title_fa}</div>
                                <img className={styles.product_brand_logo_img} src={product.brand.logo.url[0]} alt={product.brand.title_fa} />
                            </div>
                            {/* <div className={styles.product_colors}>
                                {
                                    product.colors &&
                                    product.colors.map( (color) =>{
                                        <div className={styles.square} style={{backgroundColor : `${color.hex_code}`}} key={color.id} ></div>
                                    } )
                                }
                            </div> */}
                            <div className={styles.rating}>{`${product.rating.rate}امتیاز از ${product.rating.count} رای دهنده`}</div>
                            <div className={styles.description}>
                                {product.expert_reviews.description}
                            </div>
                        </div>
                        <div className={styles.card_image_container}>
                            <img className={styles.card_image} src={product.images.main.url[0]} alt={product.title_fa} />
                        </div>
                    </div>
                    <div className={styles.purchase}>
                        <div className={styles.purchase_price}>{product.default_variant.price.selling_price} ریال </div>
                        <button className={styles.purchase_button} onClick={() => handleAddToCart(product)}>اضافه کردن به سبد خرید</button>
                    </div>
                </div>
            }

        </div>
     );
}
 
export default ProductDetail;