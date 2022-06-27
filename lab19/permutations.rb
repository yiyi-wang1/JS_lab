#Without array

puts "Please enter the first inputs";
input1 = gets.chomp;
puts "Please enter the second inputs";
input2 = gets.chomp;
puts "Please enter the third inputs";
input3 = gets.chomp;

for i in 1..3
    first = input1 if i == 1
    first = input2 if i == 2
    first = input3 if i == 3
    for j in 1..3
        second = input1 if j == 1
        second = input2 if j == 2
        second = input3 if j == 3
        for k in 1..3
            third = input1 if k == 1
            third = input2 if k == 2
            third = input3 if k == 3
            puts first + " " + second + " "+ third
        end
    end
end
