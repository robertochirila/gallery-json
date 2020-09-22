import React from "react";
import styled from "styled-components";
import Photo from "./Photo";

const GalleryGrid = styled.div`
     overflow: none;
     display: grid;
     grid-template-columns: 1fr;
     grid-auto-rows: minmax(150px, auto);

     @media (min-width: 600px) {
          grid-template-columns: 1fr 1fr;
          grid-row-gap: 1%;
          grid-column-gap: 5%;
     }
     @media (min-width: 1000px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
     }
`;

const Column4 = styled.div``;

const Gallery = (props) => {
     const { data } = props;
     return (
          <GalleryGrid>
               {data.map((photo, index) => {
                    return (
                         <Column4 key={index}>
                              <Photo photo={photo} index={index} />
                         </Column4>
                    );
               })}
          </GalleryGrid>
     );
};

export default Gallery;
