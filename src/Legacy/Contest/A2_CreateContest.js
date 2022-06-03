import React from 'react';


import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import CreateContest from '../Components/Cards/A2CreateContest'
import ArtistNavbar from '../Components/ArtistComponents/ArtistNavbar'

function CreateContestPage() {
  return (
    <div>
      <Background />
      <ArtistNavbar />
      <CreateContest />
    </div>
  );
}

export default CreateContestPage;
