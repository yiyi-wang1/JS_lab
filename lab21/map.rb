def map(arr)
    newArr =[]
    for element in arr
        newArr << yield(element) if block_given?
    end
    newArr
end

arr1 = map([1,2,3]){|x| x*5}

p arr1

map(["Hi", "Hola", "Hello"]) do |x|
    puts x + ", Students"
end