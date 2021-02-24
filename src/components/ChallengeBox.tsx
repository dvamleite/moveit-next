import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ChallegenBox.module.css';

export function ChallengeBox() {

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

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
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>

                        <button
                            type="button"
                            className={style.challengerCompleteButton}
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