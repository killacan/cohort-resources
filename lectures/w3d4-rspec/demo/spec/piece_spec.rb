require 'rspec'
require 'piece'

describe Piece do
    let(:board) { double("Board", valid_pos?: true) }
    subject(:piece) { Piece.new(:white, board, [0,0]) }

    describe "#initialize" do
        context "with valid arguments" do
            it "instantiates a piece correctly" do
                expect(piece.color).to be(:white)
                expect(piece.pos).to eq([0,0])
            end
        end
        context "with invalid arguments" do
            it "raises an error when provided an invalid color" do
                expect { Piece.new(:blue, board, [0,0]) }.to raise_error(/Invalid/)
            end

            it "raises an error when provided an invalid position" do
                allow(board).to receive(:valid_pos?).and_return(false)
                expect { Piece.new(:white, board, [9,9])}.to raise_error(/Invalid/)
            end

            it 'delegates to the board to ensure the passed position is valid' do
                expect(board).to receive(:valid_pos?)
                piece
            end
        end
    end

    describe "#pos=" do
        # before(:each) { piece.pos = [1,1] }
        
        it 'correctly reassigns a piece\'s position' do
            piece.pos = [1,1]
            expect(piece.pos).to eq([1,1])
        end
    end

    describe '#symbol' do
        it 'raises an error' do
            expect { piece.symbol }.to raise_error(NotImplementedError)
        end
    end

    describe '#empty?' do
        it 'returns false' do
            expect(piece.empty?).to be(false)
        end
    end

    describe '#to_s' do
        it 'returns a formatted string' do
            allow(piece).to receive(:symbol).and_return('♕')
            expect(piece.to_s).to eq('♕')
        end
    end
end