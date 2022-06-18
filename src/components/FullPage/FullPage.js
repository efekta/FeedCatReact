import React from 'react';
import s from './FullPage.module.css';
// import cn from './FullPage.module.css';


export const FullPage = () => {
    return (
        <div className={s.fullPage}>
            <div className={s.features}>
                <h1 className={s.title}>Ты сегодня покормил кота?</h1>
            </div>
        </div>
    );
}

