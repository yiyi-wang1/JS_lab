def map_over_hash(hash)
    res = []
    for key, value in hash
        res << yield(key, value) if block_given?
    end

    p res
end

map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
    "Her #{key.to_s} is #{value}"
  end
  # => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]
  
  map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
  # => [ "22222", "1010", "555555" ]