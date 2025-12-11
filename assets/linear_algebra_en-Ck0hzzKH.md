# 1 Vectors and vector spaces

## 1.1 Definition of vector

- Definition: A vector is a quantity that has magnitude and direction (as opposed to a scalar, which is a quantity that only has magnitude). From a physics perspective it could be velocity, from a computer perspective it could be an array.
- Algebraic representation:
  - 2D:$f{v} = (x, y)$
  - 3D:$f{v} = (x, y, z)$
  - $n$dimension:$v=(v_{1},v_{2},…,v_{n})$
- Geometric meaning: can be regarded as pointing from the origin to a point$v=(v_{1},v_{2},…,v_{n})$arrow.
- Expression:
  row vector:$$\begin{bmatrix}&v_1, &v_2, &..., &v_n  \end{bmatrix}$$
  Column vector:$$\begin{bmatrix}
 \\v_1
 \\v_2
 \\⋮
 \\v_n
\end{bmatrix}$$
- Dimensions of vector: **number of rows\*number of columns**
- Note: From the perspective of vector space, the way to express the same vector as a row vector or column vector is just different in writing, and still express the same abstract object, but strictly speaking, there is a transposition relationship between them. In linear algebra applications, vectors are represented by column vectors by default. Only vectors of the same dimension can be added
- A point in the plane is expressed as a vector, such as a point$(x，y)$Represented as a vector$$\begin{bmatrix}
 \\x
 \\y
\end{bmatrix}$$

## 1.2 Unit vector

exist$x$in the axis direction$\hat{i} = (1,0)$, $\hat{j} = (0,1)$, respectively represent vectors with module length one in each positive direction. In the two-dimensional case, vectors on the plane can be expressed as the result of multiplying two unit vectors by coefficients and then adding them, but there are exceptions.

For example:$\overrightarrow{a} = (8,12) = 8\hat{i} + 12\hat{j}$

How to find unit vector:$\hat{v} = \frac{\overrightarrow{v}}{\left \| \overrightarrow{v} \right \|}$

## 1.3 Basic operations on vectors

### 1.3.1 Vector addition and subtraction

- addition:$$(𝑎_{1},𝑎_{2},…,𝑎_{𝑛})+(𝑏_{1},𝑏_{2},…,𝑏_{𝑛})=(𝑎_{1}+𝑏_{1},𝑎_{2}+𝑏_{2},…,𝑎_{𝑛}+𝑏_{𝑛})$$
  Geometric meaning: parallelogram law.

- Subtraction:
  $$(𝑎_1,𝑎_2,…,𝑎_𝑛)−(𝑏_1,𝑏_2,…,𝑏_𝑛)=(𝑎_1−𝑏_1,𝑎_2−𝑏_2,…,𝑎_𝑛−𝑏_𝑛)$$

### 1.3.2 Vector multiplication

$$c⋅(v_1,v_2,…,v_n)=(cv_1,cv_2,…,cv_n)$$

Geometric meaning: Change the vector length |c| times, and the direction is determined by the sign of c: the positive sign extends to the original direction, and the negative sign extends to the opposite direction of the original direction.

## 1.4 Modulus length of vector

- Module length:
  $$|v|=\sqrt{v_1^2 + v_2^2 + \dots + v_n^2}$$

Geometric meaning: the length of a vector arrow.

- Norm: The norm of a vector is a generalization of length and is equivalent to the absolute value of a scalar. In the two-dimensional case, it is equivalent to the modulus length of the vector. Calculation method:$$\left \| v \right \|_2 = \sqrt{v^2_1+v^2_2+...+v^2_n}$$
  - Absolute value:$\left |x \right |$
  - Norm:$\left \| \overrightarrow{v} \right \|$

## 1.5 Inner product of vectors (dot product, dot product)

- definition:
  $$\mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \dots + u_n v_n$$
- Geometric meaning:
  $$\mathbf{v} = |\mathbf{u}| \, |\mathbf{v}| \cos \theta$$
  in$\theta$is the angle between the two vectors.
- Application: Determine orthogonality ($\mathbf{u}\cdot\mathbf{v}=0 ⇔ 垂直$), physical work, calculating vector projection
- Summary: **The dot product is the "degree of overlap" of two vectors in the same direction**

## 1.6 Outer product of vectors (three dimensions)

- Right-hand rule: When the thumb, index finger, and middle finger of your right hand are stretched vertically to each other: the index finger points in the direction of the first vector a, and the middle finger points in the direction of the second vector b. The direction pointed by the thumb is the cross product.$\mathbf{a} \times \mathbf{b}$direction. In a geometric sense, it stipulates the "spin direction" of a set of three mutually perpendicular directions in three-dimensional space, which is the so-called **right-handed coordinate system**.
- Right-handed coordinate system: It is **man-made** and a "positive direction" uniformly chosen by the physics and mathematics communities. In fact, the left-handed coordinate system is also possible, but by convention only the right-handed coordinate system is used. At the same time, many phenomena in nature (such as the relationship between electric field, magnetic field and propagation direction when electromagnetic waves propagate) naturally conform to the right-handed system. If we describe it as left-handed, it will appear "abnormal".

Definition of outer product (cross product/vector product):$$a\times b = \left | a \right | \left | b \right | \sin{\theta} n$$

- $\theta$：$a,b$the angle of
- $n$: perpendicular to$a,b$The unit vector of the plane, the direction is determined by the **right-hand rule**
- The cross product** does not comply with the commutative law**
- The cross product of two parallel vectors is 0, and the cross product of a vector with itself is 0.

Geometric meaning:

- Direction: The resulting vector is perpendicular to$a,b$plane
- Length: equal to$a,b$is the area of ​​a parallelogram with sides
- Zero vector case: if$a,b$parallel or one of them is zero, then the cross product is zero

Physical meaning: torque, angular momentum, Lorentz force, magnetic flux

Summary: **The cross product is the effect produced by two quantities**

## 1.7 Linear combinations and linear correlations

### 1.7.1 Linear combination

Definition: Given a set of vectors$v_1,v_2,...,v_k$, their linear combination refers to$$w = c_1v_1 + c_2v_2 + ... + c_kv_k$$
where c is a scalar, multiply each vector by a coefficient. Simply put, a linear combination is to multiply several vectors by coefficients and then add them together. The result is one, or a group (because with different coefficients, the final vectors generated will be different) new vectors in the vector space. Linear combination requires that all vectors have the same dimension, that is, in the same vector space, vectors of different dimensions cannot be combined.

Taking a two-dimensional space as an example, if there is a vector$a=(1,2),b=(0,3)$, linearly combine them, for example, multiply them by coefficients $3, 2$ respectively, then the result is$$w = 3(1,2) + 2(0,3) = (3,12)$$As different coefficients are taken, the final vector obtained will also be different.

The meaning of "linear": There are two conditions for linearity in mathematics: additivity and homogeneity:

- Additivity:$f(c+u) = f(c)+f(u)$
- Homogeneity:$f(cu)=cf(u)$
  Simply put, it only involves addition and multiplication, not squares.

At the same time, in the two-dimensional case, linear combination of several vectors means translation, stretching, superposition, and does not involve other operations.

### 1.7.2 Linear correlation

Definition: Given a set of vectors$v_1,v_2,...v_k$, if there is a set of coefficients that are not all zero$c_1,c_2,...c_k$, making$$c_1v_1 + c_2v_2 + ... + c_kv_k = 0$$Then this set of vectors is **linearly related**.

If there is only one set of solutions$c_1=c_2=...=c_k=0$, then this set of vectors is **linearly independent**.

In layman's terms, linear correlation means "a certain vector can be spelled out by other vectors"; linear independence means "no vector can be spelled out by other vectors". There are "redundant" vectors in a linearly related set of vectors, while there are no redundant vectors in a linearly independent set of vectors. In the two-dimensional case, if two vectors are collinear in a set of linear combinations, then the two vectors are linearly related, and as long as they are not collinear, they are linearly independent. In three-dimensional space, if three vectors are coplanar, that is, one of the vectors can be obtained by combining the other two vectors, then the three vectors are linearly related. In general, if a vector can be obtained by a linear combination of other vectors, then this set of vectors is linearly related. Linear correlation describes the relationship between a set of vectors.

## 1.8 spanned vector space

- $\mathbb{R}^n$：$n$dimensional real coordinate space,$R$Represents the field of real numbers. this$n$The dimensional space contains all the$n$real vector of parameters
- For example:
  - $\mathbb{R}^1$: Real number axis (a straight line)
  - $\mathbb{R}^2$:flat
  - $\mathbb{R}^3$: Three-dimensional space
- Special vector spaces:
  - $\mathbb{C}$: space on the complex field
  - $\mathbb{M}$: includes all$2*2$matrix space
  - $\mathbb{F}$: Contains all real functions$f(x)$of
  - $\mathbb{Z}$: a space containing only zero vectors
  - $\mathbb{P}_n$: includes all$n$order polynomial

The general discussion is only in two-dimensional or three-dimensional real coordinate space, that is,$\mathbb{R}^2,\mathbb{R}^3$。

- Definition: Given a set of vectors$v_1,v_2,...v_k$, their span is defined as:$span\{v_1,v_2,...,v_k\}=\{c_1v_1+c_2v_2+...+c_kv_k \mid c_i \in R\}$
- If the given set of vectors is linearly independent

That is to say: the set of all possible linear combinations is the spanned space of this set of vectors. spanned space = the space that can be "covered" by this set of vectors.

- example:
  - In one dimension, the space spanned by a vector (not a zero vector) is a straight line, that is, the real number axis
  - In the two-dimensional case, given two non-collinear vectors$v_1,v_2$, their span is the entire two-dimensional plane, that is, two non-collinear non-zero vectors can be spanned into a two-dimensional plane through linear combination.
  - In three dimensions:
    - Two non-parallel vectors can form a plane
    - Three non-coplanar vectors will span the entire three-dimensional space
    - If the three vectors are coplanar, they will only form a plane. If the three vectors are collinear, they will only form a line.

## 1.9 Basis and subspace

### 1.9.1 Base

- Definition: In a vector space, a set of vectors$\{v_1,v_2,...v_k\}$If it can satisfy: 1. Linear independence 2. Spread into the entire space, then this set of vectors is a basis of this vector space, and these vectors are called basis vectors.
- Dimension: The number of basis vectors = the dimension of the space. For example, for$\mathbb{R}^2$This two-dimensional vector space must have two vectors as its basis.
- Standard basis: A standard basis is a specific set of basis vectors, for$n$dimensional real vector space$R_n$, the standard basis is a set of n vectors:$e_1,e_2,...,e_n$, each vector$e_i$In the first$i$It is 1 in one position and 0 in other positions. Standard bases generally use letters$\hat{i},\hat{j},\hat{k}$represents, respectively, the basis vectors on the x-axis, the y-axis, and the z-axis.

### 1.9.2 Subspace

