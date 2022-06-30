class Book
    def initialize(type, title, authors, year)
        @type, @title, @authors, @year = type, title, authors, year
    end

    attr_accessor :type, :title, :authors, :year
end

class Library
    def initialize
        @book_shelf = []
        @computer = []
        @ipad = []
        @kindle = []
    end
    attr_accessor :book_shelf, :computer, :ipad, :kindle

    def add()
        puts "Please enter the title of this book: "
        title = gets.chomp
        puts "Please enter the authors of this book: (separate by ,)"
        authors = gets.chomp.split(",").filter{|x| x.length > 0}
        puts "Please enter the pulished year of this book: "
        year = gets.chomp.to_i
        puts "Please enter the type of this book: (paper, digital and audio)"
        type = gets.chomp

        while (!["paper", "digital", "audio"].include?(type))
            puts "Please enter the type of this book: (paper, digital and audio)"
            type = gets.chomp
        end

        new_book = Book.new(type, title, authors, year)
        
        puts "Where to store this book? (Book shelf, Computer, iPad, Kindle)"
        storeArea = gets.chomp

        while((type == "paper" && storeArea != "Book shelf") || (type == "audio" && storeArea != "Computer")) 
            puts "Please select the correct location"
            storeArea = gets.chomp
        end

        case storeArea
            when "Book shelf"
                book_shelf << new_book
            when "Computer"
                computer << new_book
            when "iPad"
                ipad << new_book
            else
                kindle << new_book
        end

    end

    def add(book)
        puts "Where to store this book? (Book shelf, Computer, iPad, Kindle)"
        storeArea = gets.chomp

        while((book.type == "paper" && storeArea != "Book shelf") || (book.type == "audio" && storeArea != "Computer")) 
            puts "Please select the correct location"
            storeArea = gets.chomp
        end

        case storeArea
            when "Book shelf"
                book_shelf << book
            when "Computer"
                computer << book
            when "iPad"
                ipad << book
            else
                kindle << book
        end
    end

    def main_library
        puts "Books in Book Shelf are followed: "
        book_shelf.each do |book|
            p "#{book.title} in #{book.type}"
        end
        puts "Books in Computer are followed: "
        computer.each do |book|
            p "#{book.title} in #{book.type}"
        end
        puts "Books in iPad are followed: "
        ipad.each do |book|
            p "#{book.title} in #{book.type}"
        end
        puts "Books in Kindle are followed: "
        kindle.each do |book|
            p "#{book.title} in #{book.type}"
        end
    end

    def sort
        main = [*book_shelf, *computer, *ipad, *kindle]
        main.sort!{|a, b| a.title  <=> b.title}
        main.each do |book|
            p "#{book.title} in #{book.type}"
        end
    end

    def search(name)
        res_from_book_shelf = book_shelf.filter{|book| book.title.downcase.include?(name.downcase)}
        res_from_computer = computer.filter{|book| book.title.downcase.include?(name.downcase)}
        res_from_ipad = ipad.filter{|book| book.title.downcase.include?(name.downcase)}
        res_from_kindle = kindle.filter{|book| book.title.downcase.include?(name.downcase)}
        if(res_from_book_shelf.length > 0)
            puts "Result in Book shelf :"
            res_from_book_shelf.each do |book|
            p "#{book.title} in #{book.type}"
            end

        end
        if(res_from_computer.length > 0)
            puts "Result in Computer :"
            res_from_computer.each do |book|
            p "#{book.title} in #{book.type}"
            end
        end
        if(res_from_ipad.length > 0)
            puts "Result in iPad :"
            res_from_ipad.each do |book|
            p "#{book.title} in #{book.type}"
            end
        end
        if(res_from_kindle.length > 0) 
            puts "Result in Kindle :"
            res_from_kindle.each do |book|
            p "#{book.title} in #{book.type}"
            end
        end
    end

end

l = Library.new
book1 = Book.new("paper", "Test book1", ["authors", "Random"], 2008)
book2 = Book.new("digital", "Test2 book1", ["authors", "Random"], 2022)
book3 = Book.new("digital", "Test3 book1", ["authors", "Random"], 2021)
l.add(book1)
l.add(book2)
l.add(book3)

# l.main_library
# l.sort
l.search("Test")