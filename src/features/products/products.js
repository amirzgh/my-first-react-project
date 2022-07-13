import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import Pagination from '../pagination/Pagination'
import styles from './products.module.css'

const ProductsList = () => {

    const[searchParams] = useSearchParams()
    const[products,setProducts] = useState()
    const[pageParam, setPageParam] = useState({
        page : 1,
        rows: 15,
        totalPages : 1
    });

    useEffect(() =>{
        searchParams.set('page', pageParam.page);
        searchParams.set('rows', pageParam.rows);
        let searchQuery = searchParams.toString()
        axios.get(`https://api.digikala.com/v1/search/?${searchQuery}`).then(
            response =>{
                setProducts(response.data.data.products);
                if (pageParam.totalPages !== response.data.data.pager.total_pages) {
                    setPageParam({
                        totalPages: response.data.data.pager.total_pages,
                        page: response.data.data.pager.current_page,
                        rows: pageParam.rows
                    })
                }
            },
        )
    },[pageParam,searchParams])


    return (
        <div>
            
            <div className={styles.products_container}>
                    { products &&
                        products.map(product => (
                            <ProductCard product={product} key={product.id}/>
                            ))
                        }
            </div>
            {
                products &&
            <Pagination onChange={(d) => setPageParam({...pageParam, ...d})} className={styles.products_paginator_container} pageParam={pageParam} />
            }
        </div>
    );
}
 
export default ProductsList;