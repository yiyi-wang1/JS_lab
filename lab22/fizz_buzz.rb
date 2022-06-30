class FizzBuzz
    attr_accessor :first_number, :second_number
    def initialize(first_number, second_number)
        @first_number, @second_number = first_number, second_number
    end

    def run
        res = []
        i = 1
        while i <= 100
            str =""
            if(i % first_number == 0)
                str += "Fizz"
            end
            if(i % second_number == 0)
                str += "Buzz"
            end
            if str.length == 0
                res << i.to_s
            else
                res << str
            end
            i += 1
        end
        res
    end
end

fb = FizzBuzz.new(3,5)
p fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
fb.first_number = 2
fb.second_number = 3
p fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...