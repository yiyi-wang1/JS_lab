def find_min *nums
    nums.reduce do |x, current_value|
      puts "Now current_value is: #{current_value}"
      puts "Now x is: #{x}"
      if x > current_value
        current_value
      else
        x
      end
    end
  end

  p find_min(20,40,12,17,10,35)