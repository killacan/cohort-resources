require_relative "walkable"

class Robot 
    include Walkable

    attr_reader :name

    def initialize(name)
        @name = name
    end

end

r = Robot.new("R2D2")
r.walk