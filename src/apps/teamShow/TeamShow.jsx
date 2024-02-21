import {React} from 'react';
import MemberCard from './components/memberCard/MemberCard';

import './TeamShow.scss';

const TeamShow = ({ selectedPart, selectedGroup, theme, members, setMembers  }) => {

  const generateTeams = () => {
    const teams = [];
    const participantsPerTeam = selectedPart / selectedGroup;

    for (let i = 1; i <= selectedGroup; i++) {
      const teamMembers = [];
      for (let j = 1; j <= participantsPerTeam; j++) {
        const memberIndex = (i - 1) * participantsPerTeam + j;
        teamMembers.push(
          <MemberCard 
            key={memberIndex}
            members={members} 
            setMembers={setMembers} 
            theme={theme} 
            participantIndex={memberIndex}
          />
        );
      }
      teams.push(
        <div key={i} className='team'>
          {selectedGroup !== 1 && (
            <h3>Team {i}</h3>
          )}
          {teamMembers}
        </div>
      );
    }
    return teams;
  };

  return (
    <div className='teamShow_container'>
      {selectedPart > 0 && selectedGroup > 0 && (
        <div className={`teams_container teams${selectedGroup}`}>
          {generateTeams()}
        </div>
      )}
    </div>
  );
};

export default TeamShow;
