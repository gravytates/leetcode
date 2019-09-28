# ensure gem 'test-unit' is installed.
# to run tests, download this file and from its parent directory, use terminal to run: 
# >> ruby deserialize_nested_ints.rb

gem 'test-unit'
require 'test/unit'
require 'test/unit/ui/console/testrunner'

class Array
  def deserialize_array
    flattened_array = []
    nest_check_lambda = lambda { |array|
      array.each do |element|
        if element.class == Array
          nest_check_lambda.call element
        else
          flattened_array.push element
        end
      end
    }
    nest_check_lambda.call self
    return flattened_array
  end
end

# Test
class DeserializerTest < Test::Unit::TestCase
  def test_deserialize_array()
    assert_equal([10, 13, 1].deserialize_array, [10, 13, 1])
    assert_equal([10, [13, 1], 5].deserialize_array, [10, 13, 1, 5])
    assert_equal([10, [13, 1, [5, 6], 7], 8, 9].deserialize_array, [10, 13, 1, 5, 6, 7, 8, 9])
    assert_equal([].deserialize_array, [])
    assert_equal([[[], []], [[[]]]].deserialize_array, [])
  end
end