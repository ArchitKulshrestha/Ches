import { useState, useEffect } from "react";
import axios from "axios";
import DisplayContent from "./DisplayContent";

const ApiComponent = () => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token1 = localStorage.getItem("token");
      const token = token1.replace(/^"(.*)"$/, "$1");
      const url =
        "https://cdn.defencepost.in/ches_team_app/index.php/apis/get_portal_contents";
      const data2 = new FormData();
      data2.append("token", token);

      try {
        const response = await axios.post(url, data2);

        const data = response.data;
        setApiResponse(data);
        console.log(data);
        if (response.status === 200) {
          setApiResponse(response.data.data || []);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {apiResponse.length > 0 ? (
          <DisplayContent portals={apiResponse} />
        ) : (
          <p>No data available from the API.</p>
        )}
      </div>
    </div>
  );
};

export default ApiComponent;
