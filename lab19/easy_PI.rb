pi = Math::PI

puts "What is the degrees?"
degrees = gets.chomp.to_f

radians = degrees * (pi / 180);
puts "The radians is #{radians}"