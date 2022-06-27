puts "Please enter the input";
input = gets.chomp;

for i in 0...input.length
    puts input[i].swapcase
end