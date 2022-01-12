import React from 'react';
import styled from 'styled-components';

const platformConfigs = [
  {
    name: 'soundcloud',  //https://developers.soundcloud.com/docs/api/html5-widget#playground
    shareDomains:['https://soundcloud.com/'],
    iFrameHeight: (url => "100%"),
    getEmbedLinkFromEmbedParameters: (params => `https://w.soundcloud.com/player/?url=${params.embedId}`),
    getEmbedParametersFromShareLink: ((url,shareDomains) => ({embedId: url}))
  },
  {
    name: 'spotify',
    shareDomains: ['https://open.spotify.com/'],
    iFrameHeight: (url => {
      if(url.includes('/track'))
       return "80"; 
      else
        return '166';
    }),
    getEmbedParametersFromShareLink: ((url,shareDomains) => {
      let embedId;
      shareDomains.forEach(domain => {
        if(url.includes(domain)){
          embedId = url.split(domain)[1];
          return ({embedId})
        };
      })
      return ({embedId})
    }),
    getEmbedLinkFromEmbedParameters: (params => `https://open.spotify.com/embed/${params.embedId}`),
  },
  {
    name: 'youtube',
    shareDomains:['https://www.youtube.com/watch?v=','https://youtu.be'],
    iFrameHeight: (url => "166"),
    getEmbedLinkFromEmbedParameters: (params => {
      return `https://www.youtube.com/embed/${params.embedId}`
    }),
    getEmbedParametersFromShareLink: ((url,shareDomains) => {
      let embedId;
      shareDomains.forEach(domain => {
        if(url.includes(domain)){
          embedId = url.split(domain)[1];
          return ({embedId})
        };
      })
      return ({embedId})
    })
  }
];

const PlayerContainer = styled.div({
  height: '100%',
});

//here we're using a class in order to reference properties of the platform and input variables within the defined get functions -SG
class Platform {
  constructor(params){
    this.name = params.name;
    this.iFrameHeight = params.iFrameHeight;
    this.shareDomains = params.shareDomains;
    this.getEmbedLinkFromEmbedParametersFunction = params.getEmbedLinkFromEmbedParameters;
    this.getEmbedParametersFromShareLinkFunction = params.getEmbedParametersFromShareLink;
  }
  getEmbedParametersFromShareLink(url){
    return this.getEmbedParametersFromShareLinkFunction(url,this.shareDomains);
  }
  getEmbedLinkFromEmbedParameters(params){
    return this.getEmbedLinkFromEmbedParametersFunction(params);
  }
}

export const PlayWidget = ({ sourceUrl, iFrameHeight }) => {
  let platformName, iFrameSource;

  platformConfigs.forEach(item => {
    const platform = new Platform(item);
    if(platform.shareDomains.some(shareDomain => sourceUrl.includes(shareDomain))){
      iFrameSource = platform.getEmbedLinkFromEmbedParameters(platform.getEmbedParametersFromShareLink(sourceUrl));
      if(iFrameSource){
        platformName = platform.name;
        iFrameHeight = iFrameHeight || platform.iFrameHeight(iFrameSource) || "100%";
      }
    }
  });
    return (
      <PlayerContainer>
          <iframe
            width="100%"
            height={iFrameHeight}
            src={iFrameSource}
            frameBorder="no"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${platformName}-embed`}
            id={`${platformName}-widget`}
            scrolling="no"
            allowtransparency="true"
            className="player-embed"
          />
      </PlayerContainer>
    );
};
