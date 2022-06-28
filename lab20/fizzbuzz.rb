result = []

for num in 1..100
  str = ''
  str << "FIZZ" if num % 3 == 0
  str << "BUZZ" if num % 5 == 0
  ## use string so we will have fizzbuzz if the num could be divided by 3 and 5
  ## FIZZ + BUZZ will be joined together
  str << num.to_s if str.length <= 0 # if the above string is empty,
  # it means it was not divisible by 3 or 5, so we print the number
  ## because we are using str, so we will check if the str is empty or not
  result << str
end

p result