puts "Please enter the number n";
n = gets.chomp.to_i;

for i in 1..n
    puts " " * (n - i) + "O " * i
end