import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route,} from "react-router-dom";
import MemoryGameLevels from "./components/Memory game/MemoryGameLevels/MemoryGameLevels";
import Home from "./components/Home/Home";
import CardsList from "./components/Memory game/CardsList/CardsList";
import MemoryGame from "./components/Memory game/MemoryGame/MemoryGame";
import SudokuGame from "./components/Sudoku/SudokuGame/SudokuGame";
import SudokuLevels from "./components/Sudoku/SudokuLevels/SudokuLevels";
import SudokuDesk from "./components/Sudoku/SudokuDesk/SudokuDesk";
import MemoryGameWonPage from "./components/Memory game/MemoryGameWonPage/MemoryGameWonPage";
import SudokuWonPage from "./components/Sudoku/SudokuWonPage/SudokuWonPage"
import Translate from "./components/Translate/Translate";

class App extends Component {
    render() {
        return (
            <Routes>
                <Route element={<Translate/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/memory_game/" element={<MemoryGame/>}>
                        <Route path="levels" element={<MemoryGameLevels/>}/>
                        <Route path="play" element={<CardsList/>}/>
                        <Route path="won_page" element={<MemoryGameWonPage/>}/>
                    </Route>


                    <Route path="/sudoku/" element={<SudokuGame/>}>
                        <Route path="levels" element={<SudokuLevels/>}/>
                        <Route path="play" element={<SudokuDesk/>}/>
                        <Route path="won_page" element={<SudokuWonPage/>}/>
                    </Route>
                </Route>
            </Routes>
        )
    }
}

export default App;
