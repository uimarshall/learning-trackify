class User < ApplicationRecord
  has_secure_password
  has_many :measurements
  has_many :enrolments
  has_many :courses, through: :enrolments

  before_save :downcase_email

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze

  validates_presence_of :name, presence: true,
                               length: { minimum: 2 },
                               uniqueness: { case_sensitive: false }
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 7 }

  def downcase_email
    self.email = email.downcase
  end
end
