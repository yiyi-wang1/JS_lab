a = [
  ['john', 'steve', 'jen'],
  ['ate', 'sat on', 'bought'],
  ['an apple', 'the couch', 'a toothbrush']
]

# sample: Returns random elements from self.

puts a.map{ |words| words.sample}.join(" ") #words represent each sub_array

