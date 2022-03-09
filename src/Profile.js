import useFetch from "./useFetch";

function Profile({ data }) {
    const [fetchData] = useFetch("https://api.github.com/users/mart0tko");
    return (
        <>
            <h1>Username: {data && data.login}</h1>
            <h2>Url: {data && data.html_url}</h2>
            <img src={data && data.avatar_url} />
            {fetchData && <p>Custom hook for fetching example - <b>{fetchData.login}</b></p>}
        </>
    );
}

export default Profile;