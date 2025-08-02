import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: "2rem" }}>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              alt="avatar"
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <h2>{userData.name || userData.login}</h2>
            <p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Profile
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
