# CONDITIONALS

if true
    puts "happens when true"
end

x = 1

if x > 0
  puts "x is greater than zero"
end

# INLINE CONDITIONALS

temp = 15
# puts "It's cold" if temp < 15 

# UNLESS
unless temp > 15 #if the temp <= 15 -> it will run the following, the opposite 
    puts "It's cold" 
end

# ELSE STATEMENT
if false
    puts "condition is false"
else
    puts "condition is true"
end

# ELSIF
puts "how many years old is your car?"
year = gets.chomp.to_i;

if year > 10
    puts "car is very old"
elsif year > 5
    puts "car is old"
elsif year > 2
    puts "car is new"
else
    puts "car is future"
end