def factorial(num)
    res = 1
    for i in num.downto(1)
        res *= i
    end
    res
end

p factorial(6)