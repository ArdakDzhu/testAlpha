import styles from './App.module.scss';
import {useEffect} from 'react';
import {fetchMemes, filteredMemes} from './state/cards/actions';
import {useDispatch, useSelector} from 'react-redux';
import Card from './components/Card/Card';
import FilterBlock from './components/FilterBlock/FilterBlock';

function App() {
    const dispatch = useDispatch()

    const memesList = useSelector((state) => state.memesList.filteredMemes)
    const filteredStatus = useSelector((state) => state.memesList.menuStatus)


    useEffect(() => {
        dispatch(fetchMemes())
    }, [])


    useEffect(() => {
        dispatch(filteredMemes(filteredStatus))
    },[filteredStatus])

    return (
        <div className={styles.Container}>
            <FilterBlock/>
            <div className={styles.CardsBlock}>
                {
                    memesList.map((item) => {
                        return (
                            <Card url={item.url} name={item.name} statusLike={item.statusLike} id={item.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;
