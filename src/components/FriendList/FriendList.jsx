import { FriendListItem } from "./FriendListItem"
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={[css['friend-list']]}>
            {friends.map(({ id, ...friend }) => (
                <li className={css.friendItem} key={id}>
                  <FriendListItem {...friend} />     
    </li>
))}
        </ul>
    )
}


