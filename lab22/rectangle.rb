class Rectangle

    attr_accessor :width, :height

    def initialize(width=0, height=0)
        @width, @height = width, height
    end

    def area
        return @width * @height
    end

    def is_square?
        return (@width != 0 && @height != 0) && @width == @height
    end
end

r1 = Rectangle.new(2,3)

p r1.area

p r1.is_square?