puts "Please enter the input";
input = gets.chomp;

if input.include?('c') || input.include?('C')
    puts "Yes it has C"
else
    puts "There is no C"
end