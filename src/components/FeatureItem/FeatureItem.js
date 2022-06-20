import React from 'react';
import s from './FeatureItem.module.css';
import cat from './img/cat.png';
import catAvif from './img/cat.avif';
import catWebp from './img/cat.webp';


export const FeatureItem = () => {
    return (
        <>
            {/*TODO: Создать интерфейс и циклом перебирать карточки*/}
            <li className={`${s.featureItem} ${s.d}`}>
                <a href='/' className={s.card}>
                    <div className={s.cardPicture}>
                        <picture>
                            <source srcSet={catAvif} type='image/avif' />
                            <source srcSet={catWebp} type='image/webp' />
                            <img loading='lazy' src={cat} alt='' />
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
            <li className={`${s.featureItem} ${s.active}`}>
                <a href='/' className={s.card}>
                    <div className={s.cardPicture}>
                        <picture>
                            <source srcSet={catAvif} type='image/avif' />
                            <source srcSet={catWebp} type='image/webp' />
                            <img loading='lazy' src={cat} alt='' />
                        </picture>
                    </div>
                    <div className={s.cardTop}>
                        <p className={s.cardTopText}>Сказочное заморское яство</p>
                        <h2 className={s.cardTitle}>Нямушка</h2>
                        <h3 className={s.cardSubTitle}>с рыбой</h3>
                        <p className={s.cardDesc}><span><b>40</b></span> порций</p>
                        <p className={s.cardDesc}>2 мыши в подарок</p>
                    </div>
                    <div className={s.cardBottomRight}>
                        <div className={s.cardBottom}>
                            <span className={s.cardSize}>2</span>
                            <span>кг</span>
                        </div>
                    </div>
                </a>
                <p className={s.featureBottomText}>Чего сидишь? Порадуй котэ,
                    <a href='/' className={s.featureLink}>купи.</a>
                </p>
            </li>
            <li className={`${s.featureItem} ${s.disabled}`}>
                <a href='/' className={s.card}>
                    <div className={s.cardPicture}>
                        <picture>
                            <source srcSet={catAvif} type='image/avif' />
                            <source srcSet={catWebp} type='image/webp' />
                            <img loading='lazy' src={cat} alt='' />
                        </picture>
                    </div>
                    <div className={s.cardTop}>
                        <p className={s.cardTopText}>Сказочное заморское яство</p>
                        <h2 className={s.cardTitle}>Нямушка</h2>
                        <h3 className={s.cardSubTitle}>с курой</h3>
                        <p className={s.cardDesc}><span><b>100</b></span> порций</p>
                        <p className={s.cardDesc}>5 мышей в подарок</p>
                        <p className={s.cardDesc}>заказчик доволен</p>

                    </div>
                    <div className={s.cardBottomRight}>
                        <div className={s.cardBottom}>
                            <span className={s.cardSize}>5</span>
                            <span>кг</span>
                        </div>
                    </div>
                </a>
                <p className={s.featureBottomText}>Печалька, с курой закончился.</p>
            </li>
        </>
    );
}

