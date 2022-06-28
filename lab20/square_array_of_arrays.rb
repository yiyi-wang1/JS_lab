arr = [[2,3,4],[5,6,7],[6,7,8]]

arr.each do |sub_array|
    sub_array.map!{|element|
        element * element
    }   
end

p arr
