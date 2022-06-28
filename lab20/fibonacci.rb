puts "Please enter number"
number = gets.chomp.to_i

#default
res = [1, 1]

for i in 2...number
    res << res[i - 1] + res[i - 2]
end

p res