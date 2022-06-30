class Car

    def initialize(model, type, capacity)
        puts "in the initialized method"
        # @model = model
        # @type = type
        # @capacity = capacity

        #below is same as above
        @model, @type, @capacity = model, type, capacity
    end

    attr_accessor :model, :type, :capacity

    def drive
        ignite_engine()
        p "Driving..."
    end

    def stop
        p "Stop!"
    end

    def park
        p "Paking Car"
    end

    def self.max_speed
        p "Max speed of cars produce by this factory is 200km/hr"
    end

    def details
        p "model: #{@model} | type: #{@type} | capacity: #{@capacity}"
      end

    private
    def ignite_engine
        p "Engine ignited!"
    end

    def pump_gas
        p "Pumping gas"
    end
end

c1 = Car.new("Toyota", "Sedan", 5)

c1.drive
c1.park
c1.stop

c2 = Car.new("Ford", "Truck", 5)

c2.drive
c2.park
c2.stop

# c2.max_speed
Car.max_speed

c1.details
c2.details

c3 = Car.new("Audi", "Convertible", 2)