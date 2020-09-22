import React from "react";
import styled from "styled-components";

const PhotoGallery = styled.img`
     width: 90%;
     margin-left: 5%;
     height: auto;
     @media (min-width: 600px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
     }
     @media (min-width: 1000px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
     }
`;

const ContainerDescription = styled.div`
     width: 90%;
     height: auto;
     background: rgb(0, 122, 204);
     margin-left: 5%;
     @media (min-width: 600px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
     }
     @media (min-width: 1000px) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
     }
`;

const PhotoDescription = styled.h3`
     color: #fff;
     text-align: center;
     padding: 5%;
     margin: 10%;
     @media (min-width: 600px) {
          padding: 2%;
          margin: 5%;
     }
     @media (min-width: 1000px) {
          padding: 0;
          margin: 2%;
     }
`;

const PhotoWrapper = styled.div`
     position: relative;
`;

const Photo = (props) => {
     const { photo } = props;
     return (
          <PhotoWrapper>
               <ContainerDescription>
                    <PhotoDescription>{photo.title}</PhotoDescription>
               </ContainerDescription>
               <PhotoGallery src={photo.url} />
          </PhotoWrapper>
     );
};

export default Photo;
