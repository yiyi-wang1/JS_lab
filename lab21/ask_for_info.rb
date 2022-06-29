def ask_for_info
    hash = {}
    puts "Please enter your first name"
    hash["first_name"] = gets.chomp
    puts "Please enter your last name"
    hash["last_name"]= gets.chomp
    puts "Please enter your age"
    hash["age"] = gets.chomp.to_i
    cities = []
    while true do
        puts "Please enter the city you have visited"
        input = gets.chomp
        if input == "done" 
            break
        else
            cities << input
        end
    end
    hash["cities"] = cities
    p hash
end

ask_for_info()