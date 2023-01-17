import lastFreeCell from "./img/last_free_cell.png";
import lastFreeCell_1 from "./img/last_free_cell_1.png"
import lastFreeCell_2 from "./img/last_free_cell_2.png"
import lastFreeCell_3 from "./img/last_free_cell_3.png"
import lastFreeCell_4 from "./img/last_free_cell_4.png"

import lastRemainingCell from "./img/last_remaining_cell.png";
import lastRemainingCell_1 from "./img/last_remaining_cell_1.png"
import lastRemainingCell_2 from "./img/last_remaining_cell_2.png"

import lastPossibleNumber from "./img/last_possible_number.png";
import lastPossibleNumber_1 from "./img/last_possible_number_1.png";
import lastPossibleNumber_2 from "./img/last_possible_number_2.png";

import obviousSingles from "./img/obvious_singles_technique.png"
import obviousSingles_1 from "./img/obvious_singles_1.png"
import obviousSingles_2 from "./img/obvious_singles_2.png"

import obviousPairs from "./img/obvious_pairs.png"
import obviousPairs_1 from "./img/obvious_pairs_1.png"

import obviousTriples from "./img/obvious_triples.png"
import obviousTriples_1 from "./img/obvious_triples_1.png"
import obviousTriples_2 from "./img/obvious_triples_2.png"
import obviousTriples_3 from "./img/obvious_triples_3.png"

import hiddenSingles from "./img/hidden_singles.png"
import hiddenSingles_1 from "./img/hidden_singles_1.png"
import hiddenSingles_2 from "./img/hidden_singles_2.png"

import hiddenPairs from "./img/hidden_pairs.png"
import hiddenPairs_1 from "./img/hidden_pairs_1.png"
import hiddenPairs_2 from "./img/hidden_pairs_2.png"

import hiddenTriples from "./img/hidden_triples.png"
import hiddenTriples_1 from "./img/hidden_triples_1.png"
import hiddenTriples_2 from "./img/hidden_triples_2.png"

import pointingPairs from "./img/pointing_pairs.png"
import pointingPairs_1 from "./img/pointing_pairs_1.png"
import pointingPairs_2 from "./img/pointing_pairs_2.png"

import pointingTriples from "./img/pointing_triples.png"
import pointingTriples_1 from "./img/pointing_triples_1.png"
import pointingTriples_2 from "./img/pointing_triples_2.png"

