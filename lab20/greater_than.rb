my_array = [1,4,5,23,14,"Hello there", false, nil]
res = []

my_array.each do |element|
    if(element.is_a?(Integer))
        res << element if element > 10
    end
end

p res