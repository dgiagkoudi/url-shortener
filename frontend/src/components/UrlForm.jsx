import { useState } from "react";
import { shortenUrl } from "../services/api";

export default function UrlForm({ onNewUrl }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError("");

    try {
      const data = await shortenUrl(url);
      onNewUrl(data);
      setUrl("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input 
          className="input" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Enter URL..."
        />
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Shorten"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}