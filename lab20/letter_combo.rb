puts "Please enter the string"
input = gets.chomp

arr = input.split("");
res = []

for i in 0...arr.length - 1
    res.push(arr[i]+ arr[i + 1])
end

puts res
