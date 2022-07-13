import styles from './navbar.module.css'
import { createSearchParams, Link,useNavigate } from 'react-router-dom';
import  useSearch  from "../../customHooks/CustomHooks";

const Navbar = () => {
    const navigate = useNavigate();
    const submitSearch = () =>{
        navigate({
            path : '/',
            search : `?${createSearchParams(inputs)}`
        })
    }
    const {inputs,handleInputChanges,handleSubmit} = useSearch(submitSearch)
    const sortOptions=[
        {
            text:'مرتبط ترین',
            id:22
        },
        {
            text:'پربازدیدترین',
            id:4
        },
        {
            text:'جدید ترین',
            id:1
        },
        {
            text:'سریع ترین ارسال',
            id:25
        },
        {
            text:'پرفروش ترین',
            id:7
        },
        {
            text:'ارزان ترین',
            id:20
        },
        {
            text:'گران ترین',
            id:21
        },
        {
            text:'پیشنهاد خریداران',
            id:27
        },
    ]

    
    return ( 
        <div className={styles.navbar}>
            <Link to='/'>
            <img className={styles.logo} src="images/digiLogo.png" alt="digikala logo" />            
            </Link>
            <form className={styles.navbar_inputs} onSubmit={handleSubmit}>
                <input className={styles.search_input} type="text" name="q" placeholder='جست و جو' value={inputs.query} onChange={handleInputChanges} />
                <input type="number" className={styles.search_input} placeholder='حداقل قیمت' name="price[min]" value={inputs.minPrice} onChange={handleInputChanges} /> 
                <input type="number" className={styles.search_input} placeholder='حداکثر قیمت' name="price[max]" value={inputs.maxPrice} onChange={handleInputChanges}/>
                <select className={styles.search_input} name="sort" id="sort" value={inputs.sort}  onChange={handleInputChanges}>
                    <option value="null">انتخاب کنید</option>
                    {
                        sortOptions.map(option =>
                            <option className={styles.sort_select} value={option.id} key={option.id}>{option.text}</option>
                        )
                    }
                </select>
                <input type="submit" className={styles.search_input + " " + styles.submit_btn} value='جست و جو'  />
            </form>
        </div>
     );
}
 
export default Navbar;