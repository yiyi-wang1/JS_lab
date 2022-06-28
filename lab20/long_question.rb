questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]

res = []
questions.each do |string|
    if(string.length > 15)
        res << string
    end
end

#Use select
# res = questions.select{|string|
#     string.length > 15
# }

p res