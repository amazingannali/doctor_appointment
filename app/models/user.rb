class User < ApplicationRecord
  
  validates :first, :last, :phone, :note, :image, presence: true 
  
end
