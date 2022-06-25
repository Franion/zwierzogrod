import React from 'react';
import Quote1 from './Quote1';
import Quote2 from './Quote2';

import styles from '../styles/review.css';

import doggoStretch from '../images/dogVectors/doggoStretch.png';
import doggoCrazyRun from '../images/dogVectors/doggoCrazyRun.png';

function Reviews() {
    return(
        <div>
            <h1 className='header'>Opinie</h1>
            <Quote2 quote='Serdecznie polecamy kolonie w Zwierzogrodzie, to już 2 turnus naszego pieska i z pewnością nie ostatni. Cookie wrócił do domu wręcz obrażony, że tak krótko. Dziękujemy serdecznie Pani Wioli i całej rodzince za opiekę' img={doggoCrazyRun}/>
            <Quote1 quote='W 100% polecam Zwierzogród. Codziennie otrzymywałam zdjęcia i filmiki ze spaceru. Widziałam, że Megi jest zadowolona z pobytu w hotelu. Hotel prowadzi wspaniałe małżeństwo, które naprawdę dba o psy i o to aby rozłąka z właścicielami była jak najmniej odczuwalna. Megi z kolonii wróciła zadowolona. Na pewno jeszcze tu wrócimy ! Pozdrawiamy z Megi ' img={doggoStretch}/>
        </div>
    );
}

export default Reviews;