

arr = [2,8,4,1,9,5,6,10,10]

#with hashes

hash = {}
# arr.each do |val|
#     if hash[val]
#         puts "Duplicated number is #{val}"
#     else
#         hash[val] = val
#     end
# end

arr.map.with_index{|val, index|
    if hash[val]
        puts "Duplicated number is #{val}"
    else
        hash[val] = index
    end
}


#without hashes 
# arr.sort!

# for i in 1...arr.length
#     if(arr[i] == arr[i - 1])
#         puts "Duplicated number is #{arr[i]}"
#         break
#     end
# end
