import { FriendListItem } from "./FriendListItem"

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, ...friend }) => (
                <li className="friendItem" key={id}>
                  <FriendListItem {...friend} />     
    </li>
))}
        </ul>
    )
}


