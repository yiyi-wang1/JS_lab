count = 0;

puts "How many sides does a hexagon have?"
puts "1- five\n2- six\n3- seven"
answer1 = gets.chomp;
if(answer1.to_i == 2)
    count+=1
end

puts "How many sides does a hexagon have?"
puts "1- five\n2- six\n3- seven"
answer2 = gets.chomp;
if(answer2.to_i == 2)
    count+=1
end

puts "How many sides does a hexagon have?"
puts "1- five\n2- six\n3- seven"
answer3 = gets.chomp;
if(answer3.to_i == 2)
    count+=1
end

puts"You scored #{(count.to_f / 3.to_f).round(2) * 100} %, you got #{count} out of 3 questions correctly."