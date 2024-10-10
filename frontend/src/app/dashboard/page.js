import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a request to fetch analysis results
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://<your-backend-url>/analysis-results/');
        setAnalysisResults(response.data);
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {loading ? (
        <div>Loading results, please wait...</div>
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Analysis Results</h1>
          <pre className="whitespace-pre-wrap">{JSON.stringify(analysisResults, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
