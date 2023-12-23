import { HomeE, NavBarE } from "./ComponentsEureka";
import { useState } from "react";
import DisplayContent from "./ComponentsEureka/DisplayContent";
import Upload from "./ComponentsEureka/FileUploadForm";
import ApiComponent from "./ComponentsEureka/ApiComponent";
// import Login from "./ComponentsEureka/Login";
function AppEureka() {

  const [apiResponse, setApiResponse] = useState([]);

  const handleDataFetched = (data) => {
    setApiResponse(data);
  };
  return (
    <>
      <>
        <div className="text-text-100 bg-background-950 font-OpenSans ">
          <NavBarE />
          <div className=" bg-herobgMobile sm:bg-herobg bg-cover bg-no-repeat bg-center">
            <HomeE />
            
            
      
              </div>
        </div>
      </>
    </>
  );
}

export default AppEureka;
