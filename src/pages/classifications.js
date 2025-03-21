import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

export default function Classifications() {
  const [classifications, setClassifications] = useState([]);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [expandedCard, setExpandedCard] = useState(null);
  const [gender, setGender] = useState('male');

  useEffect(() => {
    async function fetchClassifications() {
      try {
        let query = supabase
          .from("classificationdata")
          .select("class_code, event_name")
          .order('class_code');

        const { data, error } = await query;

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

    fetchClassifications();
  }, [gender]);

  const handleCardClick = async (classCode) => {
    if (expandedCard === classCode) {
      setExpandedCard(null);
      return;
    }

    setExpandedCard(classCode);

    if (!results[classCode]) {
      try {
        let query = supabase
          .from("classificationdata")
          .select("*")
          .eq("class_code", classCode)
          .order('result');

        const { data, error } = await query.then(({ data }) => ({
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Paralympic Classifications</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setGender('male')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2
              ${gender === 'male' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v6.5a1 1 0 11-2 0V3a1 1 0 011-1zm7 8a7 7 0 11-14 0 7 7 0 0114 0z" clipRule="evenodd" />
            </svg>
            Men
          </button>
          <button
            onClick={() => setGender('female')}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2
              ${gender === 'female' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Women
          </button>
        </div>
      </div>
      
      {gender === 'female' ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              No Classifications Found
            </h2>
            <p className="text-gray-500">
              Women&apos;s classification data is currently being updated.
            </p>
          </div>
        </div>
      ) : (
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
      )}

      {classifications.length === 0 && gender === 'male' && (
        <div className="text-center text-gray-600">
          No classifications found.
        </div>
      )}
    </div>
  );
} 