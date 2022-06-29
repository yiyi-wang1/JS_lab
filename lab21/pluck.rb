def pluck(arr, key_name)
    res = []
    arr.each do |element|
        # element.each_pair{ |key, val|
        #     if(key == key_name)
        #         res << val
        #     end
        # }
        if element[key_name]
            res << element[key_name]
        else
            res << nil
        end
    end
    p res
end

pluck([{a:1}, {a:2}], :a) ## returns [1,2]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]