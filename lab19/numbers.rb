# 2 different numbers : integer and float
1
10
100
puts 100_000_000 # same and 100000000. ruby ignores _ as spaces. 

# INTEGERS
# 5/2 = 2
puts 5/2;

# FLOAT => must declare float by putting in decimal
puts 5.0/2.0

"50".to_i # => 50 string to integer
"50".to_f # => 50 string to float

# To the power of
a = 5
b = 3 ** a

# OPERATIONS
1 + 1
1 - 1
1 * 1
1 / 1
1 % 1 # this is integer, so need float if accurate by decimals
1 ** 1

# puts "Please enter the first number";
# num1 = gets.chomp.to_f;
# puts "Please enter the second number";
# num2 = gets.chomp.to_f;
# puts num1 * num2;


# LOGICAL OPERATORS
# || OR 
# returns true if either the left or right side expression are true

1 > 4 || 8 > 4 # => true
false || false # => false

# && AND
# return true only if both side expressions are true
false && true # -> false
true && true # -> true
1 > 4 && 8 > 4 # -> false

# equality operator
100 == 100 # true
100 == '100' # false
puts 10.eql?(10.0)  # false because it will compare the type (integer != float)
