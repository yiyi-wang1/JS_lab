# ---------Creating Lambdas----------

# Lambdas - lambda keyword

# say_something = lambda {puts "this is a lambda"}

# OR stabby arrow ->

# say_something_again = -> {puts "this is also a lambda created with a stabby arrow"}

# add_five = lambda {|n| p n + 5}

power_2 = -> (n=2) {p n**2}

# say_something.call
# say_something_again.call
# add_five.call(5)
# power_2.call()

# If you pass the wrong number of arguments to a lambda,
# it will raise an exception just like a regular method

# Create a proc

my_proc = Proc.new {|x| p x}

my_proc_again = proc {|x| p x}

# if we dont pass argument -> get nil
# my_proc.call
# my_proc_again.call
# my_proc.call 


# my_proc.call(2)
# my_proc_again.call("hello")
# my_proc.call #->still nil

def my_method(code)
    puts "---------#{code.class}--------"
    puts "Hey you"
    code.call(3)
    puts "Hello"
end

add_five = lambda {|n| p n + 5}

# my_method(add_five)
# my_method(my_proc)

# Using lambda as block with &
# Using as a block
# You can pass a lambda as a method argument
# prefixed with "&" to call it as a block (i.e. using yield)
# This doesn't work with regular methods,
# only procs and lambdas. In JS you can use regular functions, but not in Ruby

# Example

def map(arr)
    output = []
    for val in arr 
      output << yield(val)
    end
    output
end

map([1,2,3,4,5], &power_2)
#same as above
map([1,2,3,4,5]){|x| power_2.call(x)}
  