- set up$V$is a vector space,$W$yes$V$a subset of . if$W$itself also forms a vector space under vector addition and number multiplication, then$W$It's called$V$subspace. The subspace must be part of the original space and must be closed to addition and multiplication. Note: A subspace is not necessarily a proper subset. The subspace **must contain the origin**, so the translated line/plane is not a subspace
- a non-empty subset$W \subseteq V$is a subspace if and only if: - The zero vector is in it:$\mathbf{0} \in W$ - Additive closed: if$u,v \in W$,So$u+v \in W$ - Number multiplication is closed: if$u \in W,c \in W$,So$cu \in W$
  In general, closure means that when vectors in a subspace are added and multiplied, the result is still within the subspace.
- Subspace example:
  - exist$\mathbb{R}^2$：
    - Origin {0}
    - a straight line passing through the origin
    - entire plane$\mathbb{R}^2$
  - exist$\mathbb{R}^3$：
    - Origin {0}
    - a straight line passing through the origin
    - a plane passing through the origin
    - entire plane$\mathbb{R}^3$

The solution set of a system of linear equations is often a subspace

---

# 2 Basic operations on matrices

## 2.1 Matrix definition

- Definition: by$m*n$number$a_{ij}$A rectangular number table arranged in m rows and n columns:$$A=(a_{ij})_{m*n} = \begin{bmatrix}
  a_{11}&a_{12}&...&a_{1n}\\
  a_{21}&a_{22}&...&a_{2n} \\
  \vdots&\vdots&\ddots&\vdots\\
  a_{m1}&a_{m2}&...&a_{mn} 
\end{bmatrix}$$
- Element: Matrix$i$line of work$j$number of columns$a_{ij}$
- Dimensions: The size of a matrix is ​​determined by the number of rows$m$and number of columns$n$decision, called$m*n$matrix
- diagonal:
  - Main diagonal: the diagonal line from the upper left element to the lower right element
  - Subdiagonal: the diagonal line from the upper right element to the lower left element
  - Trace: the sum of all elements on the main diagonal of the square matrix
  - If it is not a square matrix, the main diagonal will end when it touches the bottom side, and the same goes for the sub-diagonal.
