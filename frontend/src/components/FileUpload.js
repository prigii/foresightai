'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function FileUploadModal({ isOpen, onClose }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Make an API request to the backend to upload the file
      const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 201) {
        // Navigate to the dashboard
        router.push('/dashboard');  // Make sure you have a dashboard route in Next.js
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <h2 className="text-2xl font-semibold mb-4">Upload Data (CSV or XLSX)</h2>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            accept=".csv, .xlsx"
            onChange={handleFileChange}
            className="mb-4"
          />
          <p className="text-gray-500">Drag and drop your file here, or click to select files.</p>
        </div>
        {file && (
          <div className="mb-4">
            <span className="text-gray-700">Selected File: {file.name}</span>
          </div>
        )}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg mr-4 hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className={`px-4 py-2 text-white rounded-lg ${uploading ? 'bg-green-500' : 'bg-blue-600'} hover:bg-blue-700 transition duration-200`}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  );
}
