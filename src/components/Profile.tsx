import { Candidate } from '../interfaces/Candidate.interface'; 
import { CSSProperties } from 'react'; 
import Info from './Info'

const Profile = ({ id, username, htmlUrl, location, email, company, bio, avatar}: Candidate) => {

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px', 
        maxWidth: '400px', 
        margin: '0 1rem', 
        overflow: 'hidden',
    }, 
    avatarContainer: {
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '1rem', 
        margin: 0, 
    }, 
    profileContainer: {
        margin: '0 1.2rem', 
        width: '100%', 
        minWidth: '200px', 
    }, 
    h2: {
        margin: 0, 
        fontSize: '2rem', 
    }, 
    img: {
        maxHeight: '300px', 
    }
}

return (
    <div id={id} style={styles.container}>

        <div style={styles.avatarContainer}>
            <img style={ styles.img} src={avatar} alt={username}/>
        </div>

        <div style={styles.profileContainer}>
            <a href={htmlUrl} target="_blank">
                <h2 style={styles.h2}>{username}</h2>
            </a>
            <Info title={'Email'} text={email}/>
            <Info title={'Company'} text={company}/>
            <Info title={'Location'} text={location}/>
            <Info title={'Bio'} text={bio}/>
        </div>
    </div>
    )
}

export default Profile