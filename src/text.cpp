#include<bits/stdc++.h>
using namespace std;
bool diffK(int A[], int N, int K) {
    sort(A, A+N);
    int i = 0, j = 1;
    while (i < N && j < N) {
        if (A[i] == A[j] + K) return true;
        else if (A[i] < A[j] + K) i++;
        else j++;
    }
    return false;
}


int main()
{
   int ary[10]={1,5,25,41,10,0,3,7,4,9};
     cout<<(diffK(ary,10,0));
}