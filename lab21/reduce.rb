def reduce (arr, val)
    res = val
    for element in arr do
        res = yield(res, element) if block_given?
    end
    p res
end

reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21

reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } # => "This is my sentence"

reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) do |min, v|
  if min > v
     v
  else
     min
  end
end
# => 1


