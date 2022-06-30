module AwesomeMethods
    def greeting
        p "Hello World"
    end
end

class Abc
    include AwesomeMethods
end

a = Abc.new 
a.greeting # share methods 

class Xyz
    extend AwesomeMethods
end

x = Xyz.new
# x.greeting # cannot share methods 
Xyz.greeting

