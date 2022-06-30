require('./cat_bird_helper')

class Animals
    def initialize(name)
        @name = name
    end
    attr_accessor :name
end

class Cat < Animals
    include HelperMethods
    
    def catch(bird)
        chance = self.random_number
        if(chance == 0)
            puts "Did not catch the bird: #{bird.name}"
        else
            puts"Ate the bird: #{bird.name}"
        end
    end
end

class Bird < Animals

end

c1 = Cat.new("Tom")
b1 = Bird.new("Bird")
c1.catch(b1)
