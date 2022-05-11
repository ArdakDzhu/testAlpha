import React from 'react';
import styles from './Card.module.scss'
import classNames from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {changeStatusLikeMem, filteredMemes} from '../../state/cards/actions';

const Card = ({url, name, statusLike, id}) => {
    const dispatch = useDispatch()

    const filteredStatus = useSelector((state) => state.memesList.menuStatus)

    const onClickHandler = (id) => {
        dispatch(changeStatusLikeMem(id))
        dispatch(filteredMemes(filteredStatus))
    }

    return (
        <div className={styles.Container}>
            <img src={url} alt=""/>
            <div className={classNames(styles.bottom, {[styles.active]: statusLike})}>
                <p>{name}</p>
                <button onClick={() => onClickHandler(id)}/>
            </div>
        </div>
    );
}

export default Card;
