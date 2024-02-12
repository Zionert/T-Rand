// TeamShow.jsx
import React from 'react';
import './TeamShow.scss';
import MemberCard from './components/memberCard/MemberCard';

const TeamShow = ({ selectedPart, selectedGroup, theme }) => {
  const generateTeams = () => {
    const teams = [];
    const participantsPerTeam = selectedPart / selectedGroup;

    for (let i = 1; i <= selectedGroup; i++) {
      const teamMembers = [];
      for (let j = 1; j <= participantsPerTeam; j++) {
        teamMembers.push(<MemberCard theme={theme} key={`${i}-${j}`} />);
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

  const teamsContainerClass = ` teams${selectedGroup}`;

  return (
    <div className='teamShow_container'>
      {selectedPart > 0 && selectedGroup > 0 && (
        <div className={`teams_container${teamsContainerClass}`}>
          {generateTeams()}
        </div>
      )}
    </div>
  );
};

export default TeamShow;
