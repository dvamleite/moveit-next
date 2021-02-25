import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/ChallegenBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { ResetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        ResetCountdown();
        new Audio('/21.mp3').play();
    }

    function handleChallengeFailed() {
        resetChallenge();
        ResetCountdown();
        new Audio('/61.mp3').play();
    }

    return (
        <div className={style.challegenBoxConteiner}>
            {activeChallenge ? (
                <div className={style.challengeBoxActive}>
                    <header>{activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={style.challengerFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={style.challengerCompleteButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei !
                        </button>
                    </footer>
                </div>
            ): (
                <div className={style.challegenBoxnotactive}>
                <strong>Finalize um Ciclo para Receber Mais Dessafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="LEVEL UP" />
                    Avance de Level Completando os Desafios !
                </p>
            </div>
            )}
        </div>
    )
}