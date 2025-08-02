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
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

      <div style={styles.result}>
        {loading && <p style={styles.message}>Loading...</p>}
        {error && <p style={styles.message}>Looks like we can't find the user.</p>}
        {userData && (
          <div style={styles.card}>
            <img
              src={userData.avatar_url}
              alt="avatar"
              style={styles.avatar}
            />
            <h2>{userData.name || userData.login}</h2>
            <p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "4rem",
  },
  form: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
  },
  input: {
    padding: "0.6rem 1rem",
    fontSize: "1rem",
    width: "260px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    backgroundColor: "#24292e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  result: {
    textAlign: "center",
    maxWidth: "400px",
  },
  message: {
    fontSize: "1.1rem",
    color: "#333",
  },
  card: {
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  avatar: {
    width: "120px",
    borderRadius: "50%",
    marginBottom: "1rem",
  },
  link: {
    color: "#0366d6",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Search;
