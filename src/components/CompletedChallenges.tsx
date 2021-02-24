import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {

    const {challengesCompleted} = useContext(ChallengesContext)

    return (
        <div className={styles.comopletedChallegensContainer}>
            <span>Desafios Completos</span>
            <div>
                <span>{challengesCompleted}</span>
                <img src="icons/info.png" alt="Informações" />                
            </div>
        </div>
    );
}