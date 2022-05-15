import styles from "../../styles/Pricing/PriceList.module.scss"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios";


const PriceList = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        const getdata = async () => {
            const response = await axios.get('http://localhost:3000/api/plans');
            const plans_data = await response.data;

            if (!plans_data) {
                plans_data = null
            }
            setData(plans_data)
        }
        getdata();
    }, [])
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Pricing</h1>
            <div className={styles.box_wrapper}>
                {data && data.map(({ id, title, description, price, path }) => (
                    <div className={styles.box} key={id}>
                        <h1>{title} Plan</h1>
                        <h2>{description}</h2>
                        <span>${`${price}`}</span>
                        <p>Per Month</p>
                        <Link href={`/buy/${path}`}><button>Buy {title}</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceList