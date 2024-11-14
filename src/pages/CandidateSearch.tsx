import { useState, useEffect, CSSProperties } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Profile from '../components/Profile';
import { Candidate } from '../interfaces/Candidate.interface';
import PotentialCandidates from '../components/PotentialCandidates';

const CandidateSearch = () => {
  const [users, setUsers] = useState<Candidate[]>([])
  
  useEffect(() => {
    const fetchUsers = async () => {
    const users = await searchGithub()
      console.log(users)
      const usersWithDetails: Candidate[] = await Promise.all(
        users.map(async (user: any) => {
          const profile = await searchGithubUser(user.login)
          console.log(profile)
          return {
            id: profile.id, 
            username: profile.login, 
            htmlUrl: profile.html_url, 
            email: profile.email, 
            company: profile.company, 
            location: profile.location, 
            bio: profile.bio, 
            avatar: profile.avatar_url,
          }
        })
      )
      const filteredUsers = usersWithDetails.filter(
        (user: Candidate) => user.id && user.username
      )
      setUsers(filteredUsers)
    }
    fetchUsers()
  }, [])

  const profilesList = users.map((user: Candidate, index: number) => {
    console.log(user)
    return (
      <Profile
        key={index}
        id={user.id}
        username={user.username}
        htmlUrl={user.htmlUrl}
        company={user.company}
        email={user.email}
        location={user.location}
        bio={user.bio}
        avatar={user.avatar}/>
    )
  })

  const handleClick = (action: string) => {
    if (action === "accept") {
      const potentialUser = users[0]
      const potentialUsers = JSON.parse(
        localStorage.getItem("potentialUsers") || "[]"
      )
      localStorage.setItem(
        "potentialUsers",
        JSON.stringify([...potentialUsers, potentialUser])
      )
    }
    const updatedUsers = users.slice(1)
    setUsers(updatedUsers)
  }

  const styles: { [key: string]: CSSProperties } = {
    h1: {
      textAlign: "center", 
    }, 
    Loading: {
      textAlign: "center", 
      width: "100%", 
      fontSize: "2rem", 
      color: "blue"
    }
  }

  return (
    <div>
      <h1 style={styles.h1}>Candidate Search</h1>
      {users.length === 0 ? (
        <p style={styles.Loading}>Loading...</p>
          ) : 
          (<PotentialCandidates candidates={profilesList} handleClick={handleClick} />
          )
      }
    </div>
)}


export default CandidateSearch;
