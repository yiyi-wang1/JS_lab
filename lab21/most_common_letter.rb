def most_common_letter(string)
    arr = string.downcase().split("").select{|x| x.match(/\w/)}
    hash = {}
    arr.each do |element|
        hash[element] = hash[element]? hash[element] + 1:1
    end
    max = hash.values[0]
    letter = hash.keys[0]
    hash.each_pair{|key, value|
        if value > max
            max = value
            letter = key
        end
    }
    p letter
end

most_common_letter("aaaabbc") # => "a"
most_common_letter("T a d c g d g d d n") # => "d"
most_common_letter("1111 monkeys on the wall") # => "1"
most_common_letter("aaa aaAAAAAAAAAAAAAAAAAAAAsd345sadg8FFFFFFFFFFFFFFFF5678fnvn!!!!!!!!!!!!!!!!!33333!!!!@!!zz34asdfzzzzjdf");


