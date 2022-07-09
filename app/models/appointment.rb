class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :user

  validates :aday, :atime, :user, :note, presence: true 
end
