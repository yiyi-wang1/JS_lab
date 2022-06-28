arr = (1..15).to_a.shuffle

p arr
#Bubble sort

for i in 0...arr.length 
    for j in 0...arr.length - 1 - i 
        if(arr[j] > arr[j + 1])
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        end
    end
end

p arr