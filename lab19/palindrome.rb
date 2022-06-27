puts "Please enter the input";
input = gets.chomp;

if input.reverse.eql?(input)
    puts "it is palindrome"
else
    puts "it is not a palindrome"
end