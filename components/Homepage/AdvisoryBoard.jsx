import styles from "../../styles/Homepage/AdvisoryBoard.module.scss"
import { useState, useEffect } from "react"
import axios from "axios";

const AdvisoryBoard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getdata = async () => {
            const response = await axios.get('http://localhost:3000/api/command');
            const sponsors_data = await response.data;
            setData(sponsors_data)
        }
        getdata();
    }, [])

    return (
        <div className={styles.wrapper}>
            <h1>Advisory board</h1>
            <div className={styles.onboard}>
                {data && data.map(({ id, name, position }) => (
                    <div className={styles.box} key={id}>
                        <h2>{name}</h2>
                        <p>{position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdvisoryBoard