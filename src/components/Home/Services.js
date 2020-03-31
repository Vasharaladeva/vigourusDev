import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import services from '../../constants/services'
export default function Services() {
    return (
        <section className={styles.services}>
            <Title title="Nuestros" subtitle="Servicios" ></Title>
            <div className={styles.center}>
                {
                services.map((item,index) => {
                    return <article 
                            key={index} 
                            className={styles.service}
                            >
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p> {item.text} </p>
                        </article>
                })
                }
            </div>
        </section>
    )
}
