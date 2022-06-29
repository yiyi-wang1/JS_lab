def temp_conversion (hash)
    res={}
    hash.each_key{|key| res[key] = hash[key] * 9/5 + 32}
    res
end



average_temperature_in_c = {vancouver: 13.7, edmonton: 8.5, Calgary: 10.5}
average_temperature_in_f = temp_conversion(average_temperature_in_c)

p average_temperature_in_f