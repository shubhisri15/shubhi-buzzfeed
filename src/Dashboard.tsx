import Tile from "./Tile";
import tenzies from './assets/tenzies.png'
import cattitude from './assets/cattitude.png'
import tictactoe from './assets/tic-tac-toe.png'

export default function Dashboard() {
    return (
        <main>
            <h1>Shubhi's Buzzfeed</h1>
            <h2>A collection of mini games, built with love, care and lots of React!</h2>
            <div className='game-container'>
                <Tile img={tenzies} title='' description='' link='https://tenzies-kawaii.netlify.app/'/>
                <Tile img={cattitude} title="" description='' link='https://whats-your-cattitude.netlify.app/'/>
                <Tile img={tictactoe} title='Tic Tac Toe' description='' link='https://tic-tac-toe-game-bz.netlify.app/'/>

                {/* {<Tile img='' title='Connect 4!' description=''/>
                <Tile img='' title='Memory game' description=''/>
                <Tile img='' title='Wordle hurdle' description=''/>} */}
            </div>
        </main>
    )
}