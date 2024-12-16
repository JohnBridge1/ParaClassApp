import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("classificationdata")
        .select(
          "event_code, class_code, name, npc, region, birth, result, date, city, country, event_name, wind, rank"
        );

      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Event Code
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Class Code
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              NPC
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Region
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Birth
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Result
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Date
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              City
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Country
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Event Name
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Wind
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#336600",
              }}
            >
              Rank
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.event_code}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.event_code}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.class_code}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.npc}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.region}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.birth}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.result}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.date}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.city}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.country}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.event_name}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.wind}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "left",
                }}
              >
                {item.rank}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
