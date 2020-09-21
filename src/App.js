import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Gallery from "./components/Gallery";

const Wrapper = styled.div`
     background: rgb(30, 30, 30);
     height: 100vh;
     overflow: auto;
`;

function App() {
     const [data, getData] = useState([]);
     useEffect(() => {
          console.log("it mounted");
          console.count("how many times it rendered");
          fetch("https://jsonplaceholder.typicode.com/photos")
               .then((response) => response.json())
               .then((json) => {
                    getData(json);
               });
     }, []);
     return (
          <Wrapper>
               {data.length > 0 ? (
                    <Gallery data={data} />
               ) : (
                    <p>Fetching data</p>
               )}
          </Wrapper>
     );
}

export default App;
