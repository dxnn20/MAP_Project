#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define newLine() printf("\n");


typedef enum {false, true} bool;

char **chess_table = NULL;
int dim[2] = {0, 0};

void tableInit(){

    chess_table = (char **) malloc(dim[0] * sizeof(char *));

    if(chess_table == NULL){
        printf("Error allocating memory!\n");
        exit(1);
    }

    for(int i = 0; i < dim[0]; i++) {
        chess_table[i] = (char *) malloc(dim[1] * sizeof(char));

        if(chess_table[i] == NULL){
            printf("Error allocating memory!\n");
            free(chess_table);
            exit(1);
        }
    }

    for(int i = 0; i < dim[0] ; i++)
        for(int j = 0 ; j < dim[1] ; j++)
            chess_table[i][j] = '_';

}

void printTable(){
    newLine();

    for(int i = 0; i < dim[0]; i++) {
        printf("|  ");
        for (int j = 0; j < dim[1]; j++)
            printf("%c  |  ", chess_table[i][j]);

        printf("\n");
    }
}

void placeQueen(int x, int y){
    chess_table[x][y] = 'X';
}

bool isSafe(int row, int col){
    for(int i = 0 ; i < dim[0] ; i++)
        if(chess_table[i][col] == 'X')
            return false;

    for(int i = 0; i< dim[1] ; i++)
        if(chess_table[row][i] == 'X')
            return false;

    for(int x = row , j = col; x >= 0 && j >= 0 ; x--, j--)
        if(chess_table[x][j] == 'X')
            return false;

    return true;
}

void freeTable(){
    for(int i = 0 ; i< dim[0] ; i++)
        free(chess_table[i]);

    free(chess_table);

}

bool  solveProblem(int row){
    if(row >= dim[1])
        return true;

    for(int i = 0; i< dim[0]; i++)
        if(isSafe(i, row)){
            placeQueen(i, row);
            if(solveProblem(row + 1))
                return true;
            chess_table[i][row] = '_';
        }
    return false;
}

int main(){

    do {
        printf("Table size:\t");
        scanf_s("%d", &dim[0]);
        scanf_s("%d", &dim[1]);
    }while(dim[0] <= 1 || dim[1] <= 1);

    tableInit();
    printTable();

    newLine();
    if(solveProblem(0))
        printf("Solution found!\n");
    else
        printf("Solution not found!\n");

    printTable();

    freeTable();
    return 0;
}