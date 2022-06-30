require './cookie.rb'
# the above requires the whole cookie.rb file
# we need this to access the Cookie class

class Oreo < Cookie
    attr_accessor :filling_type

  def eat
    p "Yummy!!!"
    super # run the parent method
  end
  
end

oc = Oreo.new
p oc.sugar
oc.bake_n_eat # Child class has access to parent class methods
##the baking method is from the parent class but the eat method is from the current class
oc.filling_type = "cream"
p oc.filling_type

c4 = Cookie.new
c4.filling_type = "vanilla" # this will not work. Parent class does not have access to the child class methods and attributes