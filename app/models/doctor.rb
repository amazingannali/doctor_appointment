class Doctor < ApplicationRecord
  validates :first, :last, :title, :imag, :special, presence: true 
end
