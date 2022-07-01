class User < ApplicationRecord
  
  validates :first, :last, :phone, :note, presence: true 
  
end
