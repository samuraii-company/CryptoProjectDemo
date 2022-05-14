import styles from "../../styles/Homepage/BackedByTheBest.module.scss"
import { useState, useEffect } from "react"
import axios from "axios";


const BackedByTheBest = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            const response = await axios.get('http://localhost:3000/api/sponsors');
            const sponsors_data = await response.data;
            setData(sponsors_data)
        }
        getdata();
    }, [])
    return (
        <div className={styles.wrapper}>
            <h1>Backed by the best</h1>
            <div className={styles.sponsors}>
                {data && data.map(({ id, image, name, company }) => (
                    <div className={styles.box} key={id}>
                        <img src={`/sponsors/${image}`} alt={name} />
                        <div className={styles.text}>
                            <h2>{name}</h2>
                            <p>{company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BackedByTheBest