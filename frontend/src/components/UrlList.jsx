import { useState } from "react";
import { deleteLink } from "../services/api";

export default function UrlList({ urls, setUrls }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (text, index) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const handleDelete = async (id) => {
    await deleteLink(id);
    setUrls((prev) => prev.filter((item) => item.id !== id));
  };

  if (!urls.length) return <p>No URLs yet</p>;

  return (
    <div>
      {urls.map((item, index) => (
        <div key={item.id} className="card">
          <div className="card-header">
            <a href={item.shortUrl} target="_blank" rel="noreferrer" className="link">{item.shortUrl}</a>
            <p className="clicks-badge">{item.clicks || 0} clicks</p>
          </div>
          <div className="actions">
            <button className="copy-btn" onClick={() => handleCopy(item.shortUrl, index)}>{copiedIndex === index ? "Copied!" : "Copy"}</button>
            <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
          <p className="small-text">Original: {item.originalUrl}</p>
        </div>
      ))}
    </div>
  );
}