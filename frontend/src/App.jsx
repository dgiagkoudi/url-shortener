import { useEffect, useState } from "react";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import { getAllLinks } from "./services/api";

export default function App() {
  const [urls, setUrls] = useState([]);

  const loadLinks = async () => {
    const res = await getAllLinks();
    setUrls(res.data ?? res);
  };

  useEffect(() => {
    loadLinks();
  }, []);

  const handleNewUrl = (apiResponse) => {
    const newEntry = {
      ...apiResponse.data,
      shortUrl: apiResponse.shortUrl 
    };

    setUrls((prev) => {
      if (!Array.isArray(prev)) return [newEntry];
      return [newEntry, ...prev];
    });
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>

      <UrlForm onNewUrl={handleNewUrl} />

      <UrlList urls={urls} setUrls={setUrls} />
    </div>
  );
}