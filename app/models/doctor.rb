class Doctor < ApplicationRecord
  validates :first, :last, :title, :special, presence: true 
end
