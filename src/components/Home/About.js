import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg2.jpg'
export default function About() {
    return (
        <section className={styles.about}>
            
            <Title title="Sobre" subtitle="Nosotros"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explora con Nosotros</h4>
                    <p>Awaken Tours</p>
                    
                    <button type="button" className="btn-primary">Mas Informacion</button>
                </article>
            </div>
        </section>
    )
}
 