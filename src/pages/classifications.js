import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

export default function Classifications() {
  const [classifications, setClassifications] = useState([]);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    fetchClassifications();
  }, []);

  async function fetchClassifications() {
    try {
      const { data, error } = await supabase
        .from("classificationdata")
        .select("class_code, event_name")
        .order('class_code');

      if (error) throw error;

      const uniqueData = data.filter((item, index, self) =>
        index === self.findIndex((t) => (
          t.class_code === item.class_code && t.event_name === item.event_name
        ))
      );

      setClassifications(uniqueData);
    } catch (error) {
      console.error("Error fetching classifications:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleCardClick = async (classCode) => {
    // Toggle card expansion
    if (expandedCard === classCode) {
      setExpandedCard(null);
      return;
    }

    setExpandedCard(classCode);

    // Only fetch if we haven't already
    if (!results[classCode]) {
      try {
        const { data, error } = await supabase
          .from("classificationdata")
          .select("*")
          .eq("class_code", classCode)
          .order('result')
          .then(({ data }) => ({
            // Filter out duplicates based on name, result, date, and npc
            data: data.filter((item, index, self) =>
              index === self.findIndex((t) => (
                t.name === item.name &&
                t.result === item.result &&
                t.date === item.date &&
                t.npc === item.npc
              ))
            )
          }));

        if (error) throw error;
        setResults(prev => ({ ...prev, [classCode]: data }));
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="text-lg">Loading classifications...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Paralympic Classifications</h1>
      
      <div className="grid gap-4">
        {classifications.map((classification, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleCardClick(classification.class_code)}
          >
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Class: {classification.class_code}
            </h2>
            <p className="text-gray-600 mb-4">
              {classification.event_name}
            </p>

            {/* Results Section */}
            {expandedCard === classification.class_code && (
              <div className="mt-4 border-t pt-4">
                <h3 className="font-semibold mb-3">Results:</h3>
                {results[classification.class_code] ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left">Name</th>
                          <th className="px-4 py-2 text-left">Result</th>
                          <th className="px-4 py-2 text-left">NPC</th>
                          <th className="px-4 py-2 text-left">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results[classification.class_code].map((result, idx) => (
                          <tr key={idx} className="border-b">
                            <td className="px-4 py-2">{result.name}</td>
                            <td className="px-4 py-2">{result.result}</td>
                            <td className="px-4 py-2">{result.npc}</td>
                            <td className="px-4 py-2">{result.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    Loading results...
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {classifications.length === 0 && (
        <div className="text-center text-gray-600">
          No classifications found.
        </div>
      )}
    </div>
  );
} 