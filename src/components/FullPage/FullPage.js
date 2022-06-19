import React from 'react';
import s from './FullPage.module.css';


export const FullPage = () => {
    return (
        <div className={s.fullPage}>
            <div className={s.feature}>
                <h1 className={s.title}>Ты сегодня покормил кота?</h1>
                <div className={s.featureList}>
                    <div className={s.featureItem}>
                        <div className={`${s.card} ${s.pink}`}>
                            <div className={s.cardPicture}>
                                <picture>
                                    <source srcSet='img/cat.avif' type='image/avif' />
                                    <source srcSet='img/cat.webp' type='image/webp' />
                                    <img loading='lazy' src='img/cat.png' alt='' />
                                </picture>
                            </div>
                            <div className={s.cardTop}>
                                <p className={s.cardTopText}>Сказочное заморское яство</p>
                                <h2 className={s.cardTitle}>Нямушка</h2>
                                <p className={s.cardSubTitle}>с фуа-гра</p>
                                <p className={s.cardDesc}><span><b>10</b></span> порций</p>
                                <p className={s.cardDesc}>мышь в подарок</p>
                            </div>
                            <div className={s.cardBottomRight}>
                                <div className={s.cardBottom}>
                                    <span className={s.cardSize}>0,5</span>
                                    <span>кг</span>
                                </div>
                            </div>
                        </div>
                        <p className={s.featureBottomText}>Чего сидишь? Порадуй котэ,
                            <a href="/" className={s.featureLink}>купи.</a>
                        </p>
                    </div>
                    <div className={s.featureItem}>
                        <div className={`${s.card} ${s.pink}`}>
                            <div className={s.cardPicture}>
                                <picture>
                                    <source srcSet='img/cat.avif' type='image/avif' />
                                    <source srcSet='img/cat.webp' type='image/webp' />
                                    <img loading='lazy' src='img/cat.png' alt='' />
                                </picture>
                            </div>
                            <div className={s.cardTop}>
                                <p className={s.cardTopText}>Сказочное заморское яство</p>
                                <h2 className={s.cardTitle}>Нямушка</h2>
                                <p className={s.cardSubTitle}>с фуа-гра</p>
                                <p className={s.cardDesc}><span><b>10</b></span> порций</p>
                                <p className={s.cardDesc}>мышь в подарок</p>
                            </div>
                            <div className={s.cardBottomRight}>
                                <div className={s.cardBottom}>
                                    <span className={s.cardSize}>0,5</span>
                                    <span>кг</span>
                                </div>
                            </div>
                        </div>
                        <p className={s.featureBottomText}>Чего сидишь? Порадуй котэ,
                            <a href="/" className={s.featureLink}>купи.</a>
                        </p>
                    </div>
                    <div className={s.featureItem}>
                        <div className={`${s.card} ${s.pink}`}>
                            <div className={s.cardPicture}>
                                <picture>
                                    <source srcSet='img/cat.avif' type='image/avif' />
                                    <source srcSet='img/cat.webp' type='image/webp' />
                                    <img loading='lazy' src='img/cat.png' alt='' />
                                </picture>
                            </div>
                            <div className={s.cardTop}>
                                <p className={s.cardTopText}>Сказочное заморское яство</p>
                                <h2 className={s.cardTitle}>Нямушка</h2>
                                <p className={s.cardSubTitle}>с фуа-гра</p>
                                <p className={s.cardDesc}><span><b>10</b></span> порций</p>
                                <p className={s.cardDesc}>мышь в подарок</p>
                            </div>
                            <div className={s.cardBottomRight}>
                                <div className={s.cardBottom}>
                                    <span className={s.cardSize}>0,5</span>
                                    <span>кг</span>
                                </div>
                            </div>
                        </div>
                        <p className={s.featureBottomText}>Чего сидишь? Порадуй котэ,
                            <a href="/" className={s.featureLink}>купи.</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

