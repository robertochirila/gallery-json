import React from "react";
import styled from "styled-components";
import Photo from "./Photo";

const GalleryGrid = styled.div`
     width: 100%;
     overflow: auto;
`;

const Column4 = styled.div`
     float: left;
     width: 25%;
`;

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
