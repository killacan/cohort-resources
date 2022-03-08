#### BLOCK SCOPING ####

## Example 1
# x = 2

# 3.times do
#   x *= 2
# end

# puts x

## Example 2
# 3.times do
#   x = 2
# end

# puts x

# #### SCOPE GATES ####

# ## Example 1
# x = 10

# def some_method
#   puts x
# end

# some_method

# #### PASSING ARGUMENTS TO METHODS ####

# ## Example 1
# def inc(num) # num is a parameter
#   num += 1 # parameter reassigned
# end

# a = 1
# inc(a) # a is an argument

# puts a

# ## Example 2
def add_square(arr, num)
  p arr.object_id # 2nd
  arr += [num ** 2]
  p arr.object_id # 3rd
end

squares = [1, 4, 9]
p squares.object_id # 1st
add_square(squares, 4)

p squares