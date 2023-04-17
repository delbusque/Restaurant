const UserDetails = ({ user }) => {
    return (
        <div className="user-details">
            {user.firstName || user.lastName
                ? <h4>{user.firstName} {user.lastName}</h4>
                : <h4>{user.email}</h4>
            }
            {
                user.phone
                    ? <p><strong><i className="fa-solid fa-phone-volume"></i> </strong>{user.phone}</p>
                    : null
            }

            <span className="material-symbols-outlined" href={`mailto:${user.email}`}>
                <a className='anchor-mail' href={`mailto:${user.email}`}>email</a></span>
        </div>
    )
}

export default UserDetails;