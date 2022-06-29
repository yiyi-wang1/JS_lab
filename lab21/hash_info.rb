def get_user_info
    puts "Please enter first name"
    first_name = gets.chomp
    puts "Please enter last name"
    last_name = gets.chomp
    puts "Please enter city of birth"
    city_of_birth = gets.chomp
    puts "Please enter age"
    age = gets.chomp.to_i
    user_info ={
        "first_name" => first_name,
        "last_name" => last_name,
        "city_of_birth"=> city_of_birth,
        "age" => age
    }
  user_info
end

p get_user_info()