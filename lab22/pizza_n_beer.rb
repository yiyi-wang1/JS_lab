class Food
    attr_accessor :sugar, :protein, :fat
    def initialize(sugar, protein, fat)
       @sugar, @protein, @fat = sugar, protein, fat
    end
end

class Pizza < Food
    attr_accessor :weight
    def initialize(weight)
        @weight = weight
    end
end

class Beer < Food
    attr_accessor :volume
    def initialize(volume)
        @volume = volume
    end
end