puts "Please enter a number"
num = gets.chomp.to_i

res = []
for i in 0...num
    line = []
    for j in 0..i
        if(j == 0 || j == i)
            line << 1
        else
            line << (res[i - 1][j - 1] + res[i - 1][j])
        end
    end
    res << line
end

p res