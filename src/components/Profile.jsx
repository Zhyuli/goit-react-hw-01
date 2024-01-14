
export const Profile = ({name, tag, location, stats}) => {
    return (<div className="profile">
  <div className="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      className="avatar"
    />
            <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>


  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="value">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="value">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="value">{stats.likes}</span>
    </li>
  </ul>
</div>)
}