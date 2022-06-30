# Namespace for Ruby Modules

module Computer
    class Apple
      def initialize(model)
        p "new Apple computer initialized"
      end
    end
end

module Fruit
    class Apple
      def initialize(type, color)
        p "new Apple fruit initialized"
      end
    end
end

macOs = Computer::Apple.new('iMac')
macOs = Fruit::Apple.new('Gala','red')