export const hints = [
    {
        id: 0,
        title: "Last free cell technique",
        text: "Last free cell is the basic Sudoku solving technique. " +
            "It's pretty simple and based on the fact that each 3×3 block, " +
            "vertical column or horizontal row on Sudoku grid should contain numbers " +
            "from 1 to 9 and each number can be used only once within 3×3 block, vertical " +
            "column or horizontal row. Therefore, if we see that there is only one free cell " +
            "left in the 3×3 block, vertical column or horizontal row, then we have to define " +
            "which number from 1 to 9 is missing and enter it in this empty cell. You can see " +
            "how it looks in the examples below. This is the main basic rule. Once you have " +
            "learned it, you can proceed with the following Sudoku strategies.",
        img: lastFreeCell,
        img_1: lastFreeCell_1,
        img_2: lastFreeCell_2,
        img_3: lastFreeCell_3,
        img_4: lastFreeCell_4
    },
    {
        id: 1,
        title: "Last remaining cell technique",
        text: "Last remaining cell is another basic " +
            "Sudoku strategy. It's based on the fact that " +
            "numbers should not be repeated within 3×3 block, " +
            "vertical column and horizontal row. Let's take a look at an example " +
            "with the 3x3 block. There always must be number 8 - in each block, column and row. " +
            "There's already 8 in the column and in the row. As we already know, we can't repeat " +
            "numbers. So we can't place 8 there again. It means that there's only one cell " +
            "remaining inside the block and we should put number 8 into it. The same technique " +
            "applies to the Rows and Columns. That is how Last remaining cell technique can be " +
            "used while solving Sudoku. Once you have learned it, you can proceed with the following " +
            "Sudoku strategies.",
        img: lastRemainingCell,
        img_1: lastRemainingCell_1,
        img_2: lastRemainingCell_2,
    },
    {
        id: 2,
        title: "Last possible number technique",
        text: "Last possible number is a simple strategy that is suitable for beginners. It is " +
            "based on finding the missing number. To find the missing number you should take a look " +
            "at the numbers that are already exist in the 3x3 block you are interested in, and in the " +
            "rows and columns connected with it. Let's take a look at an example. Pay attention to the " +
            "highlighted cell. Look at the numbers in its block, row and column. We can see that " +
            "numbers 1,2,3,4,6,7,8,9 are already used in this row, column and block. The only missing " +
            "number is 5. Considering that numbers should not be repeated, the only number that must " +
            "be put in this cell is 5. That is how Last possible number technique works. Once you have " +
            "mastered it, you will begin to solve Sudoku easier and faster!",
        img: lastPossibleNumber,
        img_1: lastPossibleNumber_1,
        img_2: lastPossibleNumber_2,
    },
    {
        id: 3,
        title: "Obvious singles technique",
        text: "This strategy is based on the correct placement of Notes. Sometimes it is " +
            "called Naked Singles. The point is that in a specific cell only one digit (from " +
            "the Notes) remains possible. Let's have look at this case with an example. Let's " +
            "look at the highlited cell. We can see that it is filled with only one Note - " +
            "number 2. It means that this cell has only one possible solution. Since it is the " +
            "only possible option, this cell will be 2. So we remove Note from this cell and " +
            "fill it with the number 2. That is how Obvious singles technique works. As you see, " +
            "this is not as difficult as it seems. Therefore, if you put Obvious singles technique " +
            "into practice, the process of solving Sudoku will become easier and faster!",
        img: obviousSingles,
        img_1: obviousSingles_1,
        img_2: obviousSingles_2
    },
    {
        id: 4,
        title: "Obvious pairs technique",
        text: "Like the Obvious Singles technique, Obvious pairs is based on the correct " +
            "placement of Notes. The point is that you should find 2 cells with the same pairs " +
            "of Notes within 3x3 block. This means that these pairs of Notes cannot be used in " +
            "other cells within this 3x3 block. So they can be removed from your Notes. It will " +
            "be easier to understand this strategy if you look at the example. Let's look at this " +
            "block. We see empty cells filled with notes of possible numbers. Among them, there " +
            "are two cells that contain 7 or 9. This means that one of these cells necessarily " +
            "contains 7 and the other one contains 9. This also means that we can't have 7 and " +
            "9 in other cells of this block. Hence, we remove them from other cells' notes. Next " +
            "we can apply the Obvious singles rule we learned in the previous lesson. We'll write " +
            "6 in the cell with a single note of 6 and and 4 in another one. That is how Obvious " +
            "Pairs technique can be used while solving Sudoku. Once you have learned it, you can " +
            "proceed with the following Sudoku strategies.",
        img: obviousPairs,
        img_1: obviousPairs_1
    },
    {
        id: 5,
        title: "Obvious triples technique",
        text: "This Sudoku solving technique is built upon the previous one - Obvious pairs. " +
            "But Obvious triples is not based on two numbers from the Notes, it's based on three. " +
            "This is the only difference. To understand better, let's take a look at the example. " +
            "Look at the top left block. Its three bottom cells contain notes of 1, 5; 1, 8 & 5, 8. " +
            "This means that these cells have number 1, 5 & 8 in them but we don't know yet where " +
            "each number is exactly. What we know though, is that 1, 5 & 8 can't be in other cells " +
            "of this block. So, we can remove them from the notes. That is how Obvious Triples " +
            "technique works while solving Sudoku.",
        img: obviousTriples,
        img_1: obviousTriples_1,
        img_2: obviousTriples_2,
        img_3: obviousTriples_3
    },
    {
        id: 6,
        title: "Hidden singles technique",
        text: "Hidden singles is a quite simple Sudoku technique. The point of Hidden singles " +
            "is that a Note is the only one of its kind in an entire row, column, or 3x3 block. " +
            "However, this technique requires careful attention from the player, because " +
            "it can be quite hard to spot the single Notes. It will be easier to understand this " +
            "technique if you look at the example. Let's pay attention to this 3x3 block with " +
            "Notes. There is only one cell, that may contain number 1. It's the top right cell. " +
            "There are no any other cells in this block whith the Note 1. So we can remove all " +
            "the Notes from this cell and put number 1 instead, since it's the only possible " +
            "option. That's it for Hidden singles technique. Once you have learned it, you can " +
            "proceed with the following Sudoku strategies.",
        img: hiddenSingles,
        img_1: hiddenSingles_1,
        img_2: hiddenSingles_2
    },
    {
        id: 7,
        title: "Hidden pairs technique",
        text: "Hidden pairs technique works the same way as Hidden singles. The only thing " +
            "that changes is the number of cells and Notes. If you can find two cells within " +
            "a row, column, or 3x3 block where two Notes appear nowhere outside these cells, " +
            "these two Notes must be placed in the two cells. All other Notes can be eliminated " +
            "from these two cells. For example: Let's pay attention to this block with Notes " +
            "and look for the numbers that can be found in Notes less often than others. Only " +
            "two cells contain 2 and 6. This means 2 must occupy one of these cells and 6 must " +
            "occupy another. Any other numbers cannot be found in these cells. After this " +
            "conclusion, extra numbers can be deleted from the Notes to avoid confusion. " +
            "So, you know how to apply Hidden pairs technique in Sudoku. Now it's time for some " +
            "practice!",
        img: hiddenPairs,
        img_1: hiddenPairs_1,
        img_2: hiddenPairs_2
    },
    {
        id: 8,
        title: "Hidden triples technique",
        text: "Hidden triples technique is very similar to Hidden pairs and works on the same " +
            "concept. Hidden triples applies when three cells in a row, column, or 3x3 block " +
            "contain the same three Notes. These three cells also contain other candidates, " +
            "which may be removed from them. It will be easier to understand this technique " +
            "if you look at the example. Take a look at the highlighted cells. There are only " +
            "three cells, which contain repeated numbers: 5, 6 and 7. This means each of these " +
            "numbers must occupy one of these cells. And any other numbers cannot be found here. " +
            "If so, 5,6 and 7 cannot be presented in any other cell of this 3x3 block as well. " +
            "After this conclusion, extra numbers can be deleted from the Notes to avoid confusion. " +
            "That is how Hidden Triples technique works while solving Sudoku.",
        img: hiddenTriples,
        img_1: hiddenTriples_1,
        img_2: hiddenTriples_2
    },
    {
        id: 9,
        title: "Pointing pairs technique",
        text: "Pointing pairs applies when a Note is present twice in a block and this Note " +
            "also belongs to the same row or column. This means that the Note must be the solution " +
            "for one of the two cells in the block. So, you can eliminate this Note from any other " +
            "cells in the row or column. To understand Pointing pairs better, let's take a look " +
            "at the example. Let's look at the block at the top left corner. All the cells that " +
            "might contain number 4 are located in one column. As number 4 should appear in this " +
            "block at least once, one of the highlighted cells will surely contain 4. Hence, we " +
            "can safely eliminate all other possible 4s from all the cells of this column. " +
            "Remember that you can do the same trick for blocks, rows, and columns. That's it " +
            "for Pointing pairs technique. Now you can proceed with the following Sudoku strategy " +
            "Pointing triples.",
        img: pointingPairs,
        img_1: pointingPairs_1,
        img_2: pointingPairs_2
    },
    {
        id: 10,
        title: "Pointing triples technique",
        text: "Pointing triples technique is very similar to Pointing pairs. It applies if a " +
            "Note is present in only three cells of a 3x3 block and also belongs to the same row " +
            "or column. This means that the Note must be a solution for one of these three cells " +
            "in the block. So, obviously it can't be a solution of any other cell in the row or " +
            "column and can be eliminated from them. For example: Let's take a look at the bottom " +
            "right corner. In this block all the cells that might contain number 1 are located " +
            "in one row. As number 1 must appear in the bottom right block at least once, one of " +
            "the highlighted cells will surely contain 1. After this conclusion all other possible " +
            "numbers 1 can be safely deleted from the Notes of this row to avoid confusion. " +
            "Remember that you can do the same trick for blocks, rows, and columns. That is how " +
            "Pointing Triples technique works. Once you have learned it, you can get some " +
            "practice.",
        img: pointingTriples,
        img_1: pointingTriples_1,
        img_2: pointingTriples_2,
    }
]