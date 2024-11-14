import { CSSProperties, ReactNode } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 

const PotentialCandidates = ({candidates, handleClick}: {candidates: ReactNode[], handleClick: Function}) => {

    const styles: { [key: string]: CSSProperties } = {
        profileSelector: {
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%', 
            maxWidth: '600px', 
        }, 
        decline: {
            alignContent: 'center', 
            fontSize: '3rem', 
            color: 'white', 
            cursor: 'pointer', 
            padding: '0.5rem', 
            paddingBottom: '1rem', 
            backgroundColor: 'red', 
            borderRadius: '0.5rem 0 0 0.5rem', 
        }, 
        accept: {
            alignContent: 'center', 
            fontSize: '3rem', 
            color: 'white', 
            cursor: 'pointer', 
            padding: '0.5rem', 
            paddingBottom: '1rem', 
            backgroundColor: 'green', 
            borderRadius: '0.5rem 0 0 0.5rem', 
        },
    };

    return (
        <div style={styles.profileSelector}>
            <div style={styles.decline} onClick={() => handleClick("decline")}>
                <FontAwesomeIcon
                style={{ transform: "rotate(45deg)"}}
                icon={faPlus}
                />
            </div>
            <div> {candidates[0]} </div>
            <div style={styles.accept} onClick={() => handleClick("accept")}>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        </div>
    );
};

export default PotentialCandidates; 