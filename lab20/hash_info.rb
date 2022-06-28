puts "first name"
first_name = gets.chomp.capitalize

puts "last name"
last_name = gets.chomp.capitalize

puts "city of birth"
city_of_birth = gets.chomp.capitalize

puts "age"
age = gets.chomp.to_i

info = {
    "fist name" => first_name,
    "last name" => last_name,
    "city of birth" => city_of_birth,
    "age" => age
}

info.each do |key, value|
    puts "Your #{key} is #{value}"
end