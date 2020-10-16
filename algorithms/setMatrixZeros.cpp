
#include<bits/stdc++.h>
using namespace std;

// Problem Statement: https://leetcode.com/problems/set-matrix-zeroes/

class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix){
        
        bool firstRowZero = false;
        bool firstColumnZero = false;
        
        // Get status
        markZeros(matrix, firstRowZero, firstColumnZero);
        
        int row;
        int col;
        
        // change corrosponding cell values
        for(row = 1; row < matrix.size(); row++){
            for(col = 1; col < matrix[0].size(); col++){
                if(matrix[row][0] == 0 || matrix[0][col] == 0)
                    matrix[row][col] = 0;
            }
        }
        
        // change 0th row and 0th col if valid
        if(firstRowZero){
            for(col = 0; col < matrix[0].size(); col++)
                matrix[0][col] = 0;
        }
        if(firstColumnZero){
            for(row = 0; row < matrix.size(); row++)
                matrix[row][0] = 0;
        }
    }
    
    
    void markZeros(vector<vector<int>>& matrix, bool& firstRowZero, bool& firstColumnZero){
        
        int row;
        int col;
        
        // * get first row and col status before changing status for other cells
        if(matrix[0][0] == 0){
            firstRowZero = firstColumnZero = true;
        }
        else{
            for(row = 0; row < matrix[0].size(); row++){
                if(matrix[0][row] == 0){
                    firstRowZero = true;
                    break;
                }
            }

            for(col = 0; col < matrix.size(); col++){
                if(matrix[col][0] == 0){
                    firstColumnZero = true;
                    break;
                }
            }
        }
        
        // status for other cells
        for(row = 1; row < matrix.size(); row++){
            for(col = 1; col < matrix[0].size(); col++){
                
                if(matrix[row][col] == 0){
                    matrix[row][0] = matrix[0][col] = 0;
                }
            }
        }
    }
    
};

