class Dog
    def initialize(color, type)
        @color,@type = color, type
        @bones = []
    end
    attr_accessor :color, :type, :bones

    def give(bone)
        if(bones.length >= 3)
            puts "I have too many bones"
        else
            bones.push(bone)
        end
    end

    def eat_bone
        if(bones.length <= 0)
            puts "No bone to eat"
        else
            size = bones.pop.size
            puts "yummy! I ate #{size} bone"
        end
    end
end

class Bone
    def initialize(size)
        @size = size
    end
    attr_accessor :size
end

d1 = Dog.new("white", "Samoyed")

b1 = Bone.new("small")
b2 = Bone.new("big")
b3 = Bone.new("medium")
b4 = Bone.new("large")

d1.give(b1)
d1.give(b2)
d1.give(b3)

d1.eat_bone
d1.eat_bone
d1.eat_bone
d1.eat_bone
d1.give(b4)
d1.eat_bone