import React from "react";
import styled from "styled-components";

const PhotoGallery = styled.img`
     width: 60%;
     height: auto;
     margin: 20%;
`;

const ContainerDescription = styled.div`
     width: 60%;
     height: auto;
     margin: 20%;
     background: rgb(0, 122, 204);
`;

const PhotoDescription = styled.h3`
     color: #fff;
     margin: 10%;
`;

const PhotoWrapper = styled.div``;

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
