# ------------RUBY CLASS------------------
# We define a class in Ruby by using the "class" keyword
# class names are constants which means the name should start with a capital letter
# The convention is CamelCase for name classes, like CookieMonster
# The convention for file names is snake_case: cookie_monster.rb
# Best practice to keep one class in one file

# -----------GLOBAL VARIABLES--------------
$greeting = "Hello" # Creating a global variable that is accessible throughout your program.
# But usually not good practice to use them
# global variables are attributes that can be accessed by all objects and subclasses
# A global variable has a name beginning with $. It can be referred to from anywhere in a program. Before initialization, a global variable has the special value nil.
# Global variables should be used sparingly
# They are dangerous because they can be written to from anywhere
# Oversue of globals can make isolating bugs difficult
# it also tends to indicate that the design of a program has no been carefully thought out
# Whenever you do find it necessary to use a global cariable, be sure to give it a descriptive name that is unlikely to be inadvertenly used for something else later


class Cookie

    def initialize(sugar=1, flour=2)
        puts "in the initialized method"
        @sugar = sugar
        @flour = flour
        @@color = "Brown"
    end

    # getter and setter
    #1.
    # def sugar
    #     p @sugar
    # end
    #2.
    # attr_reader :sugar
    #3.
    # attr_accessor :sugar


    # setter method
    #1.
    # def sugar=(new_sugar)
    #     @sugar = new_sugar
    # end
    #2.
    # attr_writer :flour
    # 3.
    # attr_accessor :flour


    # Below accounts for both the setter and getter methods:
    attr_accessor :sugar

    # access both getter and setter methods for flour:
    attr_accessor :flour

    def bake_n_eat
        bake()
        eat()
    end

    def eat
        p "Nom Nom Nom"
    end

    def self.info
        p "Cookies are essential to a balanced diet!"
    end

    def details
        p "sugar: #{sugar} | flour: #{flour}."
    end

    private
    def bake
        p "Baking the cookie"
    end

end

# c = Cookie.new
# # c.bake
# # c.eat

# c.bake_n_eat
# # c.info # this will not work
# Cookie.info # this will work -> class-level methods


# c2 = Cookie.new(5, 1);
# # when initializing a new instance of a class. Default values could also be set
# c2.details

# c2.sugar = 3
# c2.details