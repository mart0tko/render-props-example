function Profile({ data }) {
    return (
        <>
            <h1>Username: {data.login}</h1>
            <h2>Url: {data.html_url}</h2>
            <img src={data.avatar_url}/> 
        </>
    );
}

export default Profile;