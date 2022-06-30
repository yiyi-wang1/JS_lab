class Animals
    attr_accessor :name, :color
    def initialize(name, color)
        @name, @color = name, color
    end

    def eat
        p "I am eating"
    end

    def walk
        p "I am walking"
    end
end

class Dog < Animals
    def bark
        p "Woof!"
    end

    def eat
        super
        p "Bones are yummy!"
    end
end

class Cat < Animals
    def eat
        super
        p "Fish is yummy!"
    end
end

d1 = Dog.new("Dog", "white")
d1.bark
d1.eat

c1 = Dog.new("Cat", "white")
c1.eat