def each (nums)
    # for i in 0...nums.length
    #     nums[i] = yield(nums[i]) if block_given?
    # end
    newArr =[]
    for element in nums
        newArr << yield(element) if block_given?
    end
    newArr
end

arr = [1,2,3,4]
p each(arr){|x|
    x*5
}

p arr

# def each(arr)
#     for val in arr do
#       return p "no block given" unless block_given?
#       result = yield(val)
#       puts result
#     end
# end
