def substituicoes_retroativas(A, b):
    ## n é a ordem da matriz A
    n = len(A)
    
    ## inicializa o vetor x com tamanho n e elementos iguais a 0
    x = n * [0] 
    
    for i in range(n-1, -1, -1):
        S = 0
        for j in range(i+1, n):
            S = S + A[i][j] * x[j]
        x[i] = (b[i] - S)/A[i][i]
    
    return x

def gauss(A, b):
    n = len(A)
    for k in range(0, n-1):
        for i in range(k+1, n):
            m = - A[i][k]/A[k][k]
            for j in range(k+1, n):
                A[i][j] = m * A[k][j] + A[i][j]
            b[i] = m * b[k] + b[i]
            A[i][k] = 0
    x = substituicoes_retroativas(A, b)
    return x

A1 = [[1, -3, 2],
     [-2, 8, -1],
     [4, -6, 5]]
b1 = [11, -15, 29]
x = gauss(A1, b1)
print(x)
