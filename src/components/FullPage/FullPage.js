import React from 'react';
import { FeatureItem } from "../FeatureItem/FeatureItem";
import s from './FullPage.module.css';

export const FullPage = () => {
    return (
        <div className={s.fullPage}>
            <div className={s.feature}>
                <h1 className={s.title}>Ты сегодня покормил кота?</h1>
                <ul className={s.featureList}>
                    <FeatureItem/>
                </ul>
            </div>
        </div>
    );
}

