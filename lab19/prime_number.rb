puts "Please enter the number x";
x = gets.chomp.to_i;

puts "The first prime numbers will be: ";
count = 2;
count2 = 0;

while count2 < x
    num = 2;
    flag = true;
    while num <= count
        if num != 1 && num != count && count % num == 0
            flag = false;
            break;
        end
        num += 1;
    end
    if(flag)
        puts count;
        count2 += 1;
    end
    count += 1;
end