#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define newLine() printf("\n");

int** createMatrix(){
    int **matrix = NULL;
    int dim[2] = {0, 0};

    printf("Enter the dimensions of the matrix: ");
    scanf("%d %d", &dim[0], &dim[1]);

    matrix = (int **) malloc(dim[0] * sizeof(int *));

    if(matrix == NULL){
        printf("Error allocating memory!\n");
        exit(1);
    }

    for(int i = 0; i < dim[0]; i++) {
        matrix[i] = (int *) malloc(dim[1] * sizeof(int));

        if(matrix[i] == NULL){
            printf("Error allocating memory!\n");
            free(matrix);
            exit(1);
        }
    }

    for(int i = 0; i < dim[0] ; i++)
        for(int j = 0 ; j < dim[1] ; j++)
            matrix[i][j] = 0;

    return matrix;
}

int main(){

}