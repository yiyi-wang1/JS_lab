def frequency_of_numbers(arr)
    return arr.each_with_object({}){|element, hash| hash[element]= hash[element]? hash[element] + 1 : 1}
end

array = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]

p frequency_of_numbers(array)