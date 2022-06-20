import React from 'react';
import s from './FeatureItem.module.css';


export const FeatureItem = () => {
    return (
        <li className={s.featureItem}>
            <a href='/' className={`${s.card} ${s.disabled}`}>
                <div className={s.cardPicture}>
                    <picture>
                        <source srcSet='/img/cat.avif' type='image/avif' />
                        <source srcSet='/img/cat.webp' type='image/webp' />
                        <img loading='lazy' src='/img/cat.png' alt='' />
                    </picture>
                </div>
                <div className={s.cardTop}>
                    <p className={s.cardTopText}>Сказочное заморское яство</p>
                    <h2 className={s.cardTitle}>Нямушка</h2>
                    <h3 className={s.cardSubTitle}>с фуа-гра</h3>
                    <p className={s.cardDesc}><span><b>10</b></span> порций</p>
                    <p className={s.cardDesc}>мышь в подарок</p>
                </div>
                <div className={s.cardBottomRight}>
                    <div className={s.cardBottom}>
                        <span className={s.cardSize}>0,5</span>
                        <span>кг</span>
                    </div>
                </div>
            </a>
            <p className={s.featureBottomText}>Чего сидишь? Порадуй котэ,
                <a href='/' className={s.featureLink}>купи.</a>
            </p>
        </li>
    );
}

