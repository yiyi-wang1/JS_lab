res = []

puts "Please enter the string"
input = gets.chomp

arr = input.split("")

for i in (arr.length - 1).downto(0)
    res << arr[i]
end

puts res.join("");