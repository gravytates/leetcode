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
palindrome('racecar')
#
# def map_testing_pair(m, row)
#   m[:s_220_adp_acp_testing_provided] = IGNORE
#   m[:s_220_adp_acp_testing_frequency] = as_int(row['s_117_adp_acp_test_how_many']))
#   m[:s_226_adp_acp_testing_correction_required_svc_provided] = IGNORE
#
#   case as_int(row['s_117_adp_acp_test_svc_provided']))
#       when 1 # Yes, corrective action required
#           m[:s_220_adp_acp_testing_provided] = UPDATE
#           m[:s_226_adp_acp_testing_correction_required_svc_provided] = UPDATE
#       when 2, 4 # Yes, no corrective action or unknown
#           m[:s_220_adp_acp_testing_provided] = UPDATE
#           m[:s_226_adp_acp_testing_correction_required_svc_provided] = DELETE
#   end
# end
#
# new_map_testing_pair(m, row, 's_117_adp_acp', 's_220_adp_acp', 's_226_adp_acp')

# it will behave exactly like the old version above.


# But if we call the new function with different strings:

      # new_map_testing_pair(m, row, 'FOO', 'BAR', 'QUUX')

# it will behave like this:

# def new_map_testing_pair(m, row, in_prefix, out_testing_prefix, out_correction_prefix)
#     m[:BAR_testing_provided] = IGNORE
#     m[:BAR_testing_frequency] = as_int(row['FOO_test_how_many'])
#     m[:QUUX_testing_correction_required_svc_provided] = IGNORE
#
#     case as_int(row['FOO_test_svc_provided']))
#         when 1 # Yes, corrective action required
#             m[:BAR_testing_provided] = UPDATE
#             m[:QUUX_testing_correction_required_svc_provided] = UPDATE
#         when 2, 4 # Yes, no corrective action or unknown
#             m[:BAR_testing_provided] = UPDATE
#             m[:QUUX_testing_correction_required_svc_provided] = DELETE
#     end
# end

# You can see how the 3 strings need to be used to build the keys into the hashes.  That is really the whole problem here.

# Please complete the new function:

# def new_map_testing_pair(m, row, in_prefix, out_testing_prefix, out_correction_prefix)
#
#     testing_provided = (out_testing_prefix + '_testing_provided').to_sym
#     m[testing_provided] = IGNORE
#
#     testing_frequency = (out_testing_prefix + '_testing_frequency').to_sym
#     m[testing_frequency] = as_int(row["#{in_prefix}_test_how_many"])
#
#     testing_correction_required_svc_provided = (out_correction_prefix + '_testing_correction_required_svc_provided').to_sym
#     m[testing_correction_required_svc_provided] = IGNORE
#
#     case as_int(row["#{in_prefix}_test_svc_provided"])
#         when 1 # Yes, corrective action required
#             m[testing_provided] = UPDATE
#             m[testing_correction_required_svc_provided] = UPDATE
#         when 2, 4 # Yes, no corrective action or unknown
#             m[testing_provided] = UPDATE
#             m[testing_correction_required_svc_provided] = DELETE
#     end
# end
#
# # My code
# def new_map_testing_pair(m, row, in_prefix, out_testing_prefix, out_correction_prefix)
#     testing_provided = (out_testing_prefix + '_testing_provided').to_sym
#     m[testing_provided] = IGNORE
#
#     testing_frequency = (out_testing_prefix + '_testing_frequency').to_sym
#     m[testing_frequency] = as_int(row["#{in_prefix}_test_how_many"])
#
#     testing_correction_required_svc_provided = (out_correction_prefix + '_testing_correction_required_svc_provided').to_sym
#     m[testing_correction_required_svc_provided] = IGNORE
#
#     case as_int(row["#{in_prefix}_test_svc_provided"])
#         when 1 # Yes, corrective action required
#             m[testing_provided] = UPDATE
#             m[testing_correction_required_svc_provided] = UPDATE
#         when 2, 4 # Yes, no corrective action or unknown
#             m[testing_provided] = UPDATE
#             m[testing_correction_required_svc_provided] = DELETE
#     end
# end


# Spencer's code
# def new_map_testing_pair(m, row, in_prefix, out_testing_prefix, out_correction_prefix)
#     testing_provided = "#{out_testing_prefix}_testing_provided".to_sym
#     testing_frequency = "#{out_testing_prefix}_testing_frequency".to_sym
#     testing_correction =
#     "#{out_correction_prefix}_testing_correction_required_svc_provided".to_sym
#     test_how_many = "#{in_prefix}_test_how_many"
#     test_svc_provided = "#{in_prefix}_test_svc_provided"
#
#     m[testing_provided] = IGNORE
#     m[testing_frequency] = as_int(row[test_how_many])
#     m[testing_correction] = IGNORE
#
#     case as_int(row[test_svc_provided])
#     when 1
#       m[testing_provided] = UPDATE
#       m[testing_correction] = UPDATE
#     when 2, 4
#       m[testing_provided] = UPDATE
#       m[testing_correction] = UPDATE
#     end
# end
