class User < ApplicationRecord
  
  validates :first, :last, :phone, :note, :imag, presence: true 
  
end
