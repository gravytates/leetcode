# pool = ['a', 'c', 'd', 'e', 'k', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'y']
# h = 9

# CLOUD EXAMPLE
# Using the 'cloud' example, I rewrote the provided hash to ensure it was working as intended, and could recreate the number, 's'.
# s = 35502317995
#
# exampleKey = ['c','l','o','u','d']
# Indexof(Pool) = [1, 6, 9, 14, 2]

# Provided Hash
# exampleKey.each do |i|
#   h = ((h * 83) + pool.index(i))
# end
# print h
# => "35502317995"
#
#
# UNHASH THE NUMBER!

# To run the program, I loop through the pool of characters and push to the key-array only if i's index can be subtracted from n and is a multiple of 83, reversing the hash calculation. The last iteration attracts multiple character matches, being the 0 index and the 9th index, so the additional conditional, n > 9 and creating a while loop of less than 9 ensures no extraneous characters attached to the end.

# Here I recheck the answer against the hash to ensure the resulting number is the same

# newKey = 'indicator'
# newArray = newKey.split('')
# newArray.each do |i|
#   h = ((h * 83) + pool.index(i))
# end
# print h
# => 1693941520599974437
def hasher
  pool = ['a', 'c', 'd', 'e', 'k', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'y']
  h = 9
  n = 1693941520599974437
  key = []
  while key.length < h
    pool.each do |i|
      if (n - pool.index(i)) % 83 == 0 && n > 9
        key.push(i)
        n = (n - pool.index(i)) / 83
      end
    end
  end
  answer = key.reverse.join('')
  print answer
end
# hasher()
# => 'indicator'

def is_anagram(x,y)
  word1 = x.split('').sort.to_s.downcase!
  word2 = y.split('').sort.to_s.downcase!
  if word1 == word2
    print true
  else
    print false
  end
end
# is_anagram('gogdy', 'ggody')

def frequency(array)
  hash = Hash.new 0
  array.each{|key| hash[key] += 1}
  print hash

  # check if values for these two keys are equivalent
  # if hash[1] == hash[3]
  #   print 'the values of these two keys are equivalent'
  # else
  #   print false
  # end

  # check if this value belongs to this key
  if hash.key(2) == 7
    print 'value belongs to this key, true'
  else
    print false
  end
end
# frequency([1,2,3,4,5,5,6,7,5])

# sum a given amount of fibonacci numbers.
def sum_fibo(x)
  fibo_array = [1,2]
  while fibo_array.length < 10 do
    index_1 = fibo_array.length - 2
    index_2 = fibo_array.length - 1
    fibo_array.push (fibo_array[index_1] + fibo_array[index_2])
  end
  sum = fibo_array.reduce :+
  p fibo_array
  p sum
end
# sum_fibo(10)

def palindrome(x)
  half = x.length / 2
  array = x.downcase.split('')
  result = 'idk'
  (0..half).each do |i|
    l = array[i]
    if l == array[array.length - i - 1]
      result = true
    else
      result = false
      break
    end
  end
  p result
end
# palindrome('racecar')

def self_dividing(i,j)
  output = []

  if i <= j && j<= 10000
    (i..j).each do |n|
      int_array = n.to_s.split('')
      divisible = 0
      int_array.each do |m|
        if m.to_i == 0
          divisible = 1
        elsif n % m.to_i != 0
          divisible = 1
        end
      end
      if divisible == 0
        output.push n
      end
    end
  end
  p output
end
# self_dividing(1,22)

def max_island_area(grid)
  islands = [0]
  def island_size(grid,row_index,unit_index,a)
    b = []
    #grid[row_index] should be row_index index, grid[row_index][unit_index] should be specific unit_index index along row_index
    if unit_index < grid[row_index].length && unit_index >= 0 && row_index < grid.length && grid[row_index][unit_index] == 1#search within bounds
      # p [row_index, unit_index]
      grid[row_index][unit_index] = 0
      a += 1 #replace value
      p a
      b.push a

      island_size(grid, row_index, (unit_index - 1), a)
      island_size(grid, row_index, (unit_index + 1), a)
      island_size(grid, (row_index + 1), unit_index, a)
      island_size(grid, (row_index - 1), unit_index, a)
    else
      return a
    end

  end

  grid.each do |row|
    row.each do |unit|
      if unit == 1
        area = island_size(grid, grid.index(row), row.index(unit), 1)
        islands.push area
          #if you find an island, call function to find size of island.
          #args: the grid, row index, unit index of row, and init area: 1
      end
    end
  end

  # island_size(grid)
  p islands #sorts islands by area and returns largest value
end
max_island_area([[0,0,1,0,0,0,0,1,0,0,0,0,0],
                 [0,0,0,0,0,0,0,1,1,1,0,0,0],
                 [0,1,1,0,1,0,0,0,0,0,0,0,0],
                 [0,1,0,0,1,1,0,0,1,0,1,0,0],
                 [0,1,0,0,1,1,0,0,1,1,1,0,0],
                 [0,0,0,0,0,0,0,0,0,0,1,0,0],
                 [0,0,0,0,0,0,0,1,1,1,0,0,0],
                 [0,0,0,0,0,0,0,1,1,0,0,0,0]])

# junk
# if grid[row_index][unit_index-1] == 1 #dfs left branch
#   p 'left is one'
#   grid[row_index][unit_index-1] = 0
#   a += 1
#   island_size(grid, row_index, (unit_index-1), a)
#
#   if grid[row_index][unit_index+1] == 1
#     p 'left is one and right is one'
#     grid[row_index][unit_index+1] = 0
#     a += 1
#     island_size(grid, row_index, (unit_index+1), a)
#     #search right spaces
#   end
#   if row_index + 1 < grid.length && grid[row_index+1][unit_index] == 1
#     p 'left is one, down is one'
#     grid[row_index+1][unit_index] = 0
#     a += 1
#     island_size(grid, (row_index+1), unit_index, a)
#     #drop down a level?
#   end
#   #search all left spaces
# elsif grid[row_index][unit_index+1] == 1 #dfs right branch
#   p 'left is zero, right is one'
#   grid[row_index][unit_index+1] = 0
#   a += 1
#   island_size(grid, row_index, (unit_index+1), a)
#
#   if row_index + 1 < grid.length && grid[row_index+1][unit_index] == 1
#     p 'right is one, down is one'
#     grid[row_index+1][unit_index] = 0
#     a += 1
#     island_size(grid, (row_index+1), unit_index, a)
#   end
# elsif row_index + 1 < grid.length && grid[row_index+1][unit_index] == 1 #dfs lower branch
#   p 'left is zero, right is zero, down is one'
#   grid[row_index+1][unit_index] = 0
#   a += 1
#   island_size(grid, (row_index+1), unit_index, a)
# else
#   p 'end of island'
#   p a
# end