- Special matrix:
  - row vector ($1*n$) and column vector ($m*1$）
  - Square matrix: A matrix with the same number of rows and columns
  - Zero matrix: all elements are 0
  - Diagonal matrix: A matrix with all zeros except the main diagonal. Any real number can be on the main diagonal.
  - Upper triangular matrix: a square matrix in which all elements except the elements above the main diagonal (including elements on the main diagonal) are 0
  - Lower triangular matrix: same as above but opposite
  - Identity matrix: The elements on the diagonal are all 1, and the remaining elements are all 0. The identity matrix must be a square matrix, usually written as$I$or$E$：$$\begin{bmatrix}
		  1&0&0\\
		  0&1&0\\
		  0&0&1\\
		\end{bmatrix}$$

Summarize:

| Matrix type     | Definition                           | Special properties                                                 |
| --------------- | ------------------------------------ | ------------------------------------------------------------------ |
| Zero matrix     | All elements are 0                   | The "zero element" of addition/multiplication                      |
| Identity matrix | The diagonal is all 1, the rest is 0 | The "identity element" of multiplication                           |
| Diagonal matrix | Off-diagonal lines are all 0         | Easy to operate, zero matrix and identity matrix are special cases |

Note: Generally, uppercase letters represent matrices

## 2.2 Matrix addition, subtraction and number multiplication

### 2.2.1 Matrix addition and subtraction

- Condition: Only two matrices with the same number of rows and columns can be added or subtracted. The operation rules are the addition/subtraction of elements at corresponding positions.
- Properties: Satisfy commutative law, associative law, zero matrix$(A+0=A)$

### 2.2.2 Multiplication of matrices

- Definition: Multiplying a number k by a matrix A means multiplying each element in the matrix by k
- Properties: Satisfy the distributive law$(k(A+B) = kA+kB)$, the associative law of multiplication$((kl)A = k(lA))$, unit yuan:$1*A = A, 0*A=0$

## 2.3 Matrix multiplication

### 2.3.1 Linear transformation

- "Transformation" can be compared to a "function", which accepts an input and produces an output. In linear algebra, this usually means inputting a vector and outputting a new vector. Why is it called a transformation instead of a function? This is because it is necessary to emphasize the movement during the transformation process, that is, the process of how to move from the original vector to the new vector.
- Furthermore, in the two-position case, if we generalize this motion to all other vectors in this plane, we will find that all vector arrows in this transformation will move to a new position. If you switch to grid view, you will find that the effect of this transformation is equivalent to compressing, stretching, and rotating the entire plane. However, to ensure the "linearity" of the transformation, each straight line in the grid before and after transformation must remain straight, parallel and never intersect, and the origin must remain fixed (moving the origin is called an affine transformation).
- A matrix can be regarded as a **transformation**, or **map**, which transforms the original vector into a new vector. And because the relative positions of all vectors in this space remain unchanged before and after transformation, we can choose the basis vector in the two-dimensional space, that is$\hat{i}=(1，0),\hat{j}=(0，1)$For reference, observe the positions of these two vectors after the transformation. This is because any vector in this space can be obtained by the linear combination of these two basis vectors.
- The figure below shows a$\mathbb{R}^2$A linear transformation in (from:3b1b):
- ![Pasted image 20250930105825.png](/src/assets/attachements/Pasted image 20250930105825.png)
- ![Pasted image 20250930105851.png](/src/assets/attachements/Pasted image 20250930105851.png)
- Since we use the base vector as a reference to perform the transformation, and use this to infer the position changes of other vectors before and after the transformation, and we also know the initial position of the base vector, then we only need to get the position of the base vector after the transformation to fully describe this transformation. For example, in the transformation above,$\hat{i}$finally fell$(1,-2)$,and$\hat{j}$finally fell$(3,0)$. For any vector in the original space$(x,y)$, multiply the transformations by$x$coordinate sum$y$On the coordinates, the transformed coordinates are obtained:$$(x,y)\to x(1,-2) + y(3,0) = (1x+3y,-2x+0y)$$
- If we write these two coordinates of the transformed basis vector together and encapsulate them (it is customary to write it in the form of a column vector), it becomes a matrix:$$\begin{bmatrix}
		  1&3\\
		  -2&0\\
		\end{bmatrix}$$
  This matrix tells us that there is such a transformation that puts$\hat{i}$move to$(1,-2)$,Bundle$\hat{j}$move to$(3,0)$, and the transformed positions of all vectors can be obtained by multiplying the original position by this matrix. This is why the matrix is ​​a **transformation**, like a function, accepting a position input and outputting a new position. In this way, we define the multiplication between matrices and vectors. In the case of a two-dimensional matrix, there is the following general definition:$$\begin{bmatrix}
		  a&b\\
		  c&d\\
		\end{bmatrix}\begin{bmatrix}
		  x\\
		  y\\
		\end{bmatrix} = x\begin{bmatrix}
		  a\\
		  c\\
		\end{bmatrix} + y\begin{bmatrix}
		  b\\
		  d\\
		\end{bmatrix} = \begin{bmatrix}
		  ax+by\\
		  cx+dy\\
		\end{bmatrix}$$
  In matrix multiplication, it is generally customary to write the matrix to the left, which is called **left multiplication**. This can be compared to the way a function is written: f(x), which also writes the function f to the left of the independent variable, describing a change in the independent variable. This transformation of vectors can also be written in the following form:$L(\overrightarrow{v})$, so it looks more like a function.
- Continuing the discussion in the two-dimensional case, if a matrix exists such that the transformed$\hat{i}$and$\hat{j}$What happens if they are collinear? In this case, due to$\hat{i}$and$\hat{j}$are linearly related, that is, one of the vectors can be obtained by a linear combination of the other vector, which means that there is redundancy between them, that is, the space they can span is no longer a two-dimensional plane, but can only be spanned into a straight line, and all vectors on the original plane will be compressed onto this plane, which is equivalent to being "dimensionally reduced". This process will be explained in detail later. This matrix is ​​not "full rank". **For a$m*n$matrix, which is essentially the$n$All basis vectors in the dimensional space are transformed to$m$** in dimensional space, so that you can better understand the geometric meaning of non-square matrices. Assume there is a matrix$$A=\begin{bmatrix}
		  1&2&3\\
		  4&5&6\\
		\end{bmatrix}$$
  We can think of it as compressing a three-dimensional space onto a two-dimensional plane. Note that the original matrix has three column vectors, corresponding to$\mathbb{R}^3$Three basis vectors in:$$A=\begin{bmatrix}
		  \hat{i}&\hat{j}&\hat{k}\\
		\end{bmatrix}$$
  But the column vector here has only two parameters, which means that the vector space it is in is two-dimensional. by$\hat{i}$For example, the transformation that occurs is from$\{1,0,0\}$transform to$\{1,4\}$, the same applies to other column vectors.

Overall, a$m \times n$matrix$M$Represents a linear transformation:

$$M:R^n→R^m$$
For a matrix, it actually maps the space of the "number of columns" size to the space of the "number of rows" size.

### 2.3.2 Matrix multiplication

- Next, we need to generalize this to a more general form, matrix-matrix multiplication. First give the mathematical definition of matrix multiplication:
  - $A$is a$m×n$matrix
  - $B$is a$n×p$matrix

Then their product$C = AB$is a$m×p$Matrix, element calculation rules are:$$c_{ij}=\sum_{k=1}^{n} a_{ik}b_{kj},(1\le i\le m,1\le j\le p)$$

- Condition: Number of columns of the former matrix = Number of rows of the latter matrix,
- Result: The number of rows of the new matrix = the number of rows of the previous matrix, the number of columns of the new matrix = the number of columns of the subsequent matrix
- Understanding angle:
  - Row × column dot product: Each element is the inner product of "row vector·column vector"
  - Column combination perspective:$AB$Each column of is$A$and$B$Linear combination of corresponding column vectors
  - Linear transformation perspective: Matrix multiplication corresponds to the composition of linear transformations (do it first$B$, do it again$A$
- Core properties:
  - Associative law:$(AB)C = A(BC)$
  - Distributive law:
    - Left allocation:$A(B+C) = AB+AC$

For matrix multiplication conditions, keep the input and output dimensions matching. In essence, matrix multiplication is the composite of two consecutive transformations. The right transformation is performed first, and then the left transformation is performed. Therefore, the transformed dimensions on the right must match the dimensions of the input on the left, that is, the number of rows of the right matrix must be equal to the number of columns of the left matrix.

For example, there is the matrix$A$The size is$m*n$,matrix$B$The size is$n*p$,So$AB$It can be established. Generally, if you want to judge whether you can multiply, you just need to look left and right to see if you can eliminate:$m\times (n,n)\times p$. Geometrically speaking, this means dividing space by$\mathbb{R}^p$transform to$\mathbb{R}^n$, and then from$\mathbb{R}^n$transform to$\mathbb{R}^m$。

### 2.3.3 Left multiplication and right multiplication

In matrix multiplication, since the matrix represents a transformation, and this transformation involves changes in dimensions, the general commutative law is not universal. Generally, left multiplication is used more often, which represents a linear transformation of a vector or another matrix, such as$y=Ax$, here called$A$Take left$x$get$y$. The right multiplication is less used, but it is actually equivalent to the left multiplication. like$v^TA$. Popularly understood, left multiplication represents the change of the vector, while right multiplication represents the change of the coordinate system.

## 2.4 Transpose of matrix

given a$m*n$The matrix of:$$A=(a_{ij})_{m*n}$$
its transposed matrix$A^T$is a$n*m$The matrix of:$$(A^T)_{ij}=a_{ji}$$
That is, **column swap**: the first row of the original matrix$i$row becomes the third of the transposed matrix$i$List. In other words, mirror the upper triangular part and the lower triangular part along the main diagonal.

- example:$$A=\begin{bmatrix}
	a_{11}&a_{12}&a_{13}&a_{14}\\
	a_{21}&a_{22}&a_{23}&a_{24}\\
\end{bmatrix},A^T = \begin{bmatrix}
	a_{11}&a_{21}\\
	a_{12}&a_{22}\\
	a_{13}&a_{23}\\
	a_{14}&a_{24}\\
\end{bmatrix}$$

Basic properties:

- Double transpose:$(A^T)^T = A$
- Addition and multiplication:
  - $(A+B)^T = A^T+B^T$
  - $(kA)^T = kA^T$
- Multiplicative transpose:$(AB)^T = B^TA^T$
- Inverse matrix relationship (if$A$reversible):$(A^{-1})^T = (A^T)^{-1}$
- symmetry:
  - like$A^T = A$,but$A$is a symmetric matrix
  - like$A^T = -A$,but$A$is an antisymmetric matrix

## 2.5 Rank of matrix

- Definition: The rank of a matrix is ​​the number of the largest linearly independent groups in its row vectors (or column vectors), or the order of the highest-order non-zero subformula. Defined by linear mapping: if matrix$A$represents a linear transformation$T: \mathbb{R}^n \to \mathbb{R}^m$,but
  $$rank(A)=dim⁡(Im(T))$$That is, the dimensionality of the image space.
- Row rank = the dimension of the space spanned by row vectors
- Column rank = the dimension of the space spanned by column vectors
- Row rank = column rank, so it is directly called "rank of matrix"
- The value of rank can be a non-zero real number
- The rank of a full-rank matrix is ​​equal to the dimension of the vector space in which it is located.

In layman's terms, a matrix is ​​a transformation, and this transformation occurs in a vector space. From the above, we know that this transformation may change the dimensions of the vector space where it is located, such as increasing the dimension/reducing the dimension/maintaining the original dimension. The rank describes the dimensional changes before and after this transformation. If a matrix keeps the dimensions unchanged before and after transformation, then we say that the matrix is ​​"full rank". If a matrix compresses the original three-dimensional space into two dimensions, from$\mathbb{R}^3$transform to$\mathbb{R}^2$, then the rank of this matrix is ​​2. **Rank represents the spatial dimension that the matrix can "cover", and rank is also equal to the "effective dimension" of linear transformation**

Relation to Systems of Linear Equations: For Systems of Linear Equations$Ax=b$：

- like$\text{rank}(A) = \text{rank}([A|b]) = n$→ unique solution
- like$\text{rank}(A) = \text{rank}([A|b]) < n$→ Infinitely many solutions
- like$\text{rank}(A) < \text{rank}([A|b])$→ No solution

## 2.6 Reversible matrix and inverse matrix operations

for a$n*n$large square array$A$, if we can find another$n*n$large square array$B$, making ($I_n$is the identity matrix, and its size is also$n$）：$$AB=BA=I_n$$
So$A$is an invertible matrix,$B$called$A$The inverse matrix of , denoted as$A^{-1}$. If there is no matching condition$B$,So$A$It is not an invertible matrix, also known as a singular matrix.

determination:

- $\det(A) \neq 0$
- $\text{rank}(A) = n$(full rank)
- System of linear equations$Ax = b$to any$b$There is only one solution
- $A$can be transformed into an identity matrix through finite-order elementary row transformation

nature:

- Uniqueness of inverse matrix: If the inverse of a matrix exists, then its inverse$A^{-1}$is the only one
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1} A^{-1}$
- $(A^T)^{-1} = (A^{-1})^T$
- $(kA)^{−1}=\frac{1}{k}A^{-1}(k≠0)$
- $\det(A^{-1})=\frac{1}{\det(A)}$

Method of finding the inverse (discussed later):

1. Adjoint matrix method:$$A^{-1} = \frac{1}{\det(A)}A^{*}$$
   in$A^{*}$yes$A$The adjoint matrix of
2. Elementary transformation method (Gaussian-Jordan elimination): Put$[A \mid I]$Through elementary row transformation, it becomes$[I \mid A^{-1}]$。
3. Decomposition methods: such as LU decomposition, QR decomposition, SVD, etc. (more suitable for numerical calculations).

significance:

- Solving a system of linear equations: If$A$reversible, then$Ax=b \Rightarrow x = A^{-1} b$。
- Geometric meaning: A matrix is ​​a transformation of a vector space, so the inverse matrix is ​​to find a matrix that can offset the effects of the two matrices. For example, if a matrix is ​​used to rotate a two-dimensional plane 90 degrees clockwise, then its inverse matrix is ​​to rotate the plane 90 degrees counterclockwise. This also explains why the inverse matrix requires a square matrix, because non-square matrix means dimensionality ascending/reducing, and this also means losing information, so the inverse matrix cannot be found.

## 2.7 Elementary transformations of matrices and elementary matrices

### 2.7.1 Elementary matrices

- Definition: The elementary matrix refers to the identity matrix$I$A matrix formed by a transformation
- effect:
  - Left-multiply an elementary matrix: perform an elementary row transformation on the original matrix
  - Also called elementary matrix: perform an elementary column transformation on the original matrix
- Three types of elementary matrices:

1. Row exchange matrix, obtained by exchanging two rows of the identity matrix:$$E=\begin{bmatrix}
	0&1\\
	1&0\\
\end{bmatrix}$$
   Multiplying a matrix from the left is equivalent to exchanging its two rows.
2. Row multiplication matrix: multiply a row of the unit matrix by$k \neq 0$get:$$E=\begin{bmatrix}
	k&0\\
	0&1\\
\end{bmatrix}$$
   Multiplying a matrix from the left is equivalent to multiplying the first row by$k$。
3. Row doubling matrix: a row of the unit matrix plus another row$k$times to get:$$E=\begin{bmatrix}
	1&0\\
	k&1\\
\end{bmatrix}$$
   Multiplying a matrix from the left is equivalent to "row 2 + k × row 1".

nature:

1. Elementary matrices are all invertible matrices, and their inverse matrices are still elementary matrices.
2. any invertible matrix$A$, can be expressed as the product of several elementary matrices:
   $A = E_1 E_2 \cdots E_k$
3. The inverse matrix can be found using elementary transformation:$[A \mid I]$Through elementary row transformation, it becomes$[I \mid A^{-1}]$。

Application scenarios:

- Solving a system of linear equations: Gaussian elimination method is to continuously perform elementary row transformations.
- Find the inverse matrix: convert it through elementary transformation$A$into a unit array.
- Study matrix equivalence: matrix$A$and$B$Row Equivalence ⇔ There exists an invertible matrix$P$, making$PA = B$。

### 2.7.2 Elementary transformation of matrices

Elementary transformations are divided into **row transformation** and **column transformation**. The following are three elementary row transformations:

1. Swap two lines: put the first$i$line and order$j$Swap the lines.
2. Multiply a row: use a non-zero constant$k$Multiply a row.
3. Double a row to another row: add a row's$k$Double to another row.
   Column transformation is similar, but it works on columns

## 2.8 Basic matrix transformation

### 2.8.1 Shear matrix

exist$\mathbb{R}^2$, if there is a matrix that changes the position of another basis vector while keeping one basis vector unchanged, causing the entire space to have a "tilt" effect, it is called a shear matrix. The intuitive performance is to fix one side of the parallelogram and change the other pair of sides. The shear matrix is ​​defined as follows:$$shear_x(s)=\begin{bmatrix}
	1&s\\
	0&1\\\end{bmatrix},shear_y(s)=\begin{bmatrix}
	1&0\\
	s&1\\\end{bmatrix}$$

### 2.8.2 Scaling matrix

exist$\mathbb{R}^2$, if there is a matrix that scales the space along the coordinate axis, it is called a scaling matrix, and the specific form is:$$scale(s_x,s_y) = \begin{bmatrix}
	s_x&0\\
	0&s_y\\\end{bmatrix}$$

### 2.8.3 Rotation matrix

First, you need to understand the concept of chirality:

> Chirality: Chirality refers to a symmetrical feature in nature. Simply put, if an object is different from its mirror image, it is said to be "chiral". For example, the mirror image of a person's right hand is the left hand, but the left and right hands are not the same, so the person's hand is "chiral"

This chapter starts from the two-dimensional meaning of the rotation matrix and extends it to three dimensions. Higher-dimensional rotation matrices can also be derived. First of all, the rotation matrix has two functions: **coordinate system rotation and vector rotation**, which correspond to the results of **right multiplication** and **left multiplication** respectively.

#### 2.8.3.1 Coordinate system rotation (right multiplication)

There is a vector space$\mathbb{R}^2$There is a plane rectangular coordinate system in$A$and a point$P=(p_{Ax},p_{Ay})$. Now change the coordinate system$A$Rotate a certain angle, but keep the point$P$The position remains unchanged, as shown in the figure: ![IMG_5B5A364358C4-1.jpeg](/src/assets/attachements/IMG_5B5A364358C4-1.jpeg)
point after rotation$P$in coordinate system$B$The position in$p_{Bx},p_{By}$, then we can get$p_{Ax},p_{Ay}$and$p_{Bx},p_{By}$The relationship is:$$p_{Ax}=p_{Bx}\cos({\alpha})-p_{By}\sin({\alpha})$$

$$p_{Ay}=p_{Bx}\sin({\alpha})+p_{By}\cos({\alpha})$$
The proof is as follows: ![IMG_0A01195D23EC-1.jpeg](/src/assets/attachements/IMG_0A01195D23EC-1.jpeg)
The above formula can also be written in matrix form:$$\begin{bmatrix}
	p_{Ax}\\
	p_{Ay}\\
\end{bmatrix}=\begin{bmatrix}
	\cos(\alpha)&-\sin(\alpha)\\
	\sin(\alpha)&\cos(\alpha)\\
\end{bmatrix}\begin{bmatrix}
	p_{Bx}\\
	p_{By}\\
\end{bmatrix}$$Then we can get the form of the rotation matrix in two dimensions, which is a matrix that rotates the entire coordinate system by a certain angle. This matrix rotates all vectors in the original space by the same angle, and the position of the rotated vector can be calculated through this matrix.

- Intuitive understanding: The vector remains incomprehensible, but a rotated coordinate system is used to describe it.

#### 2.8.3.2 Rotation vector (left multiplication)

In addition to transforming coordinates, the rotation matrix also has the function of rotating a vector, such as rotating a vector$p$Rotate a certain angle to get a vector$p\prime$:![IMG_5B77175F0AE6-1.jpeg](/src/assets/attachements/IMG_5B77175F0AE6-1.jpeg)After calculation, the rotation matrix of this operation is the same as the rotation matrix obtained by the above coordinate transformation:$$\begin{bmatrix}
	\cos(\alpha)&-\sin(\alpha)\\
	\sin(\alpha)&\cos(\alpha)\\
\end{bmatrix}$$

- Intuitive understanding: the coordinate system does not move, the vector itself rotates around the origin

In three dimensions the situation is a bit more complicated, as three axes of rotation are involved. This will be discussed in detail in later chapters.

### 2.8.4 Projection matrix

Consider a vector in a two-dimensional plane$\hat{v}$and a line$L$, now we need to calculate$\hat{v}$exist$L$vector of projection on$\hat{v'}$, as shown in the figure: ![IMG_1CF97DC19E0E-1.jpeg](/src/assets/attachements/IMG_1CF97DC19E0E-1.jpeg)

At this time, we can introduce along the straight line$L$a vector of$\hat{w}$, at the same time, due to$\hat{v'}$and$\hat{w}$collinear, then$\hat{v'}$and$\hat{w}$There is a relationship between numbers. First calculate$\hat{v}$and$\hat{w}$The dot product of:$$\hat{v} \cdot \hat{w}$$And, due to$\hat{v'}$and$\hat{w}$The scaling relationship of , we can get$\hat{v'}$The expression of:

$$\text{proj}_L(\hat{v})=\hat{v'}=\frac{\hat{v} \cdot \hat{w}}{\hat{w} \cdot \hat{w}}\hat{w}=\frac{\hat{v} \cdot \hat{w}}{{\left \|\hat{w}\right \|}^2}\hat{w}$$
If we further$\hat{w}$Let it be a unit vector, that is, the length is 1, and it is written as$\hat{u}$, because the module length of the unit vector is 1, it can be written as:$$\hat{v'}=(\hat{v} \cdot \hat{u})\hat{u}$$
So we get the projection matrix$\text{proj}_L(\hat{v})=(\hat{v} \cdot \hat{u})\hat{u}$. in$\hat{u}$yes$L$unit vector on.

### 2.8.5 Symmetric matrix

Consider the same situation, but this time, we want to calculate the vector$\hat{v}$About line$L$symmetric vector$\hat{v''}$, as shown in the figure: ![IMG_4A662B36C384-1.jpeg](/src/assets/attachements/IMG_4A662B36C384-1.jpeg)

Easy to get:$$\text{ref}_L(\hat{v})=\hat{v''}=-(\hat{v}-\hat{v'})+\hat{v'}=2\hat{v'}-\hat{v}$$

## 2.9 Adjoint matrix

### 2.9.1 Co-factor

in a$n$order square matrix$A=(a_{ij})$, remove the first$i$Row and No.$j$After the columns, the remaining$(n-1)$Order determinants, called elements$a_{ij}$The remaining sub-form of is recorded as$M_{ij}$。

For example:$$A=\begin{bmatrix}
	1&2&3\\
	4&5&6\\
	7&8&9\\
\end{bmatrix}$$
element$a_{11}=1$The remainder formula of is$$M_{11} = det\begin{pmatrix}
	5&6\\
	8&9\\
\end{pmatrix}=45-48=-3$$

### 2.9.2 Algebraic cofactors

element$a_{ij}$The algebraic cofactor of$C_{ij}$Defined as:

$$C_{ij}=(−1)^{i+j}M_{ij}$$
in$(−1)^{i+j}$is a symbolic factor:

- when$i+j$When it is an even number, the sign is positive
- when$i+j$When it is an odd number, the sign is negative

### 2.9.3 Adjoint matrix

The adjoint matrix is ​​a concept unique to square matrices. for$n$order square matrix$A=(a_{ij})$, its adjoint matrix is ​​written as$\text{adj}(A)$or$A^*$. matrix$A$The adjoint matrix of is the matrix composed of all algebraic cofactors and then transposed:$$\text{adj}(A)=(C_{ij})^T$$
When finding the inverse matrix, if$\det(A) \ne 0$,but:$$A^{-1} = \frac{1}{\det(A)}\text{adj}(A)$$

### 2.9.4 Geometric meaning and summary

1. Co-factor: The remaining sub-determinant after removing a certain row and column of the matrix. The cofactor is the "lower one-dimensional volume" formed by the remaining vectors after removing a certain dimension. For example: in a three-dimensional matrix, the cofactor of a certain element corresponds to the area of ​​a two-dimensional parallelogram. It can be understood as: cofactor = "the volume/area of ​​the remaining vector after removing a certain direction"
2. Algebraic cofactor: Geometrically, it ensures that the "directivity" of the volume is correctly recorded when the determinant is expanded. In three dimensions, the algebraic cofactor can be regarded as "the corresponding directed area when a certain surface is used as the base." It can be understood as: algebraic cofactor = "low-dimensional volume with direction".
3. Adjoint matrix: The adjoint matrix is ​​a matrix composed of all algebraic cofactors and then transposed. The adjoint matrix satisfies the relationship with the original matrix:$$A \cdot \text{adj}(A) = |A|I$$
   This means: the adjoint matrix is ​​geometrically "the inverse transformation of the original matrix × the volume factor". In three dimensions, the columns of the adjoint matrix can be regarded as the normal vector obtained by the cross product of the two column vectors of the original matrix, which represents the "area vector in the orthogonal direction". More generally, adjoint matrices stitch together "low-dimensional volumes (cofactors)" to form a tool that recovers the overall volume (determinant). It can be understood as: adjoint matrix = "a matrix composed of low-dimensional volumes (algebraic cofactors), which geometrically corresponds to the 'volume-weighted inverse' of the original transformation"

Summarize:

- Cofactor: the lower one-dimensional volume (area, volume cross-section).
- Algebraic cofactor: low one-dimensional volume with direction.
- Adjoint matrix: combines the "low-dimensional volumes" in all directions to form a matrix that can restore the overall volume.

## 2.10 Block matrix

Blocking the matrix is ​​to divide a large matrix into several "small matrices" (sub-blocks) using horizontal and vertical lines, and then study these sub-blocks as new "elements". formal:$$\begin{bmatrix}
	A_{11}&A_{12}&\cdots&A_{1n}\\
	A_{21}&A_{22}&\cdots&A_{2n}\\
	\vdots&\vdots&\ddots&\vdots\\
	A_{m1}&A_{m2}&\cdots&A_{mn}\\
\end{bmatrix}$$each of which$A_{mn}$It is a matrix in itself. The operation rules of block matrices are the same as those of ordinary matrices, except that the elements are replaced by sub-matrices.
Basic operation rules:

1. Addition: Add corresponding sub-blocks (provided the block division method is the same).
2. Number multiplication: Each sub-block is multiplied by a scalar.
3. Multiplication: Similar to ordinary matrix multiplication, but the "elements" are replaced by sub-block matrices:$$C_{\alpha\beta} = \sum_\gamma A_{\alpha\gamma} B_{\gamma\beta}$$

4. Transpose: Sub-blocks are transposed and their positions swapped.

## 2.11 Subspace of a matrix

### 2.11.1 Column space (image)

- by matrix$A$The subspace spanned by all column vectors belongs to$\mathbb{R}^m$,writing$C(A)$。
- Geometric meaning: linear equations$Ax=b$The solution is$b \in C(A)$
- The dimension of the column space is equal to the rank of the matrix
- Column space = spread space of output space (image space)

### 2.11.2 Line space

- by matrix$A$The subspace spanned by all row vectors belongs to$\mathbb{R}^n$,writing$R(A)$。
- Geometric meaning: similar to column space, acting on the transposed matrix
- The dimension of the row space is also equal to the rank of the matrix
- Row space = spanned space of input space (constraint space)

### 2.11.3 Null space (kernel)

- All satisfied$Ax=0$The set of solution vectors
- Belonging space:$\mathbb{R}^n$
- Geometric meaning: The direction in the input space that is mapped to the zero vector (the "vanishing degree of freedom").
- Dimensions:$n-r$, called zero degree, or genus.

### 2.11.4 Left zero space

- Definition: anything that satisfies$A^T y = 0$A collection of vectors
- Belonging space:$\mathbb{R}^m$
- Geometric meaning: a subspace orthogonal to the row space; describes which output directions cannot be determined by$A$The combination of rows is obtained.
- Dimensions:$m-r$。

Intuitive understanding, for a$m*n$matrix, in the input space$\mathbb{R}^n$：

- line space = valid input direction
- null space = compressed direction
  in output space$\mathbb{R}^m$：
- Column space = all possible outputs
- Left zero space = direction that can never be reached

## 2.12 Nuclei and images

set up$T: V \to W$is a linear transformation, or equivalently, a matrix$A: \mathbb{R}^n \to \mathbb{R}^m$

- Kernel/Null space
  $\ker(T) = \{ v \in V \mid T(v) = 0 \}$
  That is, the set of all input vectors mapped to zero vectors. The core is$\mathbb{R}^n$subset.
- Like (Image/Column space/Range)
  $\operatorname{Im}(T) = \{ T(v) \mid v \in V \} \subseteq W$
  That is, the set of all possible output vectors. like$\mathbb{R}^m$subset.

### 2.12.1 Basis of kernel and image

For any matrix, if you want to calculate a set of bases of its core, first convert it into the form of rref, that is, the row simplest form, until it can no longer be simplified, for example:

$$
A=\begin{bmatrix}
	1&2&0&0&2\\
	0&0&0&1&3\\
	0&0&0&0&0\\
\end{bmatrix}


$$

at this time,$Ax=0$Get:

$$x_1+2x_2+2x_5=0, x_4+3x_5=0$$
The first and fourth columns are the pivots, and the second, third, and fifth columns are the free variables. make$x_2=s,\ x_3=t,\ x_5=u$(free variable), then
$x_1=-2s-2u,\quad x_4=-3u$

$$
\mathbf{x} = s\begin{bmatrix}-2\\1\\0\\0\\0\end{bmatrix} + t\begin{bmatrix}0\\0\\1\\0\\0\end{bmatrix} + u\begin{bmatrix}-2\\0\\0\\-3\\1\end{bmatrix}.


$$

It follows that the basis of the kernel is:

$$\left\{ \begin{bmatrix}-2\\1\\0\\0\\0\end{bmatrix},\ \begin{bmatrix}0\\0\\1\\0\\0\end{bmatrix},\ \begin{bmatrix}-2\\0\\0\\-3\\1\end{bmatrix} \right\}$$

For the basis of the image space, taking the first and fourth columns of the original matrix can form the basis of the image space:

$$\left\{ \begin{bmatrix}1\\0\\0\end{bmatrix},\ \begin{bmatrix}0\\1\\0\end{bmatrix} \right\}$$

---

# 3 determinant

## 3.1 Definition and properties of determinant

When a matrix transforms space, we can roughly divide these transformations into two categories: those that squeeze the original space inward and those that stretch the original space outward. How do you quantify the extent of this squeezing and stretching? You can select an area and observe its transformed area to draw conclusions about squeezing or stretching. Taking two-dimensional space as an example, for$\mathbb{R}^2$basis vectors in$\hat{i} = (1,0),\hat{j} = (0,1)$, the area enclosed by them is$1*1 = 1$. Assume there is a matrix$$A=\begin{bmatrix}
	2&0\\
	0&1\\
\end{bmatrix}$$
This matrix holds$\hat{i}$Moved to$(2,0)$Intuitively, the entire space is stretched twice horizontally, and then the area enclosed by the basis vectors after the transformation can be obtained$2*1 = 2$, larger than the original area. (Note: Some matrices are "cut" in two dimensions, such as: ![IMG_B1EE6DB5571D-1 1.jpeg](/src/assets/attachements/IMG_B1EE6DB5571D-1 1.jpeg) Then you need to calculate the area of ​​the transformed parallelogram.) For this transformation, the multiple of the area change is 2, then define the determinant of this matrix.$$det(A) = det(\begin{bmatrix}
	2&0\\
	0&1\\
\end{bmatrix}) = 2$$
As shown in the picture: ![IMG_8BAA8E5E2984-1 1.jpeg](/src/assets/attachements/IMG_8BAA8E5E2984-1 1.jpeg)
Example:

1. For a matrix:
   $$
   B=\begin{bmatrix}
   	4&2\\
   	2&1\\
   \end{bmatrix}
   $$
   Since it is linearly related, the two basis vectors are collinear after transformation, then the space formed by them becomes a straight line. Naturally, the area enclosed by the basis vectors becomes 0, and the determinant is 0
2. For a rotation matrix:
   $$
   C=\begin{bmatrix}
   	0&-1\\
   	1&0\\
   \end{bmatrix}
   $$
   This matrix rotates the entire space counterclockwise 90 degrees, but the rotation does not change the area, so the determinant is 1

Therefore, as long as you check whether the determinant of a matrix is ​​0, you can determine whether it compresses the space to a lower dimension.

In fact, the determinant can also be negative. In two dimensions, this means "turning" the space. For the previous transformation, whether it is stretching or rotation, in fact$\hat{i}$always there$\hat{j}$to the right. But for the following matrix:

$$
D=\begin{bmatrix}
	0&1\\
	1&0\\
\end{bmatrix}
$$

actually will$\hat{i}$and$\hat{j}$exchanged positions, which is equivalent to moving along$y=x$The line is mirrored. Strictly speaking, such a transformation is called "changing the spatial orientation." If we use the right-hand theorem and cross product to verify, before transformation$\hat{i} \times \hat{j}$The result points out of the plane, while the transformed result points in the plane. When a similar spatial orientation changes, the determinant takes a negative value, but the absolute value of the determinant can still reflect the change in area before and after the transformation. It can also be generalized to higher-dimensional cases. For example, in three-dimensional cases, the determinant calculates the volume.

nature:

- Transpose unchanged:$\det(A^T) = \det(A)$
- Row and column exchange: exchange two rows (columns) and change the sign of the determinant
- Rows and columns are the same/proportional: If two rows (columns) are the same or proportional, then the determinant = 0
- Number multiplication extraction: multiply a row (column) by$k$, the overall determinant is multiplied by$k$
- The row remains unchanged when doubled: a row is added to a multiple of another row, and the determinant remains unchanged.
- Triangular matrix: Determinant of upper/lower triangular matrix = product of main diagonal elements
- Multiplicative properties:$\det(AB) = \det(A)\det(B)$
- Reversibility judgment:$\det(A) \neq 0 \iff A$ Reversible

## 3.2 Determinant expansion theorem (Laplace’s theorem)

1. Expand by row: Yes$n$order determinant$D = \det(A)$, if you press$i$Row expansion:$$D=\sum_{j=1}^{n}a_{ij}C_{ij}$$in$C_{ij}$is the algebraic cofactor
2. Expand by column: by$j$Column expansion:$$D=\sum_{i=1}^{n}a_{ij}C_{ij}$$Shows: The determinant can be expanded according to any row/column with the same result
3. General form (expanded by 4 rows/columns): Generalization of Laplace's theorem: the determinant can be expanded by any k rows (or columns), and the expansion is given by the corresponding$k$It is composed of the multiplication of the order subformula and its algebraic cofactor. Commonly used is one row/column expansion, because it can$z$The order determinant reduces to$(n-1)$level.

Geometric significance: The expansion theorem embodies the "recursive structure" of the determinant, and high-dimensional volumes can be decomposed into combinations of low-dimensional volumes.

## 3.3 The relationship between determinant and matrix invertibility

- Basic conclusion: for a$n \times n$square array$A$：$$\det(A) \ne 0 \Leftrightarrow  Reversible$$$$\det(A) = 0 \Leftrightarrow  Irreversible$$
  From an algebraic point of view, a non-zero determinant indicates that the rows or columns of the matrix are linearly independent, the matrix is ​​full rank, and there is a unique inverse matrix, while a zero determinant indicates that the rows or columns of the matrix are linearly dependent, and the rank is less than$n$, the matrix is ​​irreversible.

From a geometric perspective, the absolute value of the determinant represents the scaling factor of the linear transformation on the volume:

- $\det(A) \neq 0$: Transformation maintains the "volume" of the space, just stretches/compresses/flips it, and can still be reversed.
- $\det(A) = 0$: Transformation compresses space to a low dimension (such as compressing three dimensions into a plane), the volume disappears, information is lost, and it cannot be reversed.

For the inverse matrix, it has the following relationship with the determinant: if$A$Reversible, then:$$A^{-1} = \frac{1}{\det(A)} \,\text{adj}(A)$$

in$\text{adj}(A)$is an adjoint matrix, which shows that the determinant is the key factor for the existence of the inverse matrix,
at the same time:$$det⁡(A^{−1})=\frac{1}{det⁡(A)}$$

## 3.4 Rank-zero degree theorem

For a linear transformation

$$T: V \to W$$
in$V$is a finite-dimensional vector space, and the relationship is established:
$\dim(V) = \operatorname{rank}(T) + \operatorname{nullity}(T)$
Equivalently, for a$m \times n$matrix$A$：

$$\operatorname{rank}(A) + \operatorname{nullity}(A) = n$$

- Rank: The dimension of the image space (value range), indicating the "number of independent directions retained" by linear transformation.
- Nullity: The dimension of the kernel space (null space), indicating the number of independent directions mapped to the zero vector.
- Domain dimension: the total dimension of the original space.

Intuitively understanding, for a transformation, rank describes the dimension after transformation, and zero degree describes the dimension that disappears during the process, then the dimension of the original space = "retained" + "lost"

---

# 4 System of linear equations

## 4.1 Homogeneous and non-homogeneous linear equations

### 2.5.1 Homogeneous linear equations

For a linear system of equations (homogeneous):$$\begin{cases}
 \\a_{11}x_1+a_{12}x_2+...a_{1n}x_n=b_1
 \\a_{21}x_1+a_{22}x_2+...a_{2n}x_n=b_2
 \\\vdots
 \\a_{m1}x_1+a_{m2}x_2+...a_{mn}x_n=b_m
\end{cases}$$
It can be written in the following matrix form:

$$Ax=b$$
in:

- $A = (a_{ij})_{m*n}$is the coefficient matrix
- $x = (x_1,x_2,...x_n)^T$is a column vector of unknown quantities
- $b = (b_1,b_2,...b_n)^T$is a constant column vector

### 2.5.2 Augmented matrix

in the coefficient matrix$A$Add a constant column vector to the right side of$b$We get the augmented matrix:

$$
[A|b] = \begin{bmatrix}
	a_{11}&a_{12}&\cdots&a_{1n}&b_1\\
	a_{21}&a_{22}&\cdots&a_{2n}&b_2\\
	\vdots&\vdots&\ddots&\vdots&\vdots\\
	a_{m1}&a_{m2}&\cdots&a_{mn}&b_n\\
\end{bmatrix}
$$

This is the augmented matrix. Its function is to merge the coefficients and constant terms of the system of equations into one matrix, which is convenient for unified processing using methods such as Gaussian elimination method.

## 4.2 Gaussian elimination method and row simplest form (RREF)

It was first proposed to use the Gaussian elimination method to convert the augmented matrix obtained from a system of linear equations into its row simplest form, so that the solution to the system of equations can be directly seen.

The content of the Gaussian elimination method is to perform row transformation on the obtained augmented matrix, so that it becomes a matrix with 0 except for the main diagonal and constant column, and 1 on the main diagonal, that is, the simplest row form. The general approach is to label each row of the matrix as$R_1,R_2,...,R_n$, and each row can be replaced by addition, subtraction, multiplication or division with other rows.

Example: For a system of linear equations:$$\begin{cases}
 \\x+2y+z=2
 \\2x+y-z=1
 \\x-y+2z=3
\end{cases}$$
Its augmented matrix$[A|b]$for:$$[A|b] = \begin{bmatrix}
	1&2&1&2\\
	2&1&-1&1\\
	1&-1&2&3\\
\end{bmatrix}$$Perform Gaussian elimination on it:

$$
\begin{bmatrix}
	1&2&1&2\\
	2&1&-1&1\\
	1&-1&2&3\\
\end{bmatrix} \underrightarrow{R_2 = 2R_1-R_2} \begin{bmatrix}
	1&2&1&2\\
	0&3&3&3\\
	1&-1&2&3\\
\end{bmatrix} \underrightarrow{R_3 = R_1-R_3} \begin{bmatrix}
	1&2&1&2\\
	0&3&3&3\\
	0&3&-1&-1\\
\end{bmatrix}
$$

$$
\begin{bmatrix}
	1&2&1&2\\
	0&3&3&3\\
	0&3&-1&-1\\
\end{bmatrix} \underrightarrow{R_3 = R_2-R_3} \begin{bmatrix}
	1&2&1&2\\
	0&3&3&3\\
	0&0&4&4\\
\end{bmatrix}
$$

What is obtained in this step is a row echelon matrix, that is, a matrix in which the lower triangular matrices are all 0.

$$
\begin{bmatrix}
	1&2&1&2\\
	0&3&3&3\\
	0&0&4&4\\
\end{bmatrix} \underrightarrow{R_3 = \frac{R_3}{4}} \begin{bmatrix}
	1&2&1&2\\
	0&3&3&3\\
	0&0&1&1\\
\end{bmatrix}
$$

$$
\begin{bmatrix}
	1&2&1&2\\
	0&3&3&3\\
	0&0&1&1\\
\end{bmatrix} \underrightarrow{R_2 = \frac{R_2}{3}-R_3} \begin{bmatrix}
	1&2&1&2\\
	0&1&0&0\\
	0&0&1&1\\
\end{bmatrix} \underrightarrow{R_1 = R_1-R_3-2R_2} \begin{bmatrix}
	1&0&0&1\\
	0&1&0&0\\
	0&0&1&1\\
\end{bmatrix}
$$

Finally, the simplest form of the row is obtained, and the solution of the system of equations can be directly solved.

The row simplest form is equivalent to a "lite version" of the original matrix, retaining only the core linear structure, including the stretched space.

In the simplest form of a row, the first non-zero element (turned to 1) of each row is called the pivot of the row, and the variable corresponding to the column where it is located is called the pivot variable. The remaining variables that are not directly constrained by any pivot are called free variables. In other words, the pivot variable is the dimension of the image space, which represents the space expanded after the transformation, and the free variable is the dimension of the kernel space, that is, the direction of the vector that is compressed to zero during the transformation.

## 4.3 Structure of solutions (unique solution, no solution, infinite solutions)

Generally, the rank of a matrix is ​​used to determine the structure of the solution to a system of linear equations. For a system of linear equations$Ax=b$, the augmented matrix is ​​recorded as$[A|b]$,in$A$yes$m*n$coefficient matrix of size.

1. The only solution:$\text{rank}(A) = \text{rank}([A|b]) = n$
   - coefficient matrix full rank
   - Every unknown can be uniquely determined
2. No solution:$\text{rank}(A)<\text{rank}([A∣b])$
   - The augmented matrix has more "contradictory constraints" than the coefficient matrix
   - Appears similar to$0 = d(d \neq 0)$The contradictory equation of
3. Infinitely many solutions:$\text{rank}(A)=\text{rank}([A∣b])<n$
   - The system of equations has a solution but insufficient constraints
   - There are free variables that can take any value → the solution space is a linear subspace (or its translation)
4. Special circumstances:$Ax=0$
   - There is always at least zero solution.
   - like$\text{rank}(A)=n$, then there is only zero solution (the only solution).
   - like$\text{rank}(A)<n$, then there are infinitely many solutions (there are non-zero solutions).

Geometric understanding:

- The only solution: several straight lines/planes meet at one point.
- No solution: Several straight lines/planes are parallel or contradictory to each other, with no intersection.
- Infinitely many solutions: several lines/planes coincide with or intersect on one line/plane.

## 4.4 Clem’s Law

Clem's rule is a method that uses determinants to solve linear equations. It is applicable when the number of unknowns is the same as the number of equations and the coefficient matrix is ​​invertible (the determinant is not zero).

consider a$n$System of elemental linear equations:$Ax=b$
in:

- $A$yes$n×n$coefficient matrix of
- $\mathbf{x} = (x_1, x_2, \dots, x_n)^T$is an unknown vector
- $\mathbf{b} = (b_1, b_2, \dots, b_n)^T$is a constant vector
  if$\det(A) \neq 0$, then each unknown number$x_i$It can be expressed as:
  $$x_i = \frac{\det(A_i)}{\det(A)}, \quad i = 1,2,\dots,n$$

in:

- $\det(A)$is the determinant of the coefficient matrix
- $A_i$is the matrix$A$of the$i$Columns replaced with constant vectors$\mathbf{b}$The new matrix obtained after

Example:
Solve the system of equations:
$\begin{cases}2x + y = 5 \\ x - y = 1 \end{cases}$

1. Coefficient matrix:
   $A = \begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} 5 \\ 1 \end{bmatrix}$
2. Determinant:
   $\det(A) = (2)(-1) - (1)(1) = -2 - 1 = -3$
3. calculate$x$: Replace column 1:
   $$A_1 = \begin{bmatrix} 5 & 1 \\ 1 & -1 \end{bmatrix}, \quad \det(A_1) = (5)(-1) - (1)(1) = -5 - 1 = -6$$
   $$x = \frac{\det(A_1)}{\det(A)} = \frac{-6}{-3} = 2$$

4. calculate$y$: Replace column 2:
   $$A_2 = \begin{bmatrix} 2 & 5 \\ 1 & 1 \end{bmatrix}, \quad \det(A_2) = (2)(1) - (5)(1) = 2 - 5 = -3$$
   $$y = \frac{\det(A_2)}{\det(A)} = \frac{-3}{-3} = 1$$

The solution is:$(x,y)=(2,1)$

## 4.5 Non-homogeneous linear equations

and homogeneous equations$Ax=0$Correspondingly, its form is:

$$Ax=b,b≠0$$
definition:

- System of homogeneous equations: the constant terms are all 0, that is$Ax=0$。
- Non-homogeneous equations: the constant terms are not all 0, that is$Ax=b$,in$b$is a known vector.

The solution to a system of non-homogeneous linear equations is judged by its rank (the rank-zero degree theorem comes into play here):

- set up$A$is the coefficient matrix,$(A|b)$is an augmented matrix.
  - like$\operatorname{rank}(A) \neq \operatorname{rank}(A|b)$, then there is no solution.
  - like$\operatorname{rank}(A) = \operatorname{rank}(A|b) = n$(number of unknowns), then the only solution.
  - like$\operatorname{rank}(A) = \operatorname{rank}(A|b) < n$, then there are infinitely many solutions.

Intuitively understanding, in two dimensions, the solution to a homogeneous system of equations may be a straight line passing through the origin, and the solution to a non-homogeneous system of equations is a parallel straight line obtained after the translation of this straight line. In high-dimensional space: the homogeneous solution is a subspace passing through the origin, and the non-homogeneous solution is a translation (affine subspace) of it.

---

# 6 Eigenvalues ​​and eigenvectors

## 6.1 Definition of eigenvalues ​​and eigenvectors

for a$n \times n$phalanx$A$, if there is a non-zero vector$x$and scalar$\lambda$, making:

$$A x = \lambda x$$
is called$\lambda$is a matrix$A$An eigenvalue of$x$is the corresponding feature vector.
Intuitively understood, this formula means: matrix$A$Acting on vector$x$on, just enlarge (or reduce or flip) it$\lambda$times, but the direction has not changed. For a linear transformation, most vectors in the space will change direction and module length, but if you can find a vector whose direction does not change before and after the transformation, but only lengthens or shortens, then it is called an eigenvector. The multiple of lengthening or shortening is called the eigenvalue. If the eigenvalue is negative, it means that the direction has been reversed, a bit like a determinant, and an eigenvalue of 0 means that it has been shortened to a point.

To find the eigenvalues, you need to solve the characteristic equation:

$$\det(A - \lambda I) = 0$$
this is about$\lambda$of$n$A degree polynomial is called a characteristic polynomial. solved$\lambda$is the eigenvalue, and the corresponding eigenvector is the solution equation$(A - \lambda I)x = 0$non-zero solution.

nature:

- Sum of eigenvalues ​​= trace of matrix (sum of main diagonal elements).
- Product of eigenvalues ​​= determinant of matrix.
- The eigenvectors corresponding to different eigenvalues ​​are linearly independent.
- If a matrix is ​​diagonalizable, then there exists a set of basis consisting of eigenvectors.

## 6.2 Characteristic polynomials

for a$n \times n$phalanx$A$, whose characteristic polynomial is defined as:

$$p_A(\lambda) = \det(\lambda I - A)$$
this is about$\lambda$of$n$degree polynomial whose roots are matrices$A$eigenvalues. Expanding it we get:

$$p_A(\lambda) = \lambda^n + c_{n-1}\lambda^{n-1} + \cdots + c_1 \lambda + c_0$$
The coefficients are related to the trace, determinant, etc. of the matrix.

To understand intuitively, the characteristic polynomial is a tool that transforms "which directions remain unchanged under the action of a matrix" into "finding the roots of a polynomial". It transforms linear algebra problems into algebraic equation problems. The roots of the characteristic polynomial are all the eigenvalues ​​of the matrix, so it is equivalent to packaging all the eigenvalues ​​of the matrix into a polynomial. But it does not directly contain the information of the feature vector. The eigenvector needs to solve the corresponding equation after finding the eigenvalue.$(A-\lambda I)x=0$can be obtained.

nature:

- Sum of eigenvalues ​​= trace of matrix (sum of main diagonal elements).
- Product of eigenvalues ​​= determinant of matrix.
- Similarity invariance: if$B = P^{-1}AP$,but$p_B(\lambda) = p_A(\lambda)$。
- Roots and Algebraic Multiplicity: The algebraic multiplicity of each eigenvalue is equal to the number of times it appears as a root in the characteristic polynomial.
- Cayley–Hamilton Theorem: Matrices$A$always satisfies its own characteristic polynomial, that is$p_A(A)=0$

## 6.3 Characteristic basis

After finding the eigenvectors, if the matrix has enough linearly independent eigenvectors, a basis can be formed$\{v_1, v_2, \dots, v_n\}$, then this set of basis is called characteristic basis. Under this basis, the representation of matrix AA is a diagonal matrix:

$$P^{-1}AP = D$$
in$P$The columns of are the feature vectors,$D$The diagonal of is the corresponding eigenvalue. If the eigenvectors are insufficient, that is, the geometric multiplicity is smaller than the algebraic multiplicity, a complete eigenbase cannot be formed.

## 6.4 Characteristic subspace

For a matrix$A$and one of its eigenvalues$\lambda$：

$$E_\lambda = \{\,x \in \mathbb{R}^n \mid (A - \lambda I)x = 0 \,\}$$
This set is the eigensubspace, which contains all corresponding eigenvalues$\lambda$eigenvectors and zero vectors. It is a vector subspace. Intuitively understood, the characteristic subspace is to put the "invariant directions" in all linear transformations together with their linear combinations to form a subspace. In other words, eigensubspace = the set of all "invariant directions" corresponding to a certain eigenvalue.

For example, suppose

$$A = \begin{bmatrix}2 & 0 \\ 0 & 3\end{bmatrix}$$

- Eigenvalue$\lambda_1=2$, the corresponding equation$(A-2I)x=0$, solve the eigenvector direction$(1,0)$. →Feature subspace$E_2 = \text{span}\{(1,0)\}$, which is the x-axis.
- Eigenvalue$\lambda_2=3$, the corresponding equation$(A-3I)x=0$, solve the eigenvector direction$(0,1)$. →Feature subspace$E_3 = \text{span}\{(0,1)\}$, which is the y-axis.

So the two characteristic subspaces of this matrix are the x-axis and the y-axis.

More generally, if an eigenvalue has an eigenvector in only one direction, then the eigensubspace is a straight line (one dimension). If an eigenvalue corresponds to multiple linearly independent eigenvectors → the eigensubspace may be a plane or even a higher-dimensional subspace.

## 6.5 Algebraic multiplicity and geometric multiplicity

- Algebraic Multiplicity A certain eigenvalue$\lambda$The number of times it appears as a root in a characteristic polynomial. It is "algebraically occurring several times".
- Geometric Multiplicity Eigenvalues$\lambda$The dimension of the corresponding characteristic subspace, that is, solving the equation$(A-\lambda I)x=0$How many linearly independent eigenvectors can be found. It is "how many independent directions are there geometrically".
  Relation: For any matrix, geometric multiplicity ≤ algebraic multiplicity. The necessary and sufficient conditions for a matrix to be diagonal are: **Geometric multiplicity of each eigenvalue = algebraic multiplicity**, and the sum of all eigenvectors can fill the basis of the entire space.

Intuitively understanding, generally a matrix will change direction when acting on a vector, but if a set of bases can be found so that the matrix only "stretches/compresses" in the directions of these bases, then the matrix will become a diagonal matrix under this set of bases. And diagonalization is "finding a suitable coordinate system to make the matrix the simplest".

## 6.6 Similarity matrix and diagonalization

### 6.6.1 Similarity matrix

Definition: If there is an invertible matrix$P$, making

$$B = P^{-1}AP$$
is called matrix$A$and$B$similar, recorded as$A \sim B$。

Features shared by the similarity matrix and the original matrix:

- The same characteristic polynomial
- The same eigenvalues ​​(including algebraic multiplicity)
- Identical traces (sum of diagonals)
- same determinant
- same rank
- Similarity relations are equivalence relations (reflexive, symmetrical, transitive)

Intuitive understanding: Similarity matrices represent **the representation of the same linear transformation under different bases**, or, for the same linear transformation, **use different coordinate systems to describe it**.

### 6.6.2 Diagonal matrices and diagonalization

Diagonal Matrix: A square matrix, if all the positions are 0 except for the elements on the main diagonal, then it is a diagonal matrix, and any element can be on the main diagonal. Note that the zero matrix and the identity matrix are also diagonal matrices.

Diagonalize: if matrix$A$with a certain diagonal matrix$D$similar, i.e.

$$A = P D P^{-1}$$
in$D$is a diagonal matrix,$P$Reversible, then it is called$A$Can be diagonalized.

Its geometric meaning is to find a suitable set of bases so that the linear transformation can be expressed in the simplest way under this set of bases (the diagonal matrix only has eigenvalues ​​on the main diagonal). Diagonalization is a special case of similarity matrices. In this case, the matrix representation for the same linear transformation is in diagonal form

diagonalization conditions

- Necessary and sufficient conditions: matrix$A$have$n$Linearly independent eigenvectors, equivalent to: **geometric multiplicity** = **algebraic multiplicity** of each eigenvalue.
- Sufficient condition: if$A$have$n$If there are two different eigenvalues, they must be diagonalizable.
- Special case: a real symmetric matrix must be orthogonally diagonalizable (eigenvectors can be taken as orthogonal bases,$P$can be taken as an orthogonal matrix).

Diagonalization steps

1. Find the characteristic polynomial$\det(A-\lambda I)=0$, solve for the eigenvalues.
2. For each eigenvalue, solve$(A-\lambda I)x=0$, find the eigenvector.
3. Check if you can get$n$linearly independent feature vectors.
4. If possible, construct$P=[x_1,x_2,\dots,x_n]$，$D=\mathrm{diag}(\lambda_1,\dots,\lambda_n)$. get$A=PDP^{-1}$。

Example: Consider the matrix:

$$A = \begin{bmatrix}2 & 0 \\ 0 & 3\end{bmatrix}$$

- Characteristic polynomial:$(\lambda-2)(\lambda-3)$, the characteristic value is$\lambda_1=2, \lambda_2=3$。
- The algebraic multiplicity of each eigenvalue = 1.
- untie$(A-2I)x=0$, get the eigenvector direction$(1,0)$。
- untie$(A-3I)x=0$, get the eigenvector direction$(0,1)$。
- The geometric multiplicity of each eigenvalue is also = 1.
- The two eigenvectors are linearly independent and form the basis of the two-dimensional space.

then$A$It is already a diagonal matrix, which means that under the standard basis it behaves as "stretched 2 times in the x direction and 3 times stretched in the y direction".

Another example:

$$B = \begin{bmatrix}1 & 1 \\ 0 & 1\end{bmatrix}$$

- Characteristic polynomial:$(\lambda-1)^2$, the eigenvalues ​​are only$\lambda=1$, algebraic multiplicity = 2.
- untie$(B-I)x=0$, the direction of the eigenvector obtained is only$(1,0)$, geometric multiplicity = 1.
- Since geometric multiplicity < algebraic multiplicity, matrix$B$Not diagonalizable.

Geometric intuition: This matrix is ​​not simply stretched, but "sheared".$(0,1)$push$(1,1)$, so there is no way to find two independent "invariant directions".

---

# 7 Inner product and orthogonality

## 7.1 Definition and orthogonal matrices

### 7.1.1 Inner product and orthogonality

- Definition of inner product: in$\mathbb{R}^n$, two vectors
  $$a=(a_1,\dots,a_n), \quad b=(b_1,\dots,b_n)$$
  The inner product (dot product) of is
  $$a \cdot b = \sum_{i=1}^n a_i b_i$$
  nature:
- symmetry:$a \cdot b = b \cdot a$
- Linearity:$(ka)\cdot b = k(a\cdot b)$
- Distributive law:$(a+b)\cdot c = a\cdot c + b\cdot c$
- Positive certainty:$a\cdot a \geq 0$, and the equal sign holds if and only if$a=0$
- Geometric meaning:$a \cdot b = |a||b|\cos\theta$

The inner product describes the angular relationship between two vectors.

- Orthogonal definition: if$a \cdot b = 0$, then the vector is called$a$and$b$Orthogonal (vertical).
- Orthogonal vector group: Every pair of vectors is orthogonal.
- Standard orthogonal vector group: On the basis of orthogonality, each vector has a length of 1, which is a unit vector.

For two vectors, to calculate the cosine of their angle, we can get it from the formula of the inner product:$$cos(\theta)=\frac{\hat{v} \cdot \hat{w}}{\|\hat{v} \| \|\hat{w}\|}$$

### 7.1.2 Orthogonal matrices

Definition: matrix$Q$satisfy

$$Q^T Q = I$$
is called$Q$is an orthogonal matrix. (Note that orthogonal matrices are easily confused with inverse matrices in form)

nature:

- Column vectors (or row vectors) form an orthonormal group of vectors.
- Preserve length and maintain angle (geometrically, rotation/reflection).
- The inverse matrix is ​​the transpose:$Q^{-1}=Q^T$。

## 7.2 Inner product space and norm

### 7.2.1 Inner product space

in linear space$V$An "inner product" operation is defined on

$$\langle u, v \rangle \in \mathbb{R} \ \text{或}\ \mathbb{C}$$
If it satisfies the following properties, it is called$V$is the inner product space:

1. Positive certainty:$\langle v,v \rangle \ge 0$, and the equal sign holds if and only if$v=0$。
2. Conjugate symmetry:$\langle u,v \rangle = \overline{\langle v,u \rangle}$。
3. Linearity: Linear to the first variable (symmetric bilinear in real space, semilinear in complex space).

Geometric meaning: The inner product describes the length and angle between vectors:

$$\langle u,v \rangle = \|u\|\|v\|\cos\theta$$
Inner product space is a generalization of Euclidean space.

### 7.2.2 Norm

The norm is a measure of the "length" of a vector, written as$\|v\|$。

condition:

1. Non-negativity:$\|v\|\ge 0$,and$\|v\|=0 \iff v=0$。
2. Homogeneity:$\|\alpha v\| = |\alpha|\|v\|$。
3. Triangle inequality:$\|u+v\| \le \|u\| + \|v\|$。

The relationship between inner product space and norm is that in inner product space, norm is induced by inner product:

$$\|v\| = \sqrt{\langle v,v \rangle}$$
In turn, not all norms come from inner products (e.g.$L^1$norm).

## 7.3 Orthogonal vectors and orthogonal basis

Orthogonal vectors: In inner product space, if two vectors$u, v$satisfy

$$\langle u, v \rangle = 0$$
is called$u$and$v$orthogonal.

Geometric meaning: In Euclidean space, orthogonality means "vertical".
nature:

- Non-zero orthogonal vectors are necessarily linearly independent.
- Orthogonality can be generalized to multiple vectors: if any two vectors in the set are orthogonal, it is called an orthogonal set.

Orthogonal Basis: If the basis of a vector space consists of two orthogonal vectors, it is called an orthogonal basis. If these basis vectors are also unit vectors, they are called orthonormal basis (Orthonormal Basis).

Common examples:$\mathbb{R}^n$standard basis in$\{e_1, e_2, \dots, e_n\}$。

## 7.4 Orthographic projection

for$\mathbb{R}^2$The projection on has been discussed earlier, the vector$\hat{v}$online$l$The projection on is$\text{proj}_{\vec{u}}(\vec{v}) = (\vec{v} \cdot \vec{u}) \vec{u}$,in$\vec{u}$is the unit vector in that direction.

The more general form is$\text{proj}_{\vec{a}}(\vec{v}) = \frac{\vec{v} \cdot \vec{a}}{\vec{a} \cdot \vec{a}} \vec{a}$
in$\vec{a}$is an arbitrary vector in that direction.

Expand it, for space$S$vector in$\vec{x}$and$S$subspace in$V$,if$\vec{u}_1,\vec{u}_2,...\vec{u}_m$yes$V$The orthonormal basis of , then

$$\text{proj}_V{\vec{x}} = (\vec{x} \cdot \vec{u}_1) \vec{u}_1 + (\vec{x} \cdot \vec{u}_2) \vec{u}_2 + ... +(\vec{x} \cdot \vec{u}_m) \vec{u}_m$$

## 7.5 Orthogonal complement spaces

Orthogonal complement space, denoted as$V^\perp$, for space$V$，$V^\perp$is all in$\mathbb{R}^n$middle pair$V$The set of vectors in which all vectors are orthogonal.

$$V^\perp=\{\vec{x} in \mathbb{R}^n : \vec{v} \cdot \vec{x} = 0 for\ all\ \vec{v} \in V\}$$
In a two-dimensional space, assuming that there is a subspace that is a straight line, then its orthogonal complementary space is the set of all vectors perpendicular to this straight line. For a two-dimensional plane in three-dimensional space, its orthogonal complementary space is the normal of the plane.

if$V$yes$\mathbb{R}^n$subspace of , then there exists$\text{dim}(V)+\text{dim}(V^\perp) = n$

## 7.6 Gram-Schmidt Orthogonalization

Gram-Schmidt orthogonalization is to construct a set of linearly independent vectors into a set of orthonormal bases, or standard orthonormal bases, in an inner product space. Its input is a set of linearly independent vectors$\{v_1, v_2, \dots, v_n\}$(usually in$\mathbb{R}^n$or$\mathbb{C}^n$）。

Its output (orthogonal): vector$\{u_1, u_2, \dots, u_n\}$, satisfying pairwise orthogonality, that is,$\langle u_i, u_j \rangle = 0(i≠ji \neq j)$。

If you want to output the standard orthonormal basis, then for each$u_i$Normalized to get$\{q_1, \dots, q_n\}$, making$\|q_i\| = 1$and$\langle q_i, q_j \rangle = 0$。

### 7.5.1 Example 1

Let there be two linearly independent vectors:

$$\quad v_1 = \begin{bmatrix}1 \\ 1\end{bmatrix}, \quad v_2 = \begin{bmatrix}1 \\ 0\end{bmatrix}$$
We are going to use Gram–Schmidt to orthogonalize them. Take it directly:
$u_1 = v_1 = \begin{bmatrix}1 \\ 1\end{bmatrix}$
we need to$v_2$neutralize$u_1$Remove the parallel parts:

$$\text{proj}_{u_1}(v_2) = \frac{v_2 \cdot u_1}{u_1 \cdot u_1} u_1$$

$$v_2 \cdot u_1 = 1\cdot 1 + 0\cdot 1 = 1$$

$$u_1 \cdot u_1 = 1^2 + 1^2 = 2$$

$$\text{proj}_{u_1}(v_2) = \frac{1}{2}\begin{bmatrix}1 \\ 1\end{bmatrix} = \begin{bmatrix}0.5 \\ 0.5\end{bmatrix}$$

Remove the shadow:

$$u_2 = v_2 - \text{proj}_{u_1}(v_2) = \begin{bmatrix}1 \\ 0\end{bmatrix} - \begin{bmatrix}0.5 \\ 0.5\end{bmatrix} = \begin{bmatrix}0.5 \\ -0.5\end{bmatrix}$$
Get the orthogonal basis

$$\{u_1, u_2\} = \left\{ \begin{bmatrix}1 \\ 1\end{bmatrix}, \begin{bmatrix}0.5 \\ -0.5\end{bmatrix} \right\}$$
Next, to get the orthonormal basis, we can divide each vector by its length:

$$\|u_1\| = \sqrt{1^2+1^2} = \sqrt{2}$$

$$e_1 = \frac{1}{\sqrt{2}}\begin{bmatrix}1 \\ 1\end{bmatrix}$$

$$\|u_2\| = \sqrt{0.5^2+(-0.5)^2} = \sqrt{0.5} = \frac{1}{\sqrt{2}}$$

$$e_2 = \frac{1}{0.707}\begin{bmatrix}0.5 \\ -0.5\end{bmatrix} = \frac{1}{\sqrt{2}}\begin{bmatrix}1 \\ -1\end{bmatrix}$$
Finally, we get the standard orthonormal basis:

$$\left\{ \frac{1}{\sqrt{2}}\begin{bmatrix}1 \\ 1\end{bmatrix}, \frac{1}{\sqrt{2}}\begin{bmatrix}1 \\ -1\end{bmatrix} \right\}$$

### 7.5.2 Example 2

set up$V$yes$\mathbb{R}^n$A subspace of , its set of basis is$\{\vec{v}_1,\vec{v}_2,\vec{v}_3\}$, now you need to use Gram–Schmidt orthogonalization to convert this set of basis into a standard orthonormal basis$\{\vec{u}_1,\vec{u}_2,\vec{u}_3\}$。

1. First, find out$\vec{u}_1$：$\vec{u}_1=\frac{\vec{v}_1}{\|\vec{v}_1\|}$
2. Next, by$\vec{u}_1$Come to$\vec{u}_2$, first calculate$\vec{v}_2^\perp$：$\vec{v}_2^\perp=\vec{v}_2-(\vec{v}_2 \cdot \vec{u}_1)\vec{u}_1$，$\vec{u}_2=\frac{\vec{v}_2^\perp}{\|\vec{v}_2^\perp\|}$
3. Finally, find$\vec{u}_3$：$\vec{v}_3^\perp=\vec{v}_3-(\vec{v}_3 \cdot \vec{u}_1)\vec{u}_1-(\vec{v}_3 \cdot \vec{u}_2)\vec{u}_2$，$\vec{u}_3=\frac{\vec{v}_3^\perp}{\|\vec{v}_3^\perp\|}$
   In this way, a set of orthonormal basis is found$\{\vec{u}_1,\vec{u}_2,\vec{u}_3\}$。

## 7.7 QR decomposition

QR decomposition is to decompose a matrix into two matrices. Essentially, it uses Gram–Schmidt orthogonalization to convert the column vectors of the matrix into a set of standard orthonormal bases (forming$Q$), and then use the upper triangular matrix$R$to record the coordinates of the original vector on these orthogonal bases.

## 7.8 Orthogonal diagonalization

If a matrix$A$is a symmetric matrix, that is$Q^TQ=I$, then it can be orthogonally diagonalized. After confirming that the conditions for a symmetric matrix are met, first find all eigenvalues ​​of the matrix. For each eigenvalue, find$ker(M-\lambda I n)$Orthogonal basis (using Gram-Schmidt method), you can get an orthogonal diagonal matrix.

Example: Consider the matrix:

$$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$$

This is a real symmetric matrix. Find its eigenvalues:
Solve the characteristic equation:

$$\det(A - \lambda I) = \begin{vmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{vmatrix} = (2-\lambda)^2 - 1=λ2−4λ+3=0= \lambda^2 - 4\lambda + 3 = 0$$

Solution:

$$λ_1=3,λ_2=1$$

Next find the eigenvectors:

- right$\lambda_1 = 3$: untie$(A - 3I)x = 0$：
  $$\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix}x \\ y\end{pmatrix} = 0$$

get$x = y$, so the eigenvector is:

$$v_1 = \begin{pmatrix}1 \\ 1\end{pmatrix}$$

- right$\lambda_2 = 1$: untie$(A - I)x = 0$：

$$\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix}x \\ y\end{pmatrix} = 0$$

get$x = -y$, so the eigenvector is:

$$v_2 = \begin{pmatrix}1 \\ -1\end{pmatrix}$$

Notice$v_1$and$v_2$Already orthogonal. We unitize them:

$$u_1 = \frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ 1\end{pmatrix}, \quad u_2 = \frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ -1\end{pmatrix}$$

Construct an orthogonal matrix$Q$

$$Q = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{pmatrix}$$

get diagonal matrix$D$

$$D = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$$

$$A = Q D Q^T$$

Right now:

$$\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{pmatrix} \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{pmatrix}^T$$

---

# 8 Quadratic form

## 8.1 Definition and matrix representation of quadratic form

For homogeneous linear equations, it can be recorded in matrix form more conveniently and directly. However, for polynomials with cross terms and quadratic terms, quadratic forms need to be used to express them in matrix form for easy calculation.
For example, for the following polynomial:$$ax^2+2bxy+cy^2$$This can be written in matrix form:$$\begin{bmatrix}
	x&y\\
\end{bmatrix}\begin{bmatrix}
	a&b\\
	b&c\\
\end{bmatrix}\begin{bmatrix}
	x\\
	y\\
\end{bmatrix}$$
After calculating this equation, you can get the initial polynomial:$ax^2+2bxy+cy^2$. Furthermore, the formula can be simplified to$x^T A x$

Then we can further derive the definition of the quadratic form: the quadratic form is a **quadratic homogeneous polynomial** about multiple variables. formal:

$$Q(x) = x^T A x$$
in:

- $x = (x_1, x_2, \dots, x_n)^T$is a vector of variables
- $A$is a **symmetric matrix** (when real quadratic)
- $Q(x)$It’s the quadratic form

Expanded form: if

$$A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{12} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{1n} & a_{2n} & \cdots & a_{nn} \end{bmatrix}$$
So

$$Q(x) = a_{11}x_1^2 + a_{22}x_2^2 + \cdots + a_{nn}x_n^2 + 2a_{12}x_1x_2 + \cdots + 2a_{ij}x_ix_j$$
Diagonal elements correspond to square terms, and off-diagonal elements correspond to cross terms.

In practice, the matrix$A$is the most important and can even be used to represent quadratic forms.
In two dimensions, a quadratic form is of the form

$$Q(x,y) = ax^2 + bxy + cy^2$$
function. Among them, there are$xy$The terms are called cross terms.

- Its equivalent curve is often a quadratic curve (ellipse, hyperbola, parabola).
- In three dimensions and higher, it corresponds to quadratic surfaces (ellipsoid, hyperboloid, etc.).

## 8.2 Preparation method and standard type

### 8.2.1 Preparation method

The goal of the formula method is to convert the quadratic form into the form of a sum of squares and eliminate the cross terms through a step-by-step "recipe". Its basic idea:

1. Select a pair of variables with a cross term, for example$2a x_1 x_2$。
2. Combine related terms into a perfect square:
   $$ax_1^2 + 2b x_1 x_2 + c x_2^2 = a\left(x_1 + \frac{b}{a}x_2\right)^2 + \left(c - \frac{b^2}{a}\right)x_2^2$$
3. Formulate the variables in turn until all cross terms are eliminated, and an expression containing only square terms is obtained, with a form similar to:
   $$f(x) = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2$$
   in$\{y_i\}$is the new variable after linear transformation.

### 8.2.2 Standard type

Definition: Convert the quadratic form into a diagonal form without cross terms through the matching method or contract transformation:

$$f(x) \sim \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2$$
Features:

- coefficient$\lambda_i$is called the standard form coefficient of the quadratic form.
- The distribution of signs of these coefficients (positive, negative, zero) determines the properties of the quadratic form.

## 8.3 Positive definite matrix and discriminant criterion (Sylvester discriminant method)

### 8.3.1 Positive definite matrix

real symmetric matrix$A$is called a positive definite matrix, if for any non-zero vector$x \in \mathbb{R}^n$, both have:

$$x^\top A x > 0$$
Similarly:

- Positive semidefinite matrix:$x^\top A x \geq 0$
- Negative definite matrix:$x^\top A x < 0$
- Semi-negative definite matrix:$x^\top A x \leq 0$
- Indefinite matrix: can take either positive or negative values

### 8.3.2 Positive certainty of eigenvalue judgment

If matrix$A$All eigenvalues ​​of are greater than 0, then$A$Right concentration. Similarly, for other situations, it can be judged as positive semi-definite, semi-negative certain, negative certain, or indefinite.

### 8.3.3 Sylvester discrimination method

Core conclusion: Real symmetric matrix$A$$The necessary and sufficient conditions for positive definiteness are: all leading principal minors are positive numbers.

Sequential principal formula:

$$\Delta_k = \det(A_k), \quad k=1,2,\dots,n$$
in$A_k$is a matrix$A$before$k \times k$The upper left submatrix.

Discrimination rules:

- like$\Delta_1 > 0, \Delta_2 > 0, \dots, \Delta_n > 0$,but$A$Right concentration.
- like$\Delta_1 < 0, \Delta_2 > 0, \Delta_3 < 0, \dots$alternating signs, then$A$Negative determination.
- If some of the principal and sub-formulas are 0, it may be positive semi-definite or negative semi-definite and requires further analysis.
- If the symbols do not satisfy the above rules, the matrix is ​​indefinite.

Example: Assume

$$A = \begin{bmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{bmatrix}$$
Then there are:

- $\Delta_1 = 2 > 0$
- $\Delta_2 = \det\begin{bmatrix}2 & -1 \\ -1 & 2\end{bmatrix} = 3 > 0$
- $\Delta_3 = \det(A) = 4 > 0$
  therefore$A$is a positive definite matrix.

---

# 9 Applications and Extensions

## 9.1 Least squares method

In many cases we need to solve a system of linear equations:

$$Ax=b$$
in:

- $A$yes$m \times n$matrix (usually$m > n$, there are more equations than unknowns)
- $x$is an unknown vector
- $b$is the observation data vector

If the system of equations has no solution, we want to find an approximate solution that minimizes the error. Let there be a residual vector$r$making vector

$$r = b - Ax$$
The approximate solution can be found by minimizing the length of . The objective function here is:

$$f(x) = \|b - Ax\|^2 = (b - Ax)^T(b - Ax)$$

Take the derivative with respect to x:

$$\nabla f(x) = -2A^T(b - Ax)$$

Let it be zero:

$$A^T(b - Ax) = 0$$

Get the Normal Equation:

$$A^T A x = A^T b$$

This is the core equation of the least squares solution. In a geometric sense, the least squares solution is$b$orthogonally projected to$A$On the column space, get the closest point.

## 9.2 Three-dimensional rotation matrix

## 9.3 Matrix decomposition (LU, PLU, LDU decomposition)

## 9.4 Singular value decomposition (SVD)

Singular value decomposition is a method of decomposing any matrix into the product of three matrices. The core formula is:

$$A = U \Sigma V^T$$

in$U$and$V$is an orthogonal matrix,$\Sigma$is a diagonal matrix containing singular values. Singular values ​​are matrices$A^TA$or$AA^T$The square roots of the eigenvalues, usually in descending order.

## 9.5 PCA (Principal Component Analysis) and data dimensionality reduction
