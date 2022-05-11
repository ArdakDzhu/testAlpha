import styles from './FilterBlock.module.scss'
import {useDispatch} from 'react-redux';
import {changeMenuStatus, filteredMemes} from '../../state/cards/actions';

const FilterBlock = () => {
    const dispatch = useDispatch()

    const menuItems = [
        {name: 'Все карточки', id: 0},
        {name: 'Любимые', id: 1},
    ]

    const onCLickHandler = (id) => {
        dispatch(changeMenuStatus(id))
    }

    return (
        <div className={styles.FilterBlock}>
            {menuItems.map((item) => {
                return (
                    <button onClick={() => onCLickHandler(item.id)}>{item.name}</button>
                )
            })}
        </div>
    )
}

export default FilterBlock
