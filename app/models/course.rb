class Course < ApplicationRecord
  has_many :measurements, dependent: :destroy
  has_many :enrolments
  has_many :users, through: :enrolments

  validates :name, presence: true
end
