import React, { useState } from "react";

function UploadReceipt() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [prompt, setPrompt] = useState("Extract all readable text from this receipt:");

  // Convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const base64Image = await toBase64(file);

      const response = await fetch("/api/scrape-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base64Image, prompt }),
      });

      if (!response.ok) throw new Error("Failed to process receipt");

      const data = await response.json();
      setResult(data.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setResult("Error processing receipt.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="h-screen w-screen flex mt-11 items-center flex-col">
      <div>
        <button onClick={() => window.history.back()} className="text-gray-500 mb-5">
          <i className="ri-arrow-left-line"></i> Back
        </button>
        <h1>Upload your receipt</h1>
        <p>Take a photo or upload an image of your receipt</p>
      </div>

      {/* image uploader */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="Receipt Preview"
            className="max-h-60 rounded-lg shadow-md"
          />
        </div>
      )}

      {/* prompt input */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="p-2 w-3/4 mb-4 border rounded-lg"
        rows={3}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-orange-600 py-3 px-10 rounded-lg mb-4 shadow-xl/20 text-white font-medium"
      >
        {loading ? "Processing..." : "Scrape the Bill"}
      </button>

      {result && (
        <div className="p-4 w-3/4 bg-gray-100 rounded-xl shadow-md whitespace-pre-wrap">
          <h2 className="font-bold mb-2">Extracted Receipt Text:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default UploadReceipt;
