# Lambdas are part of the Procs class, it is a special kind of proc

# Differences between Procs and Lambdas:

# a = Proc.new {|x,y| puts "I don't care about arguments"}
# a.call(4) # even if there are not the expected amount of arguments,
# a proc will not raise an exception (throw an error)
# but a lambda would

# Procs and Lambdas return differently

# A Lambda returns like a regular method
# Procs will return from the method enclosing the Proc

def test_procs_and_lambdas
    yield
    puts "hello"
  end
  
  l = lambda do
    puts "lambda"
    return
  end
  
  p = Proc.new do
    puts "Proc"
    return
  end
  
  test_procs_and_lambdas(&l)
  test_procs_and_lambdas(&p) #-> this will not print "hello", Procs return right away

# Procs are selfish - if it encounters it's own return, it will stop right thee and ignore the return of the method that called it

# Differences #

# Create
# lambdas are defined with -> {} OR lambda{} 
# procs are defined with Proc.new{} OR proc {}

# Arguments
# lambda will need arguments as it need or it will throw exception (Arguments Error)
# procs don't care about arguments

# Return
# proc returns from it's own return and doesn care about the rest of the method's code
