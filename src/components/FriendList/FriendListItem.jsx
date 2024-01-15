import clsx from "clsx";
import css from "./FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
   
        const statusClasses = clsx(css.status, {
            [css.online]: isOnline,
            [css.offline]: !isOnline,
        })
             return (
        <div className={css.item}>
  <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
  <p className={css.name}>{name}</p>
  <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}