names = []
while true
    puts "Please enter the book names"
    name = gets.chomp
    if(name == "exit")
        break
    end
    names << name
end

puts names.sort.map{ |name|
    name.capitalize
}