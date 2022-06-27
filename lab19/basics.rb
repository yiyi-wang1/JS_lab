# COMMENTS
# Ruby comments use # to start a single line comment

=begin
    I'm a multiline comment
    this is the syntax
=end

# CONSOLE PRINTING

# print("Hello World");
# print("Goodbye World"); #two print will be on the same line

#puts will print in seperate lines
# puts("Hello World");
# puts("Goodbye World"); 

#p will put qutations on content
# p"Hello World";
# p("Goodbye World"); 

# methods in ruby don't require parantheses

# In ruby we don't use backticks
# p `hello\n`

# VARIABLES
# We use snake_case

# first_name = "Sam";
# puts first_name;
# p first_name;

# a = 1
# b = a + 5
# c = a + b

# a = 11;

# puts a,b,c;

# a1 = 11
# 2a = not acceptable

# variables with all caps are considered contants
# MAX_PASSWORD_ATTEMPTS = 5

# below is possible but not good practice
# MAX_PASSWORD_ATTEMPTS = 6
# it will give the warning: 
=begin
basics.rb:49: warning: already initialized constant MAX_PASSWORD_ATTEMPTS
basics.rb:46: warning: previous definition of MAX_PASSWORD_ATTEMPTS was here

BUT the constant will still change!
=end

# puts MAX_PASSWORD_ATTEMPTS;

# gets method allows you to prompt a user for input
# puts "Please enter your name"
# user_input = gets
# puts "your name is #{user_input}"

# puts "input a number?"
# number = gets; # if you dont use chomp it will add the \n
# p number; # or you can use number.to_i here

# puts "Please enter your first name?"
# first_name = gets.chomp
# puts "what's your last name?"
# last_name = gets.chomp
# puts first_name + " " + last_name

# Everything in Ruby is an object
puts 1.class # Integer (class of integer)
puts 3.14.class # Float
puts "I am a string".class # String

# STRINGS
# "I'm a string"
# 'I\'m also a string'
# "I'm a string with string interpolation #{my_variable}"

name = "Brett"
puts "Hello #{name}"
puts name

# Strings are mutable!!
name[0] = "F"
puts